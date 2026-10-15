import { NextRequest, NextResponse } from "next/server";
import { checkInputGuardrails } from "@/lib/guardrails";
import { streamGrokChat, ChatMessage } from "@/lib/grok";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid request: 'messages' array is required." },
        { status: 400 }
      );
    }

    const lastMessage: ChatMessage = messages[messages.length - 1];
    if (!lastMessage || typeof lastMessage.content !== "string") {
      return NextResponse.json(
        { error: "Invalid last message format." },
        { status: 400 }
      );
    }

    // 1. Evaluate safety & security guardrails
    const guardrail = checkInputGuardrails(lastMessage.content);

    // If blocked (credentials/injection) or crisis, stream safety message immediately
    if (guardrail.isBlocked) {
      const responseText = guardrail.crisisResponse || guardrail.blockedResponse || "";
      const encoder = new TextEncoder();

      const stream = new ReadableStream({
        async start(controller) {
          const words = responseText.split(" ");
          for (let i = 0; i < words.length; i++) {
            const token = (i === 0 ? "" : " ") + words[i];
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text: token })}\n\n`));
            await new Promise((r) => setTimeout(r, 20));
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        }
      });

      return new Response(stream, {
        headers: {
          "Content-Type": "text/event-stream; charset=utf-8",
          "Cache-Control": "no-cache, no-transform",
          Connection: "keep-alive"
        }
      });
    }

    // 2. Stream response from Grok API
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          await streamGrokChat(
            messages,
            (chunk: string) => {
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ text: chunk })}\n\n`)
              );
            },
            req.signal
          );
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        } catch (err: any) {
          console.error("Chat streaming error:", err);
          const errorMessage =
            "I encountered a temporary service connection delay. Please feel free to retry or reach our care coordinator at +91 7736 484 813.";
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ text: errorMessage })}\n\n`)
          );
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        }
      }
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive"
      }
    });
  } catch (error: any) {
    console.error("API error in /api/chat:", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
