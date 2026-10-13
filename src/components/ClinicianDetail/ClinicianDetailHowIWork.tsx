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
  },
  {
    id: 2,
    num: "02",
    title: (
      <>
        <span>Identify Relevant</span>
        <span>Processes</span>
      </>
    ),
    description: "We look at the patterns, thoughts and emotions that influence your experience.",
  },
  {
    id: 3,
    num: "03",
    title: (
      <>
        <span>Choose</span>
        <span>the Approach</span>
      </>
    ),
    description: "Together, we select the most suitable, evidence-based approach for your needs.",
  },
  {
    id: 4,
    num: "04",
    title: (
      <>
        <span>Create</span>
        <span>New Learning</span>
      </>
    ),
    description: "You gain tools, insights and practical strategies to support lasting change.",
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
  },
];

export default function ClinicianDetailHowIWork() {
  return (
    <section className={styles.section} id="how-i-work">
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <h2 className={styles.title}>How I Work</h2>
        </div>

        <div className={styles.cardsGrid}>
          {steps.map((step) => (
            <div key={step.id} className={styles.card}>
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
