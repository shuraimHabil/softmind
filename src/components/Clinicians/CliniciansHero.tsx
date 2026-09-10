import Image from "next/image";
import styles from "./CliniciansHero.module.css";

export default function CliniciansHero() {
  return (
    <section className={styles.hero}>
      {/* Background photo */}
      <div className={styles.bgWrap}>
        <Image
          src="/assets/clinicians/hero_clinicians.jpg"
          alt="Clinician session"
          fill
          className={styles.bgImg}
          sizes="100vw"
          priority
        />
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Experienced professionals.<br />
          Human understanding.
        </h1>
        <p className={styles.subtext}>
          35+ clinicians across four centres — clinical psychologists, psychotherapists,
          psychiatrists and developmental specialists — each selected for both clinical
          rigour and the ability to listen well.
        </p>
      </div>
    </section>
  );
}
