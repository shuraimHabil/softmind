"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Search, BookOpen, FileText } from "lucide-react";
import type { WeeklyResearchReport } from "@/lib/researchReports";
import styles from "./WeeklyResearchBrowser.module.css";

interface WeeklyResearchBrowserProps {
  reports: WeeklyResearchReport[];
}

export default function WeeklyResearchBrowser({
  reports,
}: WeeklyResearchBrowserProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredReports = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return reports;

    return reports.filter((r) => {
      const titleMatch = r.title?.toLowerCase().includes(q);
      const researcherName =
        typeof r.researcher === "object"
          ? r.researcher?.name || ""
          : String(r.researcher || "");
      const researcherMatch = researcherName.toLowerCase().includes(q);
      const contentMatch = (r.text_area || r.content || "").toLowerCase().includes(q);
      const dateMatch = (r.date_of_research_report || r.date || "").includes(q);

      return titleMatch || researcherMatch || contentMatch || dateMatch;
    });
  }, [reports, searchQuery]);

  return (
    <div className={styles.wrapper}>
      {/* ── Top Header Banner ── */}
      <section className={styles.topBanner}>
        <div className={styles.container}>
          <Link href="/articles" className={styles.backLink}>
            <ArrowLeft className="w-4 h-4" /> Back to Articles
          </Link>

          <div>
            <span className={styles.badge}>
              <BookOpen className="w-3.5 h-3.5" />
              Evidence-Informed Literature
            </span>
            <h1 className={styles.title}>Weekly Research Reports</h1>
            <p className={styles.subtitle}>
              Evidence-based clinical reviews, psychiatric literature digests, and therapeutic protocols curated weekly by licensed specialists at Softmind.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Content Container ── */}
      <div className={styles.container}>
        {/* Search & Counter Bar */}
        <div className={styles.filterBar}>
          <div className={styles.searchBox}>
            <Search className={`w-4 h-4 ${styles.searchIcon}`} />
            <input
              type="text"
              placeholder="Search reports by title, topic, or researcher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.statsText}>
            Showing <strong>{filteredReports.length}</strong> of{" "}
            <strong>{reports.length}</strong> {reports.length === 1 ? "report" : "reports"}
          </div>
        </div>

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
                <article key={report.name || idx} className={styles.card}>
                  <div className={styles.cardMeta}>
                    <span className={styles.metaItem}>
                      <Calendar className="w-3.5 h-3.5 text-teal-600" />
                      {dateStr}
                    </span>
                    {researcherName && (
                      <span className={styles.metaItem}>
                        <User className="w-3.5 h-3.5 text-slate-500" />
                        {researcherName}
                      </span>
                    )}
                  </div>

                  <h2 className={styles.cardTitle}>{report.title}</h2>

                  <p className={styles.cardExcerpt}>
                    {excerpt ||
                      "A weekly synthesis of psychiatric research, clinical efficacy reports, and evidence-informed interventions."}
                  </p>

                  <div className={styles.cardFooter}>
                    {refCount > 0 && (
                      <span className={styles.refTag}>
                        {refCount} {refCount === 1 ? "Reference" : "References"}
                      </span>
                    )}

                    <Link
                      href={`/articles/report/${encodeURIComponent(report.title)}`}
                      className={styles.readBtn}
                    >
                      Read Full Report &rarr;
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <FileText className={styles.emptyIcon} />
            <h3 className={styles.emptyTitle}>No research reports found</h3>
            <p className={styles.emptyDesc}>
              {searchQuery
                ? `No reports matched your search for "${searchQuery}".`
                : "No weekly research reports are currently available."}
            </p>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className={styles.clearBtn}
              >
                Clear Search
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
