import { getSoMiSystemPrompt } from "./systemPrompt";
import { sanitizeOutput } from "./guardrails";

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

/**
 * Streams chat completion chunks from Groq or xAI Grok API
 */
export async function streamGrokChat(
  messages: ChatMessage[],
  onChunk: (chunk: string) => void,
  signal?: AbortSignal
): Promise<void> {
  const apiKey = process.env.GROK_API_KEY?.trim();

  // If no API key is configured yet, stream an informative local demo response
  if (!apiKey || apiKey === "your_xai_grok_key_here") {
    const fallbackText = getFallbackResponse(messages[messages.length - 1]?.content || "");
    const words = fallbackText.split(" ");
    for (let i = 0; i < words.length; i++) {
      if (signal?.aborted) break;
      const word = (i === 0 ? "" : " ") + words[i];
      onChunk(sanitizeOutput(word));
      await new Promise((r) => setTimeout(r, 25));
    }
    return;
  }

  // Auto-detect whether it is a Groq key (gsk_...) or an xAI Grok key (xai-...)
  const isGroq = apiKey.startsWith("gsk_");
  const apiUrl = isGroq
    ? "https://api.groq.com/openai/v1/chat/completions"
    : "https://api.x.ai/v1/chat/completions";

  let model = process.env.GROK_MODEL?.trim() || "";
  if (isGroq) {
    if (!model || model.toLowerCase().includes("grok") || model.includes("llama-3.3")) {
      model = "openai/gpt-oss-120b";
    }
  } else {
    if (!model || !model.toLowerCase().includes("grok")) {
      model = "grok-2-latest";
    }
  }

  // Prepend the comprehensive So Mi system prompt
  const fullMessages: ChatMessage[] = [
    { role: "system", content: getSoMiSystemPrompt() },
    ...messages
  ];

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: model,
      messages: fullMessages,
      stream: true,
      temperature: 0.6,
      max_tokens: 1000
    }),
    signal
  });

  if (!response.ok) {
    const errText = await response.text();
    console.error("AI Provider API Error:", response.status, errText);
    throw new Error(`AI Provider API returned status ${response.status}: ${errText}`);
  }

  if (!response.body) {
    throw new Error("No response body received from API");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() || "";

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed === "data: [DONE]") continue;

      if (trimmed.startsWith("data: ")) {
        try {
          const json = JSON.parse(trimmed.slice(6));
          const content = json.choices?.[0]?.delta?.content;
          if (content) {
            onChunk(sanitizeOutput(content));
          }
        } catch {
          // Skip unparseable streaming lines
        }
      }
    }
  }
}

function getFallbackResponse(userPrompt: string): string {
  const lower = userPrompt.toLowerCase();

  if (lower.includes("book") || lower.includes("session") || lower.includes("appointment")) {
    return "To book a session with Softmind, you can visit our Panampilly Nagar centre in Kochi, or our centres in Thrissur, Calicut, and Trivandrum. We also offer secure online video consultations worldwide! You can reach our care desk at +91 7736 484 813 or email info@softmindindia.com.";
  }

  return "Hello! I am So Mi, your Softmind care companion. I am here to assist you with information about our mental health services, licensed clinicians, therapy approaches, clinic locations, and booking consultations.";
}
