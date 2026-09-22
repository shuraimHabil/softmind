"use client";

import { useState } from "react";
import styles from "./OnlineConsultationFAQ.module.css";

const faqs = [
  {
    question: "Is online consultation as effective as in-person therapy?",
    answer: "Yes! Multiple clinical studies show that online psychological consultation and tele-psychiatry are just as effective as face-to-face sessions for most emotional, cognitive, and relational concerns. Many clients find it even more effective due to reduced stress and the comfort of their home environment."
  },
  {
    question: "What equipment or app do I need for the video session?",
    answer: "All you need is a smartphone, tablet, or computer with a camera, microphone, and a stable internet connection. No complicated software download is required — you will receive a direct encrypted link to join your session in your web browser."
  },
  {
    question: "How is my privacy and confidentiality protected online?",
    answer: "Your privacy is paramount. Softmind uses end-to-end encrypted telemedicine platforms compliant with international privacy standards. Your video stream and clinical notes are strictly confidential between you and your specialist."
  },
  {
    question: "Can I get a medical prescription through online psychiatric consultation?",
    answer: "Yes, our licensed psychiatrists can evaluate clinical conditions online and issue valid digital e-prescriptions where medically appropriate under official Tele-Psychiatry guidelines."
  },
  {
    question: "What languages are available for online consultation?",
    answer: "Our clinicians offer consultations in English, Malayalam, Hindi, and Tamil. You can choose a clinician based on your preferred language when booking."
  },
  {
    question: "What if I experience technical issues during my session?",
    answer: "If you encounter network interruptions, your clinician or our support desk will immediately assist you via phone call or WhatsApp to reconnect or adjust session timing so you don't lose your dedicated time."
  }
];

export default function OnlineConsultationFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Got Questions?</span>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>
            Everything you need to know about Softmind Online Consultation.
          </p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className={styles.faqIcon}>{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className={styles.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
