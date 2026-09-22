import Link from "next/link";
import styles from "./OnlineConsultationBetweenSessions.module.css";

const resources = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
      </svg>
    ),
    label: "Listen",
    description: "Guided audio practices for calming, focus and emotional balance.",
    linkText: "Explore Audios →",
    href: "#care-library"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44L2.04 14.5a2.5 2.5 0 0 1 2.46-3.06H7V4.5A2.5 2.5 0 0 1 9.5 2z"></path>
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44l4.99-5.44a2.5 2.5 0 0 0-2.46-3.06H17V4.5A2.5 2.5 0 0 0 14.5 2z"></path>
      </svg>
    ),
    label: "Understand",
    description: "Short explanations of psychological and brain-body processes.",
    linkText: "Explore Topics →",
    href: "#care-library"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
      </svg>
    ),
    label: "Practice",
    description: "Simple practice cards for real-life situations and behaviours.",
    linkText: "See Practice Cards →",
    href: "#care-library"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
      </svg>
    ),
    label: "Reflect",
    description: "Tools to observe your patterns, emotions and responses.",
    linkText: "View Reflection Tools →",
    href: "#care-library"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
      </svg>
    ),
    label: "Use",
    description: "Guides, worksheets and trackers to support your progress.",
    linkText: "Browse Guides →",
    href: "#care-library"
  }
];

export default function OnlineConsultationBetweenSessions() {
  return (
    <section className={styles.section} id="between-sessions">
      <div className={styles.container}>
        <div className={styles.headerGrid}>
          <div className={styles.headerLeft}>
            <h2 className={styles.title}>
              Care that continues<br />between conversations.
            </h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.description}>
              Your consultation is important. Everyday experiences continue after the session. 
              Where appropriate, your clinician may provide resources to support the work you are doing.
            </p>
          </div>
        </div>

        {/* 5 Cards Row */}
        <div className={styles.cardsGrid}>
          {resources.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrap}>{item.icon}</div>
                <span className={styles.cardLabel}>{item.label}</span>
              </div>
              <p className={styles.cardDesc}>{item.description}</p>
              <a href={item.href} className={styles.cardLink}>
                {item.linkText}
              </a>
            </div>
          ))}
        </div>

        {/* Disclaimer Banner */}
        <div className={styles.disclaimerBanner}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <span>
            Resources are selected by your clinician based on your needs. They support professional care and do not replace assessment, therapy, medical care or emergency support.
          </span>
        </div>
      </div>
    </section>
  );
}
