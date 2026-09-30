"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import styles from "./CliniciansGrid.module.css";
import { Clinician, isHealthCareClinician } from "@/lib/clinicians";

const CATEGORIES = [
  "All",
  "Emotional Wellbeing",
  "Relationship & Family",
  "Children & Adolescents",
  "Personal & Life Challenges",
];

interface CliniciansGridProps {
  searchQuery?: string;
  setSearchQuery?: (q: string) => void;
  clinicians: Clinician[];
}

export default function CliniciansGrid({
  searchQuery = "",
  setSearchQuery,
  clinicians,
}: CliniciansGridProps) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const initialCategory = categoryParam && CATEGORIES.includes(categoryParam) ? categoryParam : "All";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [imgErrors, setImgErrors] = useState<Record<string | number, boolean>>({});

  const handleImgError = (id: string | number) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  useEffect(() => {
    if (categoryParam && CATEGORIES.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    } else if (!categoryParam) {
      setActiveCategory("All");
    }
  }, [categoryParam]);

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    // Only show clinicians with category "Health Care"
    const healthCareList = clinicians.filter(isHealthCareClinician);

    return healthCareList.filter((c) => {
      const matchesCategory =
        activeCategory === "All" ||
        c.categories.some((cat) => cat.toLowerCase() === activeCategory.toLowerCase());

      const matchesSearch =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.role.toLowerCase().includes(q) ||
        c.desc.toLowerCase().includes(q) ||
        c.categories.some((cat) => cat.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [clinicians, activeCategory, searchQuery]);

  const clearFilters = () => {
    setActiveCategory("All");
    if (setSearchQuery) {
      setSearchQuery("");
    }
  };

  return (
    <section className={styles.section} id="clinicians-grid">
      <div className={styles.container}>
        {/* Category Filter Tabs & Search Bar */}
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
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar placed at the end of the tabs */}
          <div className={styles.searchWrap}>
            <div className={styles.searchBar}>
              <svg
                className={styles.searchIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search clinicians..."
                value={searchQuery}
                onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
                aria-label="Search clinicians"
              />
              {searchQuery && (
                <button
                  type="button"
                  className={styles.searchClearBtn}
                  onClick={() => setSearchQuery && setSearchQuery("")}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
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
