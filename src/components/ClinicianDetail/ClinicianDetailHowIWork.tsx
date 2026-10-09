import styles from "./ClinicianDetailHowIWork.module.css";

const steps = [
  {
    id: 1,
    num: "01",
    title: (
      <>
        <span>Understand the</span>
        <span>person</span>
      </>
    ),
    description: "We begin by exploring your story, strengths, challenges and goals.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="3.5" />
        <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
      </svg>
    ),
  },
  {
    id: 2,
    num: "02",
    title: (
      <>
        <span>Identify</span>
        <span className={styles.noWrap}>Relevant Processes</span>
      </>
    ),
    description: "We look at the patterns, thoughts and emotions that influence your experience.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="6.5" />
        <line x1="21" y1="21" x2="16" y2="16" />
      </svg>
    ),
  },
  {
    id: 3,
    num: "03",
    title: (
      <>
        <span>Choose</span>
        <span className={styles.noWrap}>the Approach</span>
      </>
    ),
    description: "Together, we select the most suitable, evidence-based approach for your needs.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    id: 4,
    num: "04",
    title: (
      <>
        <span>Create</span>
        <span className={styles.noWrap}>New Learning</span>
      </>
    ),
    description: "You gain tools, insights and practical strategies to support lasting change.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21v-9" />
        <path d="M12 12c-4-1-6.5-4.5-6.5-7.5 3 0 6.5 2.5 6.5 7.5z" />
        <path d="M12 12c4-1 6.5-4.5 6.5-7.5-3 0-6.5 2.5-6.5 7.5z" />
      </svg>
    ),
  },
  {
    id: 5,
    num: "05",
    title: (
      <>
        <span>Observe</span>
        <span>Change</span>
      </>
    ),
    description: "We track progress, notice shifts and celebrate growth, big and small.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14l5-5 4 4 7-8" />
        <line x1="6" y1="19" x2="6" y2="17" />
        <line x1="10" y1="19" x2="10" y2="14" />
        <line x1="14" y1="19" x2="14" y2="15" />
        <line x1="18" y1="19" x2="18" y2="11" />
      </svg>
    ),
  },
  {
    id: 6,
    num: "06",
    title: (
      <>
        <span>Review</span>
        <span>&amp; Adapt</span>
      </>
    ),
    description: "We reflect, refine and adjust the approach as needed-together.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 0 0-15.5-6.36L3 8" />
        <path d="M3 3v5h5" />
        <path d="M3 12a9 9 0 0 0 15.5 6.36L21 16" />
        <path d="M21 21v-5h-5" />
      </svg>
    ),
  },
];

export default function ClinicianDetailHowIWork() {
  return (
    <section className={styles.section} id="how-i-work">
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <h2 className={styles.title}>How I Work</h2>
        </div>

        <div className={styles.stepsContainer}>
          {steps.map((step) => (
            <div key={step.id} className={styles.stepItem}>
              <div className={styles.iconCircle}>{step.icon}</div>
              <span className={styles.stepNum}>{step.num}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <div className={styles.stepDivider} aria-hidden="true" />
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
