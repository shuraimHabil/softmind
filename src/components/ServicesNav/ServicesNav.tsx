import Image from "next/image";
import Link from "next/link";
import styles from "./ServicesNav.module.css";

const categories = [
  { name: "Anxiety Stress & Overwhelm", href: "#", icon: "icon-anxiety.png" },
  { name: "Children & Adolescents", href: "#", icon: "icon-children.png" },
  { name: "Depression", href: "#", icon: "icon-depression.png" },
  { name: "Difficult Feel & Overwhelm", href: "#", icon: "icon-difficult.png" },
  { name: "Relationships & Family", href: "#", icon: "icon-relationships.png" },
  { name: "Personal Growth & Well Being", href: "#", icon: "icon-growth.png" },
];

export default function ServicesNav() {
  return (
    <section className={styles.section} id="where-to-start">
      <div className={styles.container}>
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <div className={styles.titleRow}>
            <h2 className={styles.title}>Not Sure Where To Start?</h2>
            <Link href="#" className={styles.exploreLink}>
              Explore All Areas &rarr;
            </Link>
          </div>
          <p className={styles.subtitle}>Start with what you&apos;re experiencing.</p>
        </div>

        {/* Two-Column Grid */}
        <div className={styles.grid}>
          {categories.map((cat) => (
            <Link key={cat.name} href={cat.href} className={styles.itemLink}>
              <div className={styles.itemLeft}>
                {/* Empty img tag for the user to add assets later */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/assets/${cat.icon}`} alt={cat.name} className={styles.icon} width={36} height={36} />
                <span className={styles.itemName}>{cat.name}</span>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.arrow}
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
