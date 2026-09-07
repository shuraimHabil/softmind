import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/articles";
import styles from "./ArticleBody.module.css";

export default function ArticleBody({
  article,
  related,
}: {
  article: Article;
  related: Article[];
}) {
  // Take up to 5 related items for the sidebar
  const sidebarRelated = related.length >= 5 
    ? related.slice(0, 5) 
    : [...related, ...Array(5 - related.length).fill(related[0])].slice(0, 5);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* ── Main content ── */}
        <div className={styles.main}>
          {/* Wider View callout */}
          <div className={styles.widerView}>
            <h3 className={styles.widerViewLabel}>A Wider View</h3>
            <p className={styles.widerViewText}>{article.widerView}</p>
          </div>

          {/* Numbered sections */}
          <div className={styles.sectionsList}>
            {article.sections.slice(0, 3).map((sec) => (
              <div
                key={sec.num}
                className={styles.section_block}
                id={sec.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              >
                <div className={styles.secNum}>{sec.num}</div>
                <div className={styles.secContent}>
                  <h2 className={styles.secHeading}>{sec.heading}</h2>
                  <p className={styles.secBody}>{sec.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.continueAction}>
            <Link href="#continue-exploring" className={styles.continueReading}>
              Continue Reading →
            </Link>
          </div>
        </div>

        {/* ── Right sidebar ── */}
        <aside className={styles.sidebar}>
          {/* Table of Contents */}
          <div className={styles.tocBox}>
            <h3 className={styles.tocTitle}>In This Article</h3>
            <ul className={styles.tocList}>
              {article.toc.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className={styles.tocLink}
                  >
                    <span className={styles.tocDash}>—</span>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Reading */}
          <div className={styles.relatedBox}>
            <div className={styles.relatedHeader}>
              <h3 className={styles.relatedTitle}>Related Reading</h3>
              <Link href="/articles" className={styles.viewAll}>
                View All →
              </Link>
            </div>
            <div className={styles.relatedList}>
              {sidebarRelated.map((r, idx) => (
                <Link
                  key={`${r.slug}-${idx}`}
                  href={`/articles/${r.slug}`}
                  className={styles.relatedCard}
                >
                  <div className={styles.relatedImgWrap}>
                    <Image
                      src={r.img}
                      alt={r.title}
                      fill
                      className={styles.relatedImg}
                      sizes="80px"
                    />
                  </div>
                  <div className={styles.relatedInfo}>
                    <p className={styles.relatedCardTitle}>{r.title}</p>
                    <span className={styles.relatedMeta}>{r.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
