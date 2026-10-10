import styles from "./OurApproachHero.module.css";

export default function OurApproachHero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}
        <h1 className={styles.heading}>
          You Don&apos;t Need A Diagnosis To Begin.
        </h1>
        <p className={styles.subtext}>
          Softmind&apos;s primary care model starts with understanding your most pressing concerns.
          We make it simple to find the pathway that&apos;s right for you—a clinician who helps you find the right starting point.
        </p>
      </div>
    </section>
  );
}
