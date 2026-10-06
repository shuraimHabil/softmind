import Link from "next/link";
import styles from "./ClinicianDetailAreasOfPractice.module.css";

interface ClinicianDetailAreasOfPracticeProps {
  areas?: string[];
}

function renderPracticeIcon(category: string) {
  const norm = category.toLowerCase().trim();

  // 1. Anxiety, Fear & Panic
  if (norm.includes("anxiety") || norm.includes("panic") || norm.includes("fear")) {
    return (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a6 6 0 0 0-6 6c0 1.6.6 3 1.7 4.1C8 12.8 8 13.8 8 14.5c0 .8.2 1.5.7 2.1L8 21h8l-.7-4.4c.5-.6.7-1.3.7-2.1 0-.7 0-1.7.3-2.4A6 6 0 0 0 12 2z" />
        <path d="M12 6a2.5 2.5 0 0 1 2.5 2.5c0 1.2-.8 1.8-1.5 2.5" />
        <circle cx="12" cy="14" r="0.5" fill="currentColor" />
      </svg>
    );
  }

  // 2. Stress & Emotional Difficulties
  if (norm.includes("stress") || norm.includes("emotion")) {
    return (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 4c-1.5 3-2.5 6-2.5 9 0 2 1 3.5 2.5 4 1.5-.5 2.5-2 2.5-4 0-3-1-6-2.5-9z" />
        <path d="M9.5 13C7 10 4 10 3 13c1 3.5 4 4.5 6.5 4" />
        <path d="M14.5 13C17 10 20 10 21 13c-1 3.5-4 4.5-6.5 4" />
      </svg>
    );
  }

  // 3. Low Mood & Depression-Related Concerns
  if (norm.includes("mood") || norm.includes("depression") || norm.includes("depress")) {
    return (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
      </svg>
    );
  }

  // 4. Obsessive Thoughts & Repetitive Patterns
  if (
    norm.includes("obsess") ||
    norm.includes("repetitive") ||
    norm.includes("ocd") ||
    norm.includes("pattern")
  ) {
    return (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12a9 9 0 0 0-15.5-6.36L3 8" />
        <polyline points="3 3 3 8 8 8" />
        <path d="M3 12a9 9 0 0 0 15.5 6.36L21 16" />
        <polyline points="21 21 21 16 16 16" />
      </svg>
    );
  }

  // 5. Relationships & Couples
  if (
    norm.includes("couple") ||
    norm.includes("relation") ||
    norm.includes("marriage") ||
    norm.includes("family")
  ) {
    return (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8.5" cy="8" r="3.5" />
        <path d="M2.5 19v-1.5a4.5 4.5 0 0 1 9 0V19" />
        <circle cx="16" cy="9" r="3" />
        <path d="M15.5 14.5a4 4 0 0 1 5 3v1.5" />
      </svg>
    );
  }

  // 6. Behaviour & Habit Patterns
  if (norm.includes("behaviour") || norm.includes("behavior") || norm.includes("habit")) {
    return (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="12" y1="20" x2="12" y2="8" />
        <line x1="18" y1="20" x2="18" y2="3" />
      </svg>
    );
  }

  // 7. Life Transitions & Adjustment
  if (norm.includes("transition") || norm.includes("adjustment") || norm.includes("life")) {
    return (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20v-9" />
        <path d="M12 11a5 5 0 0 1 5-5c0 3-2 5-5 5z" />
        <path d="M12 14a5 5 0 0 0-5-5c0 3 2 5 5 5z" />
        <line x1="6" y1="20" x2="18" y2="20" />
      </svg>
    );
  }

  // 8. Personal Development
  if (
    norm.includes("personal") ||
    norm.includes("development") ||
    norm.includes("growth") ||
    norm.includes("self")
  ) {
    return (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="none" />
      </svg>
    );
  }

  // 9. Trauma & PTSD
  if (norm.includes("trauma") || norm.includes("ptsd")) {
    return (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    );
  }

  // 10. Sleep & Insomnia
  if (norm.includes("sleep") || norm.includes("insomnia")) {
    return (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    );
  }

  // Default elegant wellness symbol
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

export default function ClinicianDetailAreasOfPractice({
  areas,
}: ClinicianDetailAreasOfPracticeProps) {
  if (!areas || areas.length === 0) return null;

  return (
    <section className={styles.section} id="areas-of-practice">
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <h2 className={styles.title}>Areas of Practice</h2>
        </div>

        <div className={styles.grid}>
          {areas.map((area, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconWrap}>{renderPracticeIcon(area)}</div>
              <h3 className={styles.cardLabel}>{area}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
