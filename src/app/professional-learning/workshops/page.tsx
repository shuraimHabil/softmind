import { Metadata } from "next";
import Link from "next/link";
import JsonLd, { generateBreadcrumbsLd } from "@/components/SEO/JsonLd";
import styles from "../../about/about.module.css";

export const metadata: Metadata = {
  title: "Clinical Psychology Workshops | Softmind Wellness",
  description:
    "Continuing professional education and skill development workshops in CBT, child psychology, and psychotherapy at Softmind Wellness.",
  alternates: {
    canonical: "https://www.softmindindia.com/professional-learning/workshops",
  },
};

export default function WorkshopsPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.softmindindia.com" },
    {
      name: "Professional Learning",
      url: "https://www.softmindindia.com/professional-learning",
    },
    {
      name: "Workshops",
      url: "https://www.softmindindia.com/professional-learning/workshops",
    },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbsLd(breadcrumbs)} />
      <div className={styles.container}>
        <nav aria-label="Breadcrumbs" className={styles.breadcrumbs}>
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <span className={styles.divider}>/</span>
            <li>
              <Link href="/professional-learning">Professional Learning</Link>
            </li>
            <span className={styles.divider}>/</span>
            <li aria-current="page">Workshops</li>
          </ol>
        </nav>

        <header className={styles.hero}>
          <p className={styles.eyebrow}>CONTINUING EDUCATION</p>
          <h1 className={styles.h1}>Clinical Workshops & Masterclasses</h1>
          <p className={styles.intro}>
            Practical, evidence-based training seminars conducted by senior psychologists and
            clinical educators for mental health students and practitioners.
          </p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.h2}>Upcoming & Regular Workshops</h2>
            <div className={styles.missionGrid}>
              <div className={styles.missionCard}>
                <h3 className={styles.cardHeading}>CBT Skills in Practice</h3>
                <p className={styles.cardText}>
                  Hands-on training in cognitive restructuring, behavioural activation,
                  and structured problem-solving for anxiety and mood disorders.
                </p>
              </div>
              <div className={styles.missionCard}>
                <h3 className={styles.cardHeading}>Child & Adolescent Interventions</h3>
                <p className={styles.cardText}>
                  Evidence-based assessment and intervention strategies for ADHD, behavioural
                  difficulties, and emotional regulation in youth.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Registration & Inquiries</h2>
            <p className={styles.paragraph}>
              To receive notifications about upcoming dates or to arrange institutional training
              for your college or organisation, contact <strong>workshops@softmindindia.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
