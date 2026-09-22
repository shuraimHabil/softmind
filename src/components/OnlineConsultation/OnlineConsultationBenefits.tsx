import styles from "./OnlineConsultationBenefits.module.css";

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "100% Confidential & Secure",
    description:
      "All video consultations take place in encrypted telehealth rooms. Your personal data and clinical discussions are completely protected."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: "Accessible Anywhere",
    description:
      "Connect with leading RCI-licensed psychologists and psychiatrists from Kerala, anywhere across India or overseas without travel hassle."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Flexible Scheduling",
    description:
      "Book evening or weekend sessions that seamlessly integrate into your work and personal life without missing a commitment."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Multi-Disciplinary Team",
    description:
      "Access specialized individual therapy, couple counselling, adolescent guidance, and psychiatric consultations all under one roof."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: "Digital Prescriptions",
    description:
      "Receive digital e-prescriptions and clinical summary notes directly sent to your email or WhatsApp right after your session."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Comfort & Zero Stigma",
    description:
      "Express yourself freely from your own personal safe space without waiting room anxiety or public exposure."
  }
];

export default function OnlineConsultationBenefits() {
  return (
    <section className={styles.section} id="online-consultation-benefits">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Why Online Care</span>
          <h2 className={styles.title}>
            The Advantages of Softmind Online Consultation
          </h2>
          <p className={styles.subtitle}>
            Experience world-class therapeutic and psychiatric care tailored to modern lives.
          </p>
        </div>

        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrap}>{benefit.icon}</div>
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardDesc}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
