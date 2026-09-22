"use client";

import styles from "./OnlineConsultationProcess.module.css";

const steps = [
  {
    number: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        <path d="M9 12h6"></path>
        <path d="M9 16h6"></path>
      </svg>
    ),
    title: "Share your needs",
    description: "Choose an area of care or contact us if you're unsure where to begin."
  },
  {
    number: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
    title: "Connect with the right professional",
    description: "Select a clinician based on their expertise, language and availability."
  },
  {
    number: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="23 7 16 12 23 17 23 7"></polygon>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
      </svg>
    ),
    title: "Meet online",
    description: "Attend your session through our secure and easy to use platform."
  },
  {
    number: "04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
      </svg>
    ),
    title: "Continue between sessions",
    description: "Use personalised resources selected by your clinician to support your progress."
  }
];

export default function OnlineConsultationProcess() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.container}>
        <h2 className={styles.title}>How Online Consultation Works</h2>

        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepWrapper}>
              <div className={styles.stepCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconCircle}>
                    {step.icon}
                  </div>
                  <span className={styles.stepNumber}>{step.number}</span>
                </div>
                
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className={styles.arrowContainer}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
