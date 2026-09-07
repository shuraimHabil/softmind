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

            {/* 3 Metrics / Badges */}
            <div className={styles.statsRow}>
              {/* Stat 1: Clinical Experience */}
              <div className={styles.statItem}>
                <div className={styles.iconBadge}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className={styles.statText}>
                  <span className={styles.statValue}>{clinician.experience}</span>
                  <span className={styles.statLabel}>{clinician.experienceSub}</span>
                </div>
              </div>

              {/* Stat 2: Sessions Conducted */}
              <div className={styles.statItem}>
                <div className={styles.iconBadge}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className={styles.statText}>
                  <span className={styles.statValue}>{clinician.sessions}</span>
                  <span className={styles.statLabel}>{clinician.sessionsSub}</span>
                </div>
              </div>

              {/* Stat 3: RCI licensed */}
              <div className={styles.statItem}>
                <div className={styles.iconBadge}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div className={styles.statText}>
                  <span className={styles.statValue}>{clinician.license}</span>
                  <span className={styles.statLabel}>{clinician.licenseSub}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
