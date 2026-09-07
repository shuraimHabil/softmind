import Link from "next/link";
import styles from "./OurApproachHero.module.css";

const steps = [
  {
    num: "01",
    title: "Reach out",
    desc: "Call, message on WhatsApp, or book online, whichever is most convenient for you.",
  },
  {
    num: "02",
    title: "Initial consultation",
    desc: "A short session to understand your situation, challenges, and help you find the right therapist.",
  },
  {
    num: "03",
    title: "A care plan together",
    desc: "Sessions shape around your goals and feedback—not a one-size-fits-all programme.",
  },
];

export default function OurApproachHero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <span className={styles.breadLink}>We Care For You</span>
        </nav>

        {/* Heading */}
        <h1 className={styles.heading}>
          You don&apos;t need a diagnosis to begin.
        </h1>
        <p className={styles.subtext}>
          Softmind&apos;s primary care model starts with understanding your most pressing concerns.
          We make it simple to find the pathway that&apos;s right for you—a clinician who helps you find the right starting point.
        </p>

        {/* Steps */}
        <div className={styles.steps}>
          {steps.map((step) => (
            <div key={step.num} className={styles.step}>
              <span className={styles.stepNum}>{step.num}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
