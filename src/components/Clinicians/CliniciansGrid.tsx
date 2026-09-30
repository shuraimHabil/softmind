"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import styles from "./CliniciansGrid.module.css";
import { Clinician, isHealthCareClinician } from "@/lib/clinicians";

interface CliniciansGridProps {
  clinicians: Clinician[];
}

export default function CliniciansGrid({ clinicians }: CliniciansGridProps) {
  const [imgErrors, setImgErrors] = useState<Record<string | number, boolean>>({});

  const handleImgError = (id: string | number) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const filtered = useMemo(() => {
    // Only show clinicians with category "Health Care"
    return clinicians.filter(isHealthCareClinician);
  }, [clinicians]);

  return (
    <section className={styles.section} id="clinicians-grid">
      <div className={styles.container}>
        {/* Section Heading */}
        <div className={styles.header}>
          <h2 className={styles.heading}>Our Care Team</h2>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className={styles.grid}>
            {filtered.map((clinician) => {
              const hasValidImg =
                Boolean(clinician.img) &&
                !imgErrors[clinician.id] &&
                !clinician.img.includes("invalid-image") &&
                !clinician.img.includes("broken-image");

              return (
                <Link
                  key={clinician.id}
                  href={`/clinicians/${clinician.id}`}
                  className={styles.card}
                  id={`clinician-${clinician.id}`}
                >
                  <div className={styles.imgWrap}>
                    {hasValidImg ? (
                      <img
                        src={clinician.img}
                        alt={clinician.name}
                        className={styles.img}
                        onError={() => handleImgError(clinician.id)}
                      />
                    ) : (
                      <div className={styles.avatarWrap} aria-label={clinician.name}>
                        <div className={styles.avatarCircle}>
                          <svg
                            width="48"
                            height="48"
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
                  <div className={styles.cardBody}>
                    <h3 className={styles.name}>{clinician.name}</h3>
                    <span className={styles.role}>{clinician.role}</span>
                    <p className={styles.desc}>{clinician.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <h3 className={styles.emptyTitle}>No clinicians found</h3>
            <p className={styles.emptyDesc}>
              No clinicians are currently available under this team.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
