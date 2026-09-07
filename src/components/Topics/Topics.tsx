import Link from "next/link";
import styles from "./Topics.module.css";

const col1Topics = [
  { name: "Anxiety & Stress", count: 48, href: "#" },
  { name: "Sleep & Rest", count: 22, href: "#" },
  { name: "Relationships", count: 29, href: "#" },
];

const col2Topics = [
  { name: "Depression", count: 35, href: "#" },
  { name: "Mindfulness", count: 31, href: "#" },
  { name: "Self-Growth", count: 26, href: "#" },
];

export default function Topics() {
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
            {col1Topics.map((topic) => (
              <Link key={topic.name} href={topic.href} className={styles.topicRow}>
                <span className={styles.topicName}>{topic.name}</span>
                <span className={styles.articleBadge}>
                  {topic.count} articles
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
            ))}
          </div>

          {/* Column 2 */}
          <div className={styles.topicColumn}>
            {col2Topics.map((topic) => (
              <Link key={topic.name} href={topic.href} className={styles.topicRow}>
                <span className={styles.topicName}>{topic.name}</span>
                <span className={styles.articleBadge}>
                  {topic.count} articles
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
