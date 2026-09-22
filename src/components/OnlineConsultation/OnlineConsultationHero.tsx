"use client";

import Image from "next/image";
import styles from "./OnlineConsultationHero.module.css";
import { useBookingModal } from "@/components/BookingModal/BookingModalContext";

export default function OnlineConsultationHero() {
  const { openModal } = useBookingModal();

  return (
    <section className={styles.hero} id="online-consultation-hero">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Text Column */}
          <div className={styles.textContent}>
            <span className={styles.eyebrow}>ONLINE PSYCHOLOGICAL CONSULTATION</span>
            
            <h1 className={styles.title}>
              Professional care,<br />wherever you are.
            </h1>

            <p className={styles.subtitle}>
              Confidential online consultation with Softmind professionals, 
              supported by personalised resources between sessions.
            </p>

            <div className={styles.actions}>
              <button onClick={openModal} className={styles.primaryBtn} id="btn-hero-book-online">
                Book an Online Consultation
              </button>

              <a 
                href="https://wa.me/917736484813" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.whatsAppBtn}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.763.459 3.483 1.332 5.001l-1.417 5.176 5.297-1.389c1.463.798 3.111 1.218 4.774 1.218h.004c5.506 0 9.989-4.478 9.99-9.984 0-2.669-1.038-5.176-2.925-7.062a9.925 9.925 0 0 0-7.065-2.944zm5.71 14.162c-.237.667-1.383 1.272-1.905 1.342-.486.065-1.121.093-1.802-.125-.415-.133-.948-.308-1.636-.606-2.883-1.248-4.757-4.177-4.901-4.37-.142-.193-1.168-1.558-1.168-2.97 0-1.412.735-2.107 1.002-2.392.237-.253.52-.317.694-.317.174 0 .348.002.497.009.157.007.368-.06.577.441.213.511.724 1.77.787 1.899.063.129.105.28.021.448-.084.168-.126.272-.252.42-.126.148-.266.33-.38.442-.126.126-.258.263-.111.515.147.253.652 1.077 1.401 1.745.962.859 1.775 1.126 2.028 1.252.253.126.401.105.548-.063.147-.168.631-.737.8-.99.168-.253.337-.21.569-.126.232.084 1.474.695 1.727.821.253.126.421.189.484.295.063.105.063.61-.174 1.277z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            <div className={styles.highlightsBar}>
              <div className={styles.highlightItem}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span>Confidential & Secure</span>
              </div>

              <div className={styles.highlightDivider}></div>

              <div className={styles.highlightItem}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Experienced Professionals</span>
              </div>

              <div className={styles.highlightDivider}></div>

              <div className={styles.highlightItem}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44L2.04 14.5a2.5 2.5 0 0 1 2.46-3.06H7V4.5A2.5 2.5 0 0 1 9.5 2z"></path>
                  <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44l4.99-5.44a2.5 2.5 0 0 0-2.46-3.06H17V4.5A2.5 2.5 0 0 0 14.5 2z"></path>
                </svg>
                <span>Evidence-informed Care</span>
              </div>

              <div className={styles.highlightDivider}></div>

              <div className={styles.highlightItem}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <span>Across India & Abroad*</span>
              </div>
            </div>

            <p className={styles.tcNote}>*T&Cs apply. See FAQ.</p>
          </div>

          {/* Right Image Column */}
          <div className={styles.visualContent}>
            <div className={styles.imageFrame}>
              <img
                src="/assets/online_consultation_hero.jpg"
                alt="Confidential online consultation with Softmind professional"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
