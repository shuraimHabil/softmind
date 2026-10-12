import Link from "next/link";
import { fetchPublishedArticles, deriveFilterData } from "@/lib/articles";
import styles from "./Topics.module.css";

export default async function Topics() {
  const articles = await fetchPublishedArticles();
  const { categories } = deriveFilterData(articles);

  const getCategoryCount = (cat: string) => {
    const cLower = cat.toLowerCase();
    return articles.filter(
      (a) =>
        a.category.toLowerCase() === cLower ||
        a.badge.toLowerCase() === cLower
    ).length;
  };

  const mid = Math.ceil(categories.length / 2);
  const col1 = categories.slice(0, mid);
  const col2 = categories.slice(mid);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left column: Title & Subtitle */}
        <div className={styles.leftCol}>
          <h2 className={styles.title}>Explore by Topic</h2>
          <p className={styles.subtitle}>
            Empower your understanding by diving deep into specific areas of mental wellness.
          </p>
        </div>

        {/* Right area: 2-column topic list */}
        <div className={styles.rightCols}>
          {/* Column 1 */}
          <div className={styles.topicColumn}>
            {col1.map((cat) => {
              const count = getCategoryCount(cat);
              const href = `/articles?category=${encodeURIComponent(cat)}`;
              return (
                <Link key={cat} href={href} className={styles.topicRow}>
                  <span className={styles.topicName}>{cat}</span>
                  <span className={styles.articleBadge}>
                    {count} {count === 1 ? "article" : "articles"}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles.chevron}
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Column 2 */}
          <div className={styles.topicColumn}>
            {col2.map((cat) => {
              const count = getCategoryCount(cat);
              const href = `/articles?category=${encodeURIComponent(cat)}`;
              return (
                <Link key={cat} href={href} className={styles.topicRow}>
                  <span className={styles.topicName}>{cat}</span>
                  <span className={styles.articleBadge}>
                    {count} {count === 1 ? "article" : "articles"}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles.chevron}
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
