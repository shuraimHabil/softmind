"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./ChatBot.module.css";

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
      text: "Hello! I am Softmind's AI care assistant. I'm here to help guide you to the right resources, therapists, or information about our care model. How are you feeling today?",
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

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = {
      id: Math.random().toString(),
      sender: "user",
      text: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response after a delay
    setTimeout(() => {
      let botResponseText = "";
      const lowerText = text.toLowerCase();

      if (lowerText.includes("book") || lowerText.includes("session") || lowerText.includes("appointment")) {
        botResponseText = "To book a session, simply click the 'Book a Session' button at the top right of the screen. You can select your concerns, choose a slot, and confirm in under a minute.";
      } else if (lowerText.includes("clinician") || lowerText.includes("therapist") || lowerText.includes("practitioner")) {
        botResponseText = "We have over 35+ expert clinicians specializing in emotional well-being, relationship counseling, child psychology, and life challenges. You can view them on our 'Clinicians' page.";
      } else if (lowerText.includes("rci") || lowerText.includes("register")) {
        botResponseText = "Softmind centers and practices are Rehabilitation Council of India (RCI) registered, ensuring the highest standards of safety, quality, and clinical ethics in psychological care.";
      } else if (lowerText.includes("anxious") || lowerText.includes("anxiety") || lowerText.includes("stress")) {
        botResponseText = "I'm sorry to hear that you are feeling anxious. Deep breathing can help anchor you. Try inhaling slowly for 4 seconds, holding for 4, and exhaling for 4. Our therapists specialize in evidence-based care for anxiety, and we'd be glad to support you in a structured session.";
      } else {
        botResponseText = "Thank you for sharing that. As an AI assistant, I can help you locate information or guide you to our clinical team. For personalized therapy, I highly recommend scheduling a consultation with one of our licensed experts.";
      }

      const botMsg: Message = {
        id: Math.random().toString(),
        sender: "bot",
        text: botResponseText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
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
        aria-label="Toggle Softmind AI Assistant"
      >
        <Image 
          src="/assets/softmind_ai.png"
          alt="Softmind AI Bot logo"
          fill
          className={styles.triggerImg}
          sizes="60px"
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
                  src="/assets/softmind_ai.png"
                  alt="Softmind AI"
                  width={34}
                  height={34}
                  className={styles.headerImg}
                />
              </div>
              <div className={styles.headerText}>
                <h4 className={styles.botName}>Softmind AI</h4>
                <div className={styles.statusWrap}>
                  <span className={styles.statusDot} />
                  <span className={styles.statusText}>Active Assistant</span>
                </div>
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
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`${styles.msgRow} ${msg.sender === "user" ? styles.msgUser : styles.msgBot}`}
              >
                <div className={styles.bubble}>
                  <p className={styles.bubbleText}>{msg.text}</p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
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
        </div>
      )}
    </div>
  );
}
