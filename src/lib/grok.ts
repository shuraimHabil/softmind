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
    return "To book a session with Softmind, you can visit our **Panampilly Nagar Flagship Centre** or our **Kakkanad Clinic** in Kochi. We also offer secure online video consultations worldwide!\n\n• **Panampilly Nagar Desk:** +91 7736 484 813\n• **Kakkanad Clinic Desk:** +91 9846 060 111\n• **Email:** info@softmindindia.com\n\nYou can also click the **Book Now** button at the top of the page.";
  }

  if (lower.includes("anxiet") || lower.includes("panic") || lower.includes("worry") || lower.includes("nervous")) {
    return "**Understanding Anxiety & Panic:**\n\nAnxiety is your nervous system's natural protective response to perceived danger, triggering the fight-or-flight response. When anxiety becomes frequent or overwhelming, it can show up as:\n\n• **Physical Sensations:** Rapid heartbeat, shallow breathing, muscle tension, or stomach discomfort.\n• **Cognitive Patterns:** Racing thoughts, anticipating worst-case scenarios, or persistent worry.\n• **Behavioral Tendencies:** Avoiding situations, places, or conversations that feel stressful.\n\n**Quick Grounding Step (4-4-4 Breathing):**\nInhale slowly for 4 seconds, hold gently for 4 seconds, and exhale smoothly for 4 seconds. Repeat for 3 to 5 cycles to signal safety to your body.\n\nTherapy approaches like **Cognitive Behavioural Therapy (CBT)** and **Acceptance & Commitment Therapy (ACT)** are highly effective for learning how to respond differently to anxious thoughts. Softmind's psychologists can guide you through tailored care at our Kochi centres or online.";
  }

  if (lower.includes("depress") || lower.includes("sad") || lower.includes("low mood") || lower.includes("hopeless")) {
    return "**Understanding Depression & Low Mood:**\n\nDepression is more than ordinary sadness—it affects how you think, feel, and manage daily life. It often involves:\n\n• Persistent feelings of emptiness, sadness, or emotional numbness.\n• Loss of interest in hobbies or activities you once enjoyed.\n• Fatigue, sleep disruptions, and low physical energy.\n• Critical or self-blaming thoughts.\n\nIt is important to remember that experiencing depression is **not a sign of weakness or personal failure**.\n\nEvidence-based therapies, including **Cognitive Behavioural Therapy (CBT)** and **Behavioural Activation**, help break cycles of withdrawal and re-engage with supportive routines. At Softmind, our psychologists and psychiatrists work collaboratively to provide empathetic, individualized support.";
  }

  if (lower.includes("adhd") || lower.includes("focus") || lower.includes("attention") || lower.includes("distract")) {
    return "**Understanding ADHD & Attention Differences:**\n\nAttention Deficit Hyperactivity Disorder (ADHD) is a neurodevelopmental difference in executive functioning and dopamine regulation, not a lack of willpower or effort. Common experiences include:\n\n• Difficulty sustaining attention on routine tasks, while sometimes experiencing intense hyperfocus on stimulating interests.\n• Challenges with time perception, organization, planning, and task initiation.\n• Restlessness, impulsivity, or feeling constantly driven by internal energy.\n\n**Helpful Support Pathways:**\n• **Psychological Assessments:** Standardized diagnostic evaluations to understand individual cognitive profiles.\n• **ADHD-Informed Therapy:** Skills-based coaching for executive function, emotional regulation, and daily structure.\n\nSoftmind provides comprehensive diagnostic assessments and individualized psychological support across our Kochi clinics and online.";
  }

  if (lower.includes("stress") || lower.includes("burnout") || lower.includes("overwhelm")) {
    return "**Navigating Stress & Burnout:**\n\nChronic stress occurs when prolonged emotional, professional, or personal demands exceed your current coping resources. Common signs of burnout include:\n\n• Emotional exhaustion and feeling chronically drained.\n• Detachment, cynicism, or reduced sense of accomplishment.\n• Physical fatigue, headaches, or sleep disturbances.\n\n**Manageable Next Steps:**\n• Establish clear micro-boundaries around work and rest.\n• Incorporate daily nervous system regulation (gentle walking, somatic breathing, unplugged quiet time).\n• Speak with a licensed psychotherapist to examine recurring pressure patterns and develop sustainable routines.\n\nSoftmind's clinicians are here to support your well-being through individual therapy and lifestyle regulation.";
  }

  return "Hello! I am **Minda**, your Softmind care companion.\n\nI am here to assist you with information about mental health conditions, evidence-informed psychotherapy, psychological assessments, our clinicians, and booking consultations at our Kochi clinics or online. How may I support you today?";
}
