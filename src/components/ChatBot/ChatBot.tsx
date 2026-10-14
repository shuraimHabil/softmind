"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./ChatBot.module.css";

function formatMessageContent(content: string): string {
  if (!content) return "";
  return content.replace(/<br\s*\/?>/gi, "\n\n");
}

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
}

const SUGGESTIONS = [
  "How do I book a session?",
  "Tell me about your clinicians.",
  "What is RCI registered?",
  "I'm feeling anxious today.",
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hello! I am Minda, your care companion. I'm here to help guide you to the right resources, therapists, or information about our care model. How are you feeling today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return;

    // Add user message
    const userMsg: Message = {
      id: Math.random().toString(),
      sender: "user",
      text: text.trim(),
      timestamp: new Date(),
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInputValue("");
    setIsTyping(true);

    const botMsgId = Math.random().toString();
    const botMsg: Message = {
      id: botMsgId,
      sender: "bot",
      text: "",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, botMsg]);

    try {
      const payloadMessages = newMessages.map((m) => ({
        role: m.sender === "user" ? "user" : "assistant",
        content: m.text,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: payloadMessages }),
      });

      if (!res.ok) {
        throw new Error(`Chat API error: ${res.status}`);
      }

      if (!res.body) {
        throw new Error("No response body");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          const trimmedLine = line.trim();
          if (!trimmedLine || trimmedLine === "data: [DONE]") continue;

          if (trimmedLine.startsWith("data: ")) {
            try {
              const data = JSON.parse(trimmedLine.slice(6));
              if (data.text) {
                setMessages((prev) =>
                  prev.map((msg) =>
                    msg.id === botMsgId
                      ? { ...msg, text: msg.text + data.text }
                      : msg
                  )
                );
              }
            } catch {
              // Ignore partial chunk parse errors
            }
          }
        }
      }
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMsgId
            ? {
                ...msg,
                text:
                  msg.text ||
                  "I am having a moment connecting. Please feel free to retry or reach our care coordinator at +91 7736 484 813.",
              }
            : msg
        )
      );
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage(inputValue);
    }
  };

  return (
    <div className={styles.chatWrapper}>
      {/* Floating Trigger Button */}
      <button 
        className={`${styles.triggerBtn} ${isOpen ? styles.active : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Minda Assistant"
      >
        <Image 
          src="/assets/minda.png"
          alt="Minda"
          fill
          className={styles.triggerImg}
          sizes="70px"
        />
      </button>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className={styles.chatWindow}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.avatarWrap}>
              <div className={styles.avatar}>
                <Image 
                  src="/assets/minda.png"
                  alt="Minda"
                  width={48}
                  height={48}
                  className={styles.headerImg}
                />
                <span className={styles.statusDot} aria-hidden="true" />
              </div>
              <div className={styles.headerText}>
                <h4 className={styles.botName}>Minda</h4>
                <span className={styles.statusText}>Softmind&apos;s Care Companion</span>
              </div>
            </div>
            <button 
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className={styles.messagesArea}>
            {messages
              .filter((msg) => msg.text.length > 0)
              .map((msg) => (
                <div 
                  key={msg.id} 
                  className={`${styles.msgRow} ${msg.sender === "user" ? styles.msgUser : styles.msgBot}`}
                >
                  <div className={styles.bubble}>
                    {msg.sender === "user" ? (
                      <p className={styles.bubbleText}>{msg.text}</p>
                    ) : (
                      <div className={styles.markdownBody}>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {formatMessageContent(msg.text)}
                        </ReactMarkdown>
                      </div>
                    )}
                  </div>
                </div>
              ))}

            {/* Typing Indicator */}
            {isTyping && messages[messages.length - 1]?.text === "" && (
              <div className={`${styles.msgRow} ${styles.msgBot}`}>
                <div className={`${styles.bubble} ${styles.typingBubble}`}>
                  <span className={styles.typingDot} />
                  <span className={styles.typingDot} />
                  <span className={styles.typingDot} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestion Chips */}
          <div className={styles.suggestionsContainer}>
            <div className={styles.suggestionsList}>
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  className={styles.chip}
                  onClick={() => handleSendMessage(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className={styles.inputArea}>
            <input
              type="text"
              placeholder="Type your wellness concern..."
              className={styles.input}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button 
              className={styles.sendBtn}
              onClick={() => handleSendMessage(inputValue)}
              aria-label="Send Message"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>

          {/* Bottom Disclaimer */}
          <div className={styles.disclaimer}>
            Minda can make mistakes. Check important info
          </div>
        </div>
      )}
    </div>
  );
}
