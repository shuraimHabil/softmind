"use client";

import styles from "./SearchBar.module.css";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSubmit: () => void;
  placeholder?: string;
  quickTags?: string[];
  quickLabel?: string;
}

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  onSubmit,
  placeholder = "Search...",
  quickTags = [],
  quickLabel = "Popular:",
}: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  const handleQuickTag = (tag: string) => {
    setSearchQuery(tag);
    // Optionally trigger submit when a quick tag is clicked?
    // Let's just set the query for now, but usually clicking a tag also searches.
    // We'll leave it to just set the query as it was in CliniciansHero, 
    // where they handled scrolling in the parent.
    // Wait, let's call onSubmit as well for a better UX!
    setTimeout(() => {
      onSubmit();
    }, 0);
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <div className={styles.searchBar}>
        <div className={styles.searchIconWrap}>
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
        </div>
        <input
          type="text"
          className={styles.searchInput}
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label={placeholder}
        />
        {searchQuery && (
          <button
            type="button"
            className={styles.clearBtn}
            onClick={() => setSearchQuery("")}
            aria-label="Clear search query"
          >
            ✕
          </button>
        )}
        <button type="submit" className={styles.searchBtn}>
          Search
        </button>
      </div>

      {quickTags && quickTags.length > 0 && (
        <div className={styles.quickTags}>
          <span className={styles.quickLabel}>{quickLabel}</span>
          {quickTags.map((tag) => (
            <button
              key={tag}
              type="button"
              className={styles.tagBtn}
              onClick={() => handleQuickTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </form>
  );
}
