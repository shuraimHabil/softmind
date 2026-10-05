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
            {clinician.keywords && clinician.keywords.length > 0 && (
              <div className={styles.keywordsRow}>
                {clinician.keywords.map((kw, i) => (
                  <span key={i} className={styles.keywordChip}>{kw}</span>
                ))}
              </div>
            )}
            {clinician.isRciLicensed && (
              <div className={styles.rciBadge}>
                <div className={styles.rciIconWrap}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0d9488"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
                <div className={styles.rciContent}>
                  <span className={styles.rciTitle}>
                    {clinician.license || "RCI Licensed Practitioner"}
                  </span>
                  <span className={styles.rciSub}>
                    Rehabilitation Council of India (RCI)
                    {clinician.rca_number ? ` • Reg: ${clinician.rca_number}` : ""}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
