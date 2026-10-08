"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Search, BookOpen, FileText } from "lucide-react";
import type { WeeklyResearchReport } from "@/lib/researchReports";
import SearchBar from "../ui/SearchBar";
import styles from "./WeeklyResearchBrowser.module.css";

interface WeeklyResearchBrowserProps {
  reports: WeeklyResearchReport[];
}

export default function WeeklyResearchBrowser({
  reports,
}: WeeklyResearchBrowserProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedResearchers, setSelectedResearchers] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setFiltersOpen(false);
      }
    };
    if (filtersOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [filtersOpen]);

  const allResearchers = useMemo(() => {
    const list = reports.map(r => typeof r.researcher === "object" ? r.researcher?.name : r.researcher).filter(Boolean) as string[];
    return Array.from(new Set(list));
  }, [reports]);

  const toggleResearcher = (res: string) => {
    setSelectedResearchers((prev) =>
      prev.includes(res) ? prev.filter((r) => r !== res) : [...prev, res]
    );
  };

  const clearAllFilters = () => {
    setSelectedResearchers([]);
    setSearchQuery("");
  };

  const filteredReports = useMemo(() => {
    return reports.filter((r) => {
      const q = searchQuery.toLowerCase().trim();
      const researcherName = typeof r.researcher === "object" ? r.researcher?.name || "" : String(r.researcher || "");
      
      const matchesSearch = !q || (
        (r.title?.toLowerCase() || "").includes(q) ||
        researcherName.toLowerCase().includes(q) ||
        ((r.text_area || r.content || "").toLowerCase() || "").includes(q) ||
        ((r.date_of_research_report || r.date || "").includes(q))
      );

      const matchesResearcher = selectedResearchers.length === 0 || selectedResearchers.includes(researcherName);

      return matchesSearch && matchesResearcher;
    });
  }, [reports, searchQuery, selectedResearchers]);

  const getResearcherCount = (res: string) => {
    return reports.filter((r) => {
      const name = typeof r.researcher === "object" ? r.researcher?.name : r.researcher;
      return name === res;
    }).length;
  };

  const hasActiveFilters = selectedResearchers.length > 0;
  const totalActiveFilterCount = selectedResearchers.length;

  return (
    <div className={styles.wrapper}>
      {/* ── Top Header Banner ── */}
      <section className={styles.topBanner}>
        <div className={styles.container}>
          <Link href="/articles" className={styles.backLink}>
            <ArrowLeft className="w-4 h-4" /> Back to Articles
          </Link>

          <div>
            <h1 className={styles.title}>Weekly Research Reports</h1>
            <p className={styles.subtitle}>
              Evidence-based clinical reviews, psychiatric literature digests, and therapeutic protocols curated weekly by licensed specialists at Softmind.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Content Container ── */}
      <div className={styles.container}>
        
        {/* Backdrop for Left Filter Drawer */}
        {filtersOpen && (
          <div
            className={styles.backdrop}
            onClick={() => setFiltersOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* ── Left Slide-In Filter Drawer (Hidable & Shown on demand) ── */}
        <aside
          className={`${styles.sidebar} ${filtersOpen ? styles.sidebarOpen : ""}`}
          aria-hidden={!filtersOpen}
        >
          <div className={styles.sidebarHeader}>
            <div className={styles.sidebarTitleWrap}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
              <h2 className={styles.sidebarTitle}>Filters</h2>
              {totalActiveFilterCount > 0 && (
                <span className={styles.filterCountBadge}>{totalActiveFilterCount}</span>
              )}
            </div>
            <div className={styles.sidebarHeaderRight}>
              {hasActiveFilters && (
                <button onClick={clearAllFilters} className={styles.clearAllBtn}>
                  Clear all
                </button>
              )}
              <button
                type="button"
                onClick={() => setFiltersOpen(false)}
                className={styles.closeDrawerBtn}
                aria-label="Close filters"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>

          <div className={styles.sidebarScrollable}>
            {/* Filter 1: Researchers */}
            {allResearchers.length > 0 && (
              <div className={styles.filterGroup}>
                <h3 className={styles.groupTitle}>Researcher</h3>
                <ul className={styles.filterList}>
                  {allResearchers.map((res) => {
                    const isChecked = selectedResearchers.includes(res);
                    return (
                      <li key={res}>
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked={isChecked}
                          onClick={() => toggleResearcher(res)}
                          className={styles.filterItemBtn}
                        >
                          <span className={`${styles.customCheck} ${isChecked ? styles.customCheckActive : ""}`}>
                            {isChecked && (
                              <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                          </span>
                          <span className={styles.labelText}>{res}</span>
                          <span className={styles.itemCount}>({getResearcherCount(res)})</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          <div className={styles.sidebarFooter}>
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              className={styles.applyBtn}
            >
              Show {filteredReports.length} {filteredReports.length === 1 ? "Result" : "Results"}
            </button>
          </div>
        </aside>

        {/* ── Status Bar ── */}
        <div className={styles.statusBar} style={{ marginTop: '36px' }}>
          <div className={styles.statusBarMain}>
            <div className={styles.statusBarLeft}>
              <button
                type="button"
                onClick={() => setFiltersOpen(true)}
                className={styles.filterToggleBtn}
                aria-label="Open Filters"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="14" y2="12" />
                  <line x1="4" y1="18" x2="8" y2="18" />
                </svg>
                <span>Filters</span>
                {totalActiveFilterCount > 0 && (
                  <span className={styles.filterCountBadge}>{totalActiveFilterCount}</span>
                )}
              </button>

              <p className={styles.resultsHeading}>
                <span className={styles.resultsCountBold}>{filteredReports.length}</span>{" "}
                {filteredReports.length === 1 ? "Result" : "Results"}
              </p>
            </div>

            <div className={styles.statusBarRight}>
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onSubmit={() => {}}
                placeholder="Search topic"
              />
            </div>
          </div>
        </div>

        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div className={styles.activeTagsRow}>
            {selectedResearchers.map((r) => (
              <button
                key={r}
                onClick={() => toggleResearcher(r)}
                className={styles.activeTag}
                title="Remove researcher filter"
              >
                <span>Researcher: {r}</span>
                <span className={styles.removeTagIcon}>×</span>
              </button>
            ))}
            <button onClick={clearAllFilters} className={styles.clearAllBtn}>
              Clear all
            </button>
          </div>
        )}

        {/* ── Reports Grid ── */}
        {filteredReports.length > 0 ? (
          <div className={styles.grid}>
            {filteredReports.map((report, idx) => {
              const researcherName =
                typeof report.researcher === "object"
                  ? report.researcher?.name
                  : report.researcher || "Softmind Specialist";
              const dateStr =
                report.date_of_research_report ||
                report.date ||
                report.creation?.split(" ")[0] ||
                "Clinical Review";

              const excerpt = (report.text_area || report.content || "")
                .replace(/[#*`_]/g, "")
                .trim();

              const refCount = Array.isArray(report.reference)
                ? report.reference.length
                : report.reference
                ? 1
                : 0;

              return (
                <Link
                  key={report.name || idx}
                  href={`/articles/report/${encodeURIComponent(report.title)}`}
                  className={styles.card}
                >
                  <h2 className={styles.cardTitle}>{report.title}</h2>

                  <p className={styles.cardExcerpt}>
                    {excerpt ||
                      "A weekly synthesis of psychiatric research, clinical efficacy reports, and evidence-informed interventions."}
                  </p>

                  <div className={styles.cardFooter}>
                    <div className={styles.cardDate}>
                      <Calendar className="w-3.5 h-3.5" />
                      {dateStr}
                    </div>

                    {researcherName && (
                      <span className={styles.researcherName}>
                        <User className="w-3 h-3" />
                        {researcherName}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <FileText className={styles.emptyIcon} />
            <h3 className={styles.emptyTitle}>No research reports found</h3>
            <p className={styles.emptyDesc}>
              {searchQuery || selectedResearchers.length > 0
                ? "No reports matched your search and filters."
                : "No weekly research reports are currently available."}
            </p>
            {(searchQuery || selectedResearchers.length > 0) && (
              <button
                type="button"
                onClick={clearAllFilters}
                className={styles.clearBtn}
              >
                Clear Filters & Search
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
