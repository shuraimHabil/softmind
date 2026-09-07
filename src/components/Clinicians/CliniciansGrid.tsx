"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CliniciansGrid.module.css";

const CATEGORIES = [
  "All",
  "Emotional Wellbeing",
  "Relationship & Family",
  "Children & Adolescents",
  "Personal & Life Challenges",
];
import { clinicians } from "@/lib/clinicians";

interface CliniciansGridProps {
  searchQuery?: string;
  setSearchQuery?: (q: string) => void;
}

export default function CliniciansGrid({
  searchQuery = "",
  setSearchQuery,
}: CliniciansGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return clinicians.filter((c) => {
      const matchesCategory =
        activeCategory === "All" || c.categories.includes(activeCategory);

      const matchesSearch =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.role.toLowerCase().includes(q) ||
        c.desc.toLowerCase().includes(q) ||
        c.categories.some((cat) => cat.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const clearFilters = () => {
    setActiveCategory("All");
    if (setSearchQuery) {
      setSearchQuery("");
    }
  };

  return (
    <section className={styles.section} id="clinicians-grid">
      <div className={styles.container}>
        {/* Category Filter Tabs */}
        <div className={styles.filterRow}>
          <div className={styles.tabs} role="tablist" aria-label="Clinician specialisations">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`${styles.tab} ${activeCategory === cat ? styles.tabActive : ""}`}
                onClick={() => setActiveCategory(cat)}
                id={`tab-${cat.replace(/\s+/g, "-").toLowerCase()}`}
              >
                {cat === "All" && <span className={styles.allDot} />}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Active search filter badge */}
        {searchQuery.trim() && (
          <div className={styles.activeSearchNotice}>
            <span className={styles.noticeText}>
              Showing results for &ldquo;<strong>{searchQuery}</strong>&rdquo; ({filtered.length} found)
            </span>
            <button
              onClick={() => setSearchQuery && setSearchQuery("")}
              className={styles.clearSearchChip}
              aria-label="Clear search"
            >
              Clear search ✕
            </button>
          </div>
        )}

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className={styles.grid}>
            {filtered.map((clinician) => (
              <article key={clinician.id} className={styles.card} id={`clinician-${clinician.id}`}>
                <div className={styles.imgWrap}>
                  <Image
                    src={clinician.img}
                    alt={clinician.name}
                    fill
                    className={styles.img}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.name}>{clinician.name}</h3>
                  <span className={styles.role}>{clinician.role}</span>
                  <p className={styles.desc}>{clinician.desc}</p>
                  <Link
                    href={`/clinicians/${clinician.id}`}
                    className={styles.viewLink}
                    id={`view-${clinician.id}`}
                  >
                    View Details
                    <svg viewBox="0 0 16 16" fill="none" width="12" height="12">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
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
              We couldn&apos;t find any clinicians matching &ldquo;{searchQuery}&rdquo;. Try checking your spelling or reset the filters.
            </p>
            <button onClick={clearFilters} className={styles.emptyResetBtn}>
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
