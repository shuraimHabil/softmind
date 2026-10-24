"use client";

import { useState, useMemo, useRef } from "react";
import Link from "next/link";
import styles from "./CliniciansGrid.module.css";
import { Clinician } from "@/lib/clinicians";

const ITEMS_PER_PAGE = 8;

function getPageNumbers(current: number, total: number): (number | string)[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  if (current <= 3) {
    return [1, 2, 3, 4, "...", total];
  }
  if (current >= total - 2) {
    return [1, "...", total - 3, total - 2, total - 1, total];
  }
  return [1, "...", current - 1, current, current + 1, "...", total];
}

interface CliniciansGridProps {
  clinicians: Clinician[];
}

export default function CliniciansGrid({ clinicians }: CliniciansGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [imgErrors, setImgErrors] = useState<Record<string | number, boolean>>({});
  const gridRef = useRef<HTMLDivElement>(null);

  const handleImgError = (id: string | number) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const filtered = clinicians;

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages || 1));
  const startIndex = (validCurrentPage - 1) * ITEMS_PER_PAGE;
  const currentClinicians = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === validCurrentPage) return;
    setCurrentPage(page);
    if (gridRef.current) {
      gridRef.current.scrollLeft = 0;
    }
    const element = document.getElementById("clinicians-grid");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className={styles.section} id="clinicians-grid">
      <div className={styles.container}>
        {/* Section Heading */}
        <div className={styles.header}>
          <h2 className={styles.heading}>Our Care Team</h2>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <>
            <div className={styles.grid} ref={gridRef}>
              {currentClinicians.map((clinician) => {
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

          {totalPages > 1 && (
            <div className={styles.paginationWrap}>
              <p className={styles.paginationInfo}>
                Showing {startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, filtered.length)} of {filtered.length} clinicians
              </p>
              <nav className={styles.pagination} aria-label="Clinicians pagination">
                <button
                  type="button"
                  className={styles.pageBtn}
                  onClick={() => handlePageChange(validCurrentPage - 1)}
                  disabled={validCurrentPage === 1}
                  aria-label="Previous page"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                  <span>Previous</span>
                </button>

                <div className={styles.pageNumbers}>
                  {getPageNumbers(validCurrentPage, totalPages).map((p, idx) =>
                    p === "..." ? (
                      <span key={`ellipsis-${idx}`} className={styles.ellipsis} aria-hidden="true">
                        &hellip;
                      </span>
                    ) : (
                      <button
                        key={`page-${p}`}
                        type="button"
                        className={`${styles.pageNumberBtn} ${p === validCurrentPage ? styles.activePage : ""}`}
                        onClick={() => handlePageChange(Number(p))}
                        aria-current={p === validCurrentPage ? "page" : undefined}
                        aria-label={`Page ${p}`}
                      >
                        {p}
                      </button>
                    )
                  )}
                </div>

                <button
                  type="button"
                  className={styles.pageBtn}
                  onClick={() => handlePageChange(validCurrentPage + 1)}
                  disabled={validCurrentPage === totalPages}
                  aria-label="Next page"
                >
                  <span>Next</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </nav>
            </div>
          )}
        </>
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
