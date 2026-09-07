import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/articles";
import styles from "./Insights.module.css";

export default function Insights() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Latest Insights</h2>
          <Link href="/articles" className={styles.btnOutline}>View All Articles</Link>
        </div>
        <div className={styles.grid}>
          {articles.map((a) => (
            <article key={a.title} className={styles.card}>
              <div className={styles.imgWrap}>
                <Image src={a.img} alt={a.title} fill className={styles.img} sizes="33vw" />
                <span className={styles.badge}>{a.badge}</span>
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}><Link href={`/articles/${a.slug}`}>{a.title}</Link></h3>
                <p className={styles.excerpt}>{a.excerpt}</p>
                <div className={styles.meta}>
                  <span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '5px', color: 'var(--primary)' }}>
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    {a.author}
                  </span>
                  <span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '5px', color: 'var(--primary)' }}>
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {a.reviewedDate}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
