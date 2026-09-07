import Image from "next/image";
import Link from "next/link";
import styles from "./ServicesNav.module.css";

const categories = [
  { name: "Anxiety Stress & Overwhelm", href: "#" },
  { name: "Depression", href: "#" },
  { name: "Relationships & Family", href: "#" },
  { name: "Children & Adolescents", href: "#" },
  { name: "Difficult Feel & Overwhelm", href: "#" },
  { name: "Personal Growth & Well Being", href: "#" },
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
          {/* Left Column: Image */}
          <div className={styles.imageCol}>
            <div className={styles.imgWrap}>
              <Image
                src="/assets/couple_session.png"
                alt="A couple attending a therapy session together"
                fill
                className={styles.img}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Right Column: List of Experiences */}
          <div className={styles.listCol}>
            {categories.map((cat) => (
              <Link key={cat.name} href={cat.href} className={styles.itemLink}>
                <span className={styles.itemName}>{cat.name}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
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
      </div>
    </section>
  );
}
