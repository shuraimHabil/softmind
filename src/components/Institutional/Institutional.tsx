import Link from "next/link";
import styles from "./Institutional.module.css";

const pillars = [
  {
    title: "Research & Innovation",
    desc: "Research, evaluation, innovation and development related to psychological care and emerging approaches.",
    href: "#",
  },
  {
    title: "Professional Training",
    desc: "Advanced professional learning, therapist development, workshops and continuing professional education.",
    href: "#",
  },
  {
    title: "International Collaborations",
    desc: "Collaborations with relevant institutions, researchers, professional organizations and technology partners.",
    href: "#",
  },
];

export default function Institutional() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left-aligned clean heading */}
        <h2 className={styles.title}>Advancing Psychological Care Together.</h2>

        {/* 3 Columns Grid */}
        <div className={styles.grid}>
          {pillars.map((item) => (
            <div key={item.title} className={styles.col}>
              <h3 className={styles.colTitle}>{item.title}</h3>
              <p className={styles.colDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom View More Link */}
        <div className={styles.bottomRow}>
          <Link href="/research-and-collaboration" className={styles.viewMoreLink}>
            View More &rarr;
          </Link>
        </div>

        
      </div>
    </section>
  );
}
