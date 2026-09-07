"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/articles";
import SearchBar from "../ui/SearchBar";
import styles from "./ArticlesBrowser.module.css";

interface ArticlesBrowserProps {
  articles: Article[];
  categories: string[];
  languages: string[];
  doctors: string[];
}

export default function ArticlesBrowser({
  articles,
  categories,
  languages,
  doctors,
}: ArticlesBrowserProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedDoctors, setSelectedDoctors] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

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
    selectedDoctors.length > 0 ||
    searchQuery.trim().length > 0;

  const totalActiveFilterCount =
    selectedCategories.length + selectedLanguages.length + selectedDoctors.length;

  // Filter articles based on all criteria
  const filteredArticles = useMemo(() => {
    return articles.filter((art) => {
      // Category filter
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(art.category) ||
        selectedCategories.includes(art.badge);

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
              <h1 className={styles.pageTitle}>Clinical Articles & Insights</h1>
              <p className={styles.pageSubtitle}>
                Evidence-based psychology, psychiatric perspectives, and mental wellness guides
              </p>
            </div>

            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSubmit={() => {
                // Articles search is live, so we don't strictly need a submit action, 
                // but we can scroll to results or just let it update.
              }}
              placeholder="Search articles, keywords, topics..."
            />
          </div>
        </div>
      </section>

      {/* ── Main Layout: Amazon Sidebar + Content ── */}
      <div className={styles.container}>
        {/* Mobile Filter Trigger Button */}
        <div className={styles.mobileFilterBar}>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={styles.mobileFilterBtn}
            id="btn-mobile-filters"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="14" y2="12" />
              <line x1="4" y1="18" x2="8" y2="18" />
            </svg>
            Filters {totalActiveFilterCount > 0 ? `(${totalActiveFilterCount})` : ""}
          </button>
          {hasActiveFilters && (
            <button onClick={clearAllFilters} className={styles.clearAllBtn}>
              Clear all
            </button>
          )}
        </div>

        <div className={styles.mainLayout}>
          {/* ── Amazon-style Left Filter Sidebar ── */}
          <aside className={`${styles.sidebar} ${mobileOpen ? styles.sidebarMobileOpen : ""}`}>
            <div className={styles.sidebarHeader}>
              <h2 className={styles.sidebarTitle}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
                Filters
              </h2>
              {hasActiveFilters && (
                <button onClick={clearAllFilters} className={styles.clearAllBtn} id="btn-clear-all-filters">
                  Clear all
                </button>
              )}
            </div>

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
          </aside>

          {/* ── Right Results Content Area ── */}
          <main className={styles.contentArea}>
            {/* Status Bar */}
            <div className={styles.statusBar}>
              <div>
                <p className={styles.resultsHeading}>
                  <span className={styles.resultsCountBold}>{filteredArticles.length}</span>{" "}
                  {filteredArticles.length === 1 ? "Result" : "Results"}
                  {searchQuery && ` for "${searchQuery}"`}
                </p>
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
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className={styles.activeTag}
                      title="Remove search query"
                    >
                      <span>Search: &quot;{searchQuery}&quot;</span>
                      <span className={styles.removeTagIcon}>×</span>
                    </button>
                  )}
                  <button onClick={clearAllFilters} className={styles.clearAllBtn}>
                    Clear all
                  </button>
                </div>
              )}
            </div>

            {/* Articles Grid */}
            {filteredArticles.length > 0 ? (
              <div className={styles.grid}>
                {filteredArticles.map((art) => (
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
                      <div className={styles.badgeGroup}>
                        <span className={styles.cardBadge}>{art.badge}</span>
                        {art.language === "Malayalam" && (
                          <span className={styles.langBadge} lang="ml">മലയാളം</span>
                        )}
                      </div>
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
                      <div className={styles.cardFooter}>
                        <div className={styles.doctorInfo}>
                          <span className={styles.doctorAvatar}>
                            {art.author.charAt(0)}
                          </span>
                          <span>{art.author}</span>
                        </div>
                        <span className={styles.readTime}>{art.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
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
