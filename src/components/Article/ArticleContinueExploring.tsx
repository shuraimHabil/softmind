import Image from "next/image";
import Link from "next/link";
import { fetchPublishedArticles } from "@/lib/articles";
import styles from "./ArticleContinueExploring.module.css";

export default async function ArticleContinueExploring({ current }: { current: string }) {
  const allArticles = await fetchPublishedArticles();

  // Get up to 5 articles excluding current
  const otherArticles = allArticles.filter((a) => a.slug !== current);
  const items = otherArticles.slice(0, 5);

  return (
    <section className={styles.section} id="continue-exploring">
      <div className={styles.container}>
        <h2 className={styles.heading}>Continue Exploring</h2>
        <div className={styles.grid}>
          {items.map((a, idx) => (
            <Link
              key={`${a.slug}-${idx}`}
              href={`/articles/${a.slug}`}
              className={styles.card}
            >
              <div className={styles.imgWrap}>
                <Image
                  src={a.img}
                  alt={a.title}
                  fill
                  className={styles.img}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{a.title}</h3>
                <p className={styles.cardExcerpt}>{a.excerpt}</p>
                <div className={styles.cardMeta}>
                  <span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle", marginRight: "6px", color: "var(--primary)" }}>
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    {a.author}
                  </span>
                  <span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle", marginRight: "6px", color: "var(--primary)" }}>
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {a.reviewedDate}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}



