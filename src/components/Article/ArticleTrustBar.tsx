import styles from "./ArticleTrustBar.module.css";

const badges = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Written by a qualified professional",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
        <circle cx="12" cy="8" r="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 20v-2a6 6 0 0 1 12 0v2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Professionally reviewed",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "References included",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: (date: string) => `Last reviewed ${date}`,
  },
];

export default function ArticleTrustBar({ reviewedDate }: { reviewedDate: string }) {
  return (
    <div className={styles.bar}>
      <div className={styles.container}>
        {badges.map((b, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.icon}>{b.icon}</span>
            <span className={styles.label}>
              {typeof b.label === "function" ? b.label(reviewedDate) : b.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
