"use client";

import { useState } from "react";
import { Clinician } from "@/lib/clinicians";
import styles from "./ClinicianDetailHero.module.css";

interface ClinicianDetailHeroProps {
  clinician: Clinician;
}

export default function ClinicianDetailHero({ clinician }: ClinicianDetailHeroProps) {
  const [imgError, setImgError] = useState(false);

  const hasValidImg =
    Boolean(clinician.img) &&
    !imgError &&
    !clinician.img.includes("invalid-image") &&
    !clinician.img.includes("broken-image");

  return (
    <section className={styles.heroSection} id="clinician-hero">
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          {/* Clinician Photo Container */}
          <div className={styles.imageContainer}>
            <div className={styles.imageWrap}>
              {hasValidImg ? (
                <img
                  src={clinician.img}
                  alt={clinician.name}
                  className={styles.image}
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className={styles.avatarWrap} aria-label={clinician.name}>
                  <div className={styles.avatarCircle}>
                    <svg
                      width="54"
                      height="54"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
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
