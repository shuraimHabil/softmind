"use client";

import { useState, useMemo } from "react";
import { PDFGuide } from "@/lib/guides";
import styles from "./GuidesBrowser.module.css";

interface GuidesBrowserProps {
  guides: PDFGuide[];
}

export default function GuidesBrowser({ guides }: GuidesBrowserProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedGuideForPreview, setSelectedGuideForPreview] = useState<PDFGuide | null>(null);

  // Filter guides by title
  const filteredGuides = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return guides;

    return guides.filter((g) => g.title.toLowerCase().includes(q));
  }, [guides, searchQuery]);

  const handleCardClick = (guide: PDFGuide) => {
    if (guide.pdfUrl) {
      window.open(guide.pdfUrl, "_blank", "noopener,noreferrer");
    } else {
      setSelectedGuideForPreview(guide);
    }
  };

  return (
    <div className={styles.guidesPage}>
      {/* ── Top Header Banner ── */}
      <section className={styles.topBanner}>
        <div className={styles.container}>
          <div className={styles.bannerInner}>
            <div className={styles.bannerText}>
              <h1 className={styles.pageTitle}>Clinical & Practical Guides</h1>
              <p className={styles.pageSubtitle}>
                Downloadable evidence-informed PDF guides and resources curated by Softmind specialists.
              </p>
            </div>

            {/* Search Input */}
            <div className={styles.searchWrap}>
              <svg
                className={styles.searchIcon}
                width="18"
                height="18"
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
                placeholder="Search guides by title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  type="button"
                  className={styles.clearSearchBtn}
                  onClick={() => setSearchQuery("")}
                  title="Clear search"
                  aria-label="Clear search"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content: PDF Guides Grid ── */}
      <div className={styles.container}>
        <div className={styles.contentArea}>
          {filteredGuides.length > 0 ? (
            <div className={styles.guidesGrid}>
              {filteredGuides.map((guide) => (
                <div
                  key={guide.id}
                  className={styles.pdfCard}
                  onClick={() => handleCardClick(guide)}
                  style={{ cursor: "pointer" }}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrap}>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                      </svg>
                    </div>
                    <span className={styles.pdfBadge}>PDF</span>
                  </div>

                  <h3 className={styles.pdfTitle}>{guide.title}</h3>

                  <div className={styles.cardFooter}>
                    <span className={styles.dateText}>
                      {guide.date ? `Published ${guide.date}` : "Clinical Guide"}
                    </span>

                    {guide.pdfUrl ? (
                      <a
                        href={guide.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.viewButton}
                        onClick={(e) => e.stopPropagation()}
                      >
                        View PDF
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </a>
                    ) : (
                      <span className={styles.viewButtonPending}>
                        PDF Pending
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <h3 className={styles.emptyStateTitle}>No guides found</h3>
              <p className={styles.emptyStateDesc}>
                No PDF guides matched your search title.
              </p>
              <button
                type="button"
                className={styles.clearBtn}
                onClick={() => setSearchQuery("")}
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── Dialog for Guide without PDF ── */}
      {selectedGuideForPreview && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15, 23, 42, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
          }}
          onClick={() => setSelectedGuideForPreview(null)}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "28px",
              maxWidth: "460px",
              width: "100%",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "#fef3c7",
                  color: "#d97706",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                !
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: "1.1rem", color: "#1e293b", fontFamily: "var(--font-serif)" }}>
                  {selectedGuideForPreview.title}
                </h4>
                <p style={{ margin: "2px 0 0", fontSize: "0.78rem", color: "#64748b" }}>
                  {selectedGuideForPreview.date ? `Registered on ${selectedGuideForPreview.date}` : "Knowledge Center Guide"}
                </p>
              </div>
            </div>

            <p style={{ fontSize: "0.88rem", color: "#475569", lineHeight: 1.6, margin: "0 0 20px" }}>
              This guide record is created in the Knowledge Center database, but no PDF file has been attached yet. Once a PDF file is uploaded in the CMS, it will open directly here.
            </p>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                type="button"
                onClick={() => setSelectedGuideForPreview(null)}
                style={{
                  background: "#0d9488",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "8px 18px",
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  fontWeight: 500,
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
