import Image from "next/image";
import { Clinician } from "@/lib/clinicians";
import styles from "./ClinicianDetailHero.module.css";

interface ClinicianDetailHeroProps {
  clinician: Clinician;
}

export default function ClinicianDetailHero({ clinician }: ClinicianDetailHeroProps) {
  return (
    <section className={styles.heroSection} id="clinician-hero">
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          {/* Clinician Photo */}
          <div className={styles.imageWrap}>
            <Image
              src={clinician.img}
              alt={clinician.name}
              fill
              priority
              className={styles.image}
              sizes="(max-width: 900px) 320px, 320px"
            />
          </div>

          {/* Right Info Column */}
          <div className={styles.content}>
            <span className={styles.eyebrow}>{clinician.eyebrow || clinician.role}</span>
            <h1 className={styles.name}>{clinician.name}</h1>
            <p className={styles.tagline}>{clinician.tagline || clinician.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
