import styles from "./OurApproachHero.module.css";

export default function OurApproachHero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}
        <h1 className={styles.heading}>
          Understanding Your Concerns Is Where Care Begins.
        </h1>
        <p className={styles.subtext}>
          Explore psychological counselling, psychotherapy and assessments tailored to your experiences, needs and everyday life.
        </p>
      </div>
    </section>
  );
}
