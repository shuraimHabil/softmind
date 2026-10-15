"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/articles";
import SearchBar from "../ui/SearchBar";
import styles from "./ArticlesBrowser.module.css";

const ARTICLES_PER_PAGE = 12;

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

interface ArticlesBrowserProps {
  articles: Article[];
  categories: string[];
  languages: string[];
  doctors: string[];
  initialDoctor?: string;
  initialCategory?: string;
  latestReport?: any;
}

export default function ArticlesBrowser({
  articles,
  categories,
  languages,
  doctors,
  initialDoctor,
  initialCategory,
  latestReport,
}: ArticlesBrowserProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(() => {
    if (!initialCategory) return [];
    const decoded = decodeURIComponent(initialCategory).trim().toLowerCase();
    const match = categories.find((c) => c.toLowerCase() === decoded);
    return match ? [match] : [initialCategory];
  });
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedDoctors, setSelectedDoctors] = useState<string[]>(() => {
    if (!initialDoctor) return [];
    const decoded = decodeURIComponent(initialDoctor).trim().toLowerCase();
    const cleanDoc = (name: string) => name.toLowerCase().replace(/^dr\.?\s*/i, "").trim();
    const match = doctors.find((d) => {
      const cd = cleanDoc(d);
      const cInit = cleanDoc(decoded);
      return cd === cInit || cd.includes(cInit) || cInit.includes(cd);
    });
    return match ? [match] : [initialDoctor];
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      const decoded = decodeURIComponent(initialCategory).trim().toLowerCase();
      const match = categories.find((c) => c.toLowerCase() === decoded);
      setSelectedCategories(match ? [match] : [initialCategory]);
    }
  }, [initialCategory, categories]);

  useEffect(() => {
    if (initialDoctor) {
      const decoded = decodeURIComponent(initialDoctor).trim().toLowerCase();
      const cleanDoc = (name: string) => name.toLowerCase().replace(/^dr\.?\s*/i, "").trim();
      const match = doctors.find((d) => {
        const cd = cleanDoc(d);
        const cInit = cleanDoc(decoded);
        return cd === cInit || cd.includes(cInit) || cInit.includes(cd);
      });
      setSelectedDoctors(match ? [match] : [initialDoctor]);
    }
  }, [initialDoctor, doctors]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get("category");
      if (catParam) {
        const decoded = decodeURIComponent(catParam).trim().toLowerCase();
        const match = categories.find((c) => c.toLowerCase() === decoded);
        setSelectedCategories(match ? [match] : [catParam]);
      }
    }
  }, [categories]);

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

  // Toggle helpers
  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleLanguage = (lang: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };

  const toggleDoctor = (doc: string) => {
    setSelectedDoctors((prev) =>
      prev.includes(doc) ? prev.filter((d) => d !== doc) : [...prev, doc]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedLanguages([]);
    setSelectedDoctors([]);
    setSearchQuery("");
  };

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedLanguages.length > 0 ||
    selectedDoctors.length > 0;

  const totalActiveFilterCount =
    selectedCategories.length + selectedLanguages.length + selectedDoctors.length;

  // Filter articles based on all criteria
  const filteredArticles = useMemo(() => {
    return articles.filter((art) => {
      // Category filter
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.some(
          (sc) =>
            sc.toLowerCase() === art.category.toLowerCase() ||
            sc.toLowerCase() === art.badge.toLowerCase()
        );

      // Language filter
      const matchesLanguage =
        selectedLanguages.length === 0 ||
        (art.language && selectedLanguages.includes(art.language));

      // Doctor filter
      const matchesDoctor =
        selectedDoctors.length === 0 || selectedDoctors.includes(art.author);

      // Search keyword filter
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        art.title.toLowerCase().includes(q) ||
        art.excerpt.toLowerCase().includes(q) ||
        art.author.toLowerCase().includes(q) ||
        art.category.toLowerCase().includes(q);

      return matchesCategory && matchesLanguage && matchesDoctor && matchesSearch;
    });
  }, [articles, selectedCategories, selectedLanguages, selectedDoctors, searchQuery]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories, selectedLanguages, selectedDoctors, searchQuery]);

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages || 1));
  const startIndex = (validCurrentPage - 1) * ARTICLES_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === validCurrentPage) return;
    setCurrentPage(page);
    const element = document.getElementById("articles-results-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Counts for each category
  const getCategoryCount = (cat: string) => {
    return articles.filter(
      (a) => a.category.toLowerCase() === cat.toLowerCase() || a.badge.toLowerCase() === cat.toLowerCase()
    ).length;
  };

  // Counts for each language
  const getLanguageCount = (lang: string) => {
    return articles.filter((a) => a.language === lang).length;
  };

  // Counts for each doctor
  const getDoctorCount = (doc: string) => {
    return articles.filter((a) => a.author === doc).length;
  };

  return (
    <div className={styles.browser}>
      {/* ── Top Header Banner ── */}
      <section className={styles.topBanner}>
        <div className={styles.container}>
          <div className={styles.bannerInner}>
            <div>
              <h1 className={styles.pageTitle}>Articles and Blogs</h1>
              <p className={styles.pageSubtitle}>
                Evidence-based psychology, psychiatric perspectives, and mental wellness guides
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Layout: Content + Left Drawer Sidebar ── */}
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
                <button onClick={clearAllFilters} className={styles.clearAllBtn} id="btn-clear-all-filters">
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
            {/* Filter 1: Category */}
            <div className={styles.filterGroup}>
              <h3 className={styles.groupTitle}>Category</h3>
              <ul className={styles.filterList}>
                {categories.map((cat) => {
                  const isChecked = selectedCategories.includes(cat);
                  return (
                    <li key={cat}>
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked={isChecked}
                        onClick={() => toggleCategory(cat)}
                        className={styles.filterItemBtn}
                        id={`filter-cat-${cat.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      >
                        <span className={`${styles.customCheck} ${isChecked ? styles.customCheckActive : ""}`}>
                          {isChecked && (
                            <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </span>
                        <span className={styles.labelText}>{cat}</span>
                        <span className={styles.itemCount}>({getCategoryCount(cat)})</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Filter 2: Language (English, Malayalam) */}
            <div className={styles.filterGroup}>
              <h3 className={styles.groupTitle}>Language</h3>
              <ul className={styles.filterList}>
                {languages.map((lang) => {
                  const isChecked = selectedLanguages.includes(lang);
                  return (
                    <li key={lang}>
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked={isChecked}
                        onClick={() => toggleLanguage(lang)}
                        className={styles.filterItemBtn}
                        id={`filter-lang-${lang.toLowerCase()}`}
                      >
                        <span className={`${styles.customCheck} ${isChecked ? styles.customCheckActive : ""}`}>
                          {isChecked && (
                            <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </span>
                        <span className={styles.labelText}>
                          {lang}
                          {lang === "Malayalam" && <span className={styles.langNative}>(മലയാളം)</span>}
                        </span>
                        <span className={styles.itemCount}>({getLanguageCount(lang)})</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Filter 3: Doctors / Clinicians */}
            <div className={styles.filterGroup}>
              <h3 className={styles.groupTitle}>Doctor / Clinician</h3>
              <ul className={styles.filterList}>
                {doctors.map((doc) => {
                  const isChecked = selectedDoctors.includes(doc);
                  return (
                    <li key={doc}>
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked={isChecked}
                        onClick={() => toggleDoctor(doc)}
                        className={styles.filterItemBtn}
                        id={`filter-doc-${doc.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      >
                        <span className={`${styles.customCheck} ${isChecked ? styles.customCheckActive : ""}`}>
                          {isChecked && (
                            <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </span>
                        <span className={styles.labelText}>{doc}</span>
                        <span className={styles.itemCount}>({getDoctorCount(doc)})</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className={styles.sidebarFooter}>
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              className={styles.applyBtn}
            >
              Show {filteredArticles.length} {filteredArticles.length === 1 ? "Result" : "Results"}
            </button>
          </div>
        </aside>

        <div className={styles.mainLayout}>
          {/* ── Results Content Area ── */}
          <main className={styles.contentArea}>
            {/* Featured Article: Weekly Research Report */}
            {filteredArticles.length > 0 && (
              <div className="mb-6">
                {latestReport ? (
                  <div className={styles.featuredArticle}>
                    <div className={styles.featuredContent}>
                      <span className={styles.featuredBadge}>Weekly Research Report</span>
                      <h3 className={styles.featuredTitle}>{latestReport.title}</h3>
                      <p className={styles.featuredExcerpt}>
                        {latestReport.date ? `Published on ${latestReport.date}` : "A weekly summary of psychiatric research and clinical efficacy reports."}
                      </p>
                      <div className={styles.featuredActionsRow}>
                        <Link
                          href={latestReport.title ? `/articles/report/${encodeURIComponent(latestReport.title)}` : "#"}
                          className={styles.featuredReadMore}
                        >
                          Read full report &rarr;
                        </Link>
                      </div>
                    </div>
                    <div className={styles.featuredImageWrap}>
                      <Image
                        src="/assets/anxiety_hero.jpg"
                        alt="Weekly Research Report"
                        fill
                        className={styles.featuredImage}
                      />
                    </div>
                  </div>
                ) : (
                  <div className={styles.featuredArticle}>
                    <div className={styles.featuredContent}>
                      <span className={styles.featuredBadge}>Weekly Research Report</span>
                      <h3 className={styles.featuredTitle}>The Impact of Digital Wellness on Cognitive Function</h3>
                      <p className={styles.featuredExcerpt}>
                        Our latest clinical review explores how structured digital detox protocols can improve working memory, reduce baseline anxiety, and enhance overall cognitive performance in adult populations.
                      </p>
                      <div className={styles.featuredActionsRow}>
                        <Link href="/articles/digital-wellness-cognitive-function" className={styles.featuredReadMore}>
                          Read full report &rarr;
                        </Link>
                      </div>
                    </div>
                    <div className={styles.featuredImageWrap}>
                      <Image
                        src="/assets/anxiety_hero.jpg"
                        alt="Weekly Research Report"
                        fill
                        className={styles.featuredImage}
                      />
                    </div>
                  </div>
                )}

                {/* Text link placed directly under the featured article matching 'Explore all areas →' */}
                <div className={styles.underFeaturedActionRow}>
                  <Link
                    href="/weekly-research-reports"
                    className={styles.viewAllWeeklyBtn}
                    id="btn-view-all-weekly-research"
                  >
                    View all weekly research reports &rarr;
                  </Link>
                </div>
              </div>
            )}

            {/* Status Bar */}
            <div className={styles.statusBar} id="articles-results-section">
              <div className={styles.statusBarMain}>
                <div className={styles.statusBarLeft}>
                  <button
                    type="button"
                    onClick={() => setFiltersOpen(true)}
                    className={styles.filterToggleBtn}
                    id="btn-toggle-filters"
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
                  <span className={styles.resultsCountBold}>{filteredArticles.length}</span>{" "}
                  {filteredArticles.length === 1 ? "Result" : "Results"}
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

            {/* Active Filter Chips */}
            {hasActiveFilters && (
              <div className={styles.activeTagsRow}>
                {selectedCategories.map((c) => (
                  <button
                    key={c}
                    onClick={() => toggleCategory(c)}
                    className={styles.activeTag}
                    title="Remove category filter"
                  >
                    <span>Category: {c}</span>
                    <span className={styles.removeTagIcon}>×</span>
                  </button>
                ))}
                {selectedLanguages.map((l) => (
                  <button
                    key={l}
                    onClick={() => toggleLanguage(l)}
                    className={styles.activeTag}
                    title="Remove language filter"
                  >
                    <span>Language: {l}</span>
                    <span className={styles.removeTagIcon}>×</span>
                  </button>
                ))}
                {selectedDoctors.map((d) => (
                  <button
                    key={d}
                    onClick={() => toggleDoctor(d)}
                    className={styles.activeTag}
                    title="Remove doctor filter"
                  >
                    <span>Doctor: {d}</span>
                    <span className={styles.removeTagIcon}>×</span>
                  </button>
                ))}
                <button onClick={clearAllFilters} className={styles.clearAllBtn}>
                  Clear all
                </button>
              </div>
            )}
            </div>

            {/* Articles Grid */}
            {filteredArticles.length > 0 ? (
              <>
                <div className={styles.grid}>
                  {paginatedArticles.map((art) => (
                    <Link
                      key={art.slug}
                      href={`/articles/${art.slug}`}
                      className={styles.card}
                      id={`article-card-${art.slug}`}
                      lang={art.language === "Malayalam" ? "ml" : "en"}
                      data-language={art.language}
                    >
                      <div className={styles.cardImgWrap}>
                        <Image
                          src={art.img}
                          alt={art.title}
                          fill
                          className={styles.cardImg}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className={styles.cardBody}>
                        <h3
                          className={`${styles.cardTitle} ${
                            art.language === "Malayalam" ? styles.malayalamTitle : ""
                          }`}
                        >
                          {art.title}
                        </h3>
                        <p
                          className={`${styles.cardExcerpt} ${
                            art.language === "Malayalam" ? styles.malayalamExcerpt : ""
                          }`}
                        >
                          {art.excerpt}
                        </p>
                        <div className={styles.cardMeta}>
                          <span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle", marginRight: "5px", color: "var(--primary)" }}>
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            {art.author}
                          </span>
                          <span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle", marginRight: "5px", color: "var(--primary)" }}>
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                              <line x1="16" y1="2" x2="16" y2="6"></line>
                              <line x1="8" y1="2" x2="8" y2="6"></line>
                              <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            {art.reviewedDate}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className={styles.paginationWrap}>
                    <p className={styles.paginationInfo}>
                      Showing {startIndex + 1}–{Math.min(startIndex + ARTICLES_PER_PAGE, filteredArticles.length)} of {filteredArticles.length} articles
                    </p>
                    <nav className={styles.pagination} aria-label="Articles pagination">
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
                <h3 className={styles.emptyTitle}>No matching articles found</h3>
                <p className={styles.emptyText}>
                  No articles matched your current selection. Try clearing one or more filters.
                </p>
                <button onClick={clearAllFilters} className={styles.emptyResetBtn}>
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
