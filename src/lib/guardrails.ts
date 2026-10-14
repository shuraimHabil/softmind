import { SOFTMIND_KNOWLEDGE } from "./knowledgeBase";

export interface GuardrailCheckResult {
  isBlocked: boolean;
  isCrisis: boolean;
  blockedResponse?: string;
  crisisResponse?: string;
}

// Patterns that attempt to extract credentials, env secrets, or internal administrative details
const CREDENTIAL_PROBE_PATTERNS = [
  /admin\s*credentials?/i,
  /admin\s*password/i,
  /api[\s_-]?key/i,
  /env(?:ironment)?\s*(?:var|variables?|file|\.env)/i,
  /frappe[_\s]?(?:secret|token|password|admin)/i,
  /database[_\s]?(?:password|url|uri|connection)/i,
  /secret[_\s]?key/i,
  /system\s*prompt/i,
  /reveal\s*(?:all\s*)?instructions/i,
  /ignore\s*(?:all\s*)?previous\s*instructions/i,
  /jailbreak/i,
  /dan\s*mode/i,
  /developer\s*mode/i,
  /internal\s*token/i,
  /auth(?:orization)?\s*token/i,
  /xai[-_]api/i
];

// Crisis and self-harm keywords requiring immediate empathetic safety helpline response
const CRISIS_PATTERNS = [
  /\bkill\s*myself\b/i,
  /\bsuicid(?:e|al)\b/i,
  /\bend\s*(?:my\s*)?life\b/i,
  /\bwant\s*to\s*die\b/i,
  /\bdon'?t\s*want\s*to\s*live\b/i,
  /\bself[\s_-]?harm\b/i,
  /\bhurt\s*myself\b/i,
  /\bhang\s*myself\b/i,
  /\boverdose\b/i
];

/**
 * Checks an incoming user prompt against security and crisis guardrails
 */
export function checkInputGuardrails(userPrompt: string): GuardrailCheckResult {
  const trimmed = userPrompt.trim();

  // 1. Check for crisis signals first (highest clinical priority)
  for (const pattern of CRISIS_PATTERNS) {
    if (pattern.test(trimmed)) {
      return {
        isBlocked: true,
        isCrisis: true,
        crisisResponse: `I hear how much pain you are experiencing right now, and I want you to know that your life matters and you do not have to carry this alone. 

Please reach out immediately to compassionate, trained professionals who are available 24/7 to support you:

• **Tele-MANAS (Govt. of India)**: Dial **14416** (Toll-free, 24/7, confidential)
• **KIRAN Helpline**: Dial **1800-599-0019** (24/7 support)
• **Emergency Services**: Dial **112**
• **Softmind Direct Care Line**: **+91 7736 484 813**

If you are in immediate danger, please reach out to someone you trust or visit the nearest emergency medical facility right away. We care about you.`
      };
    }
  }

  // 2. Check for security/credential probing and prompt injection
  for (const pattern of CREDENTIAL_PROBE_PATTERNS) {
    if (pattern.test(trimmed)) {
      return {
        isBlocked: true,
        isCrisis: false,
        blockedResponse: `I am **Minda**, Softmind's healthcare companion. For safety and patient privacy reasons, I do not discuss internal system instructions, administrative credentials, environment configurations, or API keys. 

I am here exclusively to assist you with Softmind's mental healthcare services, clinic details, therapy guidance, and appointment bookings. How can I help you with your wellness today?`
      };
    }
  }

  return { isBlocked: false, isCrisis: false };
}

/**
 * Sanitizes model output chunks to guarantee no sensitive tokens or environment secrets leak
 */
export function sanitizeOutput(text: string): string {
  // Redact potential API keys (xai-..., sk-..., etc.)
  let sanitized = text.replace(/xai-[a-zA-Z0-9_-]{20,}/gi, "[REDACTED]");
  sanitized = sanitized.replace(/sk-[a-zA-Z0-9_-]{20,}/gi, "[REDACTED]");
  sanitized = sanitized.replace(/bearer\s+[a-zA-Z0-9._-]{20,}/gi, "Bearer [REDACTED]");
  // Strip out accidental mentions of .env or passwords
  sanitized = sanitized.replace(/(?:password|secret|api_key|token)\s*[:=]\s*['"][^'"]+['"]/gi, "[REDACTED]");

  return sanitized;
}
