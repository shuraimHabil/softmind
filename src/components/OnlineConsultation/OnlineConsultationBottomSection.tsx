"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./OnlineConsultationBottomSection.module.css";
import { useBookingModal } from "@/components/BookingModal/BookingModalContext";

const faqs = [
  {
    question: "Is online consultation confidential?",
    answer: "Yes, completely. All online consultations take place over end-to-end encrypted video platforms. Your privacy, clinical records, and discussions are strictly protected under clinical confidentiality ethics."
  },
  {
    question: "How long is a session?",
    answer: "Individual therapy sessions typically last 45 to 50 minutes. Psychiatric evaluations or initial diagnostic consultations usually run between 45 to 60 minutes."
  },
  {
    question: "Can I choose my psychologist?",
    answer: "Absolutely. You can review detailed clinician profiles, clinical specializations, languages spoken (English, Malayalam, Hindi, Tamil), and select the specialist you feel most comfortable with."
  },
  {
    question: "Can children receive online consultation?",
    answer: "Where clinically appropriate and as per professional judgment, online sessions are available for adolescents and parents. For younger children, parental guidance sessions are conducted online."
  }
];

export default function OnlineConsultationBottomSection() {
  const { openModal } = useBookingModal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section} id="faq-section">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Start with a conversation */}
          <div className={styles.startCard}>
            <div className={styles.plantIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="36" height="36">
                <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
              </svg>
            </div>

            <h2 className={styles.startTitle}>Start with a conversation.</h2>
            <p className={styles.startSubtitle}>
              We&apos;re here to help you take the first step towards feeling better.
            </p>

            <div className={styles.actionCardsGrid}>
              <div className={styles.actionCard}>
                <div className={styles.actionIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h4 className={styles.actionCardTitle}>Find an Online Professional</h4>
                <Link href="/clinicians" className={styles.actionBtn}>
                  Find Now
                </Link>
              </div>

              <div className={styles.actionCard}>
                <div className={styles.actionIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <h4 className={styles.actionCardTitle}>Book an Online Consultation</h4>
                <button onClick={openModal} className={styles.actionBtn}>
                  Book Now
                </button>
              </div>

              <div className={styles.actionCard}>
                <div className={styles.actionIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <h4 className={styles.actionCardTitle}>Chat on WhatsApp</h4>
                <a 
                  href="https://wa.me/917736484813" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.actionBtn}
                >
                  Chat Now
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Frequently Asked Questions */}
          <div className={styles.faqCol}>
            <div className={styles.faqHeader}>
              <h2 className={styles.faqSectionTitle}>Frequently Asked Questions</h2>
              <a href="#faq-section" className={styles.viewAllFaqsLink}>
                View all FAQs →
              </a>
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
                      <svg
                        className={`${styles.chevronIcon} ${isOpen ? styles.chevronOpen : ""}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        width="16"
                        height="16"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
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
        </div>

        {/* Bottom Trust Banner */}
        <div className={styles.trustBanner}>
          <div className={styles.trustItem}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span>Secure & Confidential</span>
          </div>

          <div className={styles.trustDivider}></div>

          <div className={styles.trustItem}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44L2.04 14.5a2.5 2.5 0 0 1 2.46-3.06H7V4.5A2.5 2.5 0 0 1 9.5 2z"></path>
              <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44l4.99-5.44a2.5 2.5 0 0 0-2.46-3.06H17V4.5A2.5 2.5 0 0 0 14.5 2z"></path>
            </svg>
            <span>Evidence-Informed Care</span>
          </div>

          <div className={styles.trustDivider}></div>

          <div className={styles.trustItem}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>Experienced Team</span>
          </div>

          <div className={styles.trustDivider}></div>

          <div className={styles.trustItem}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>Support Across India & Abroad*</span>
          </div>

          <div className={styles.trustItemNote}>
            <span>*T&Cs apply</span>
          </div>
        </div>
      </div>
    </section>
  );
}
