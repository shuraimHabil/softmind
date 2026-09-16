import { Metadata } from "next";
import Link from "next/link";
import JsonLd, { generateBreadcrumbsLd } from "@/components/SEO/JsonLd";
import styles from "../../about/about.module.css";

export const metadata: Metadata = {
  title: "Psychology Internships in Kerala | Softmind Wellness",
  description:
    "Supervised clinical psychology internships and observerships for postgraduate students at Softmind Wellness centres in Kochi and Thrissur.",
  alternates: {
    canonical: "https://www.softmindindia.com/professional-learning/internships",
  },
};

export default function InternshipsPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.softmindindia.com" },
    {
      name: "Professional Learning",
      url: "https://www.softmindindia.com/professional-learning",
    },
    {
      name: "Internships",
      url: "https://www.softmindindia.com/professional-learning/internships",
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
            <li aria-current="page">Internships</li>
          </ol>
        </nav>

        <header className={styles.hero}>
          <p className={styles.eyebrow}>STUDENT TRAINING</p>
          <h1 className={styles.h1}>Psychology Internships at Softmind</h1>
          <p className={styles.intro}>
            Comprehensive practical exposure in clinical and counselling settings, guided
            directly by RCI-licensed psychologists.
          </p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.h2}>Programme Overview</h2>
            <p className={styles.paragraph}>
              Our internship programme is designed for students enrolled in MSc Psychology,
              MA Applied Psychology, MSW, and related behavioural science disciplines seeking
              practical, ethically grounded clinical exposure.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>What the Internship Covers</h2>
            <ul className={styles.bulletList}>
              <li>Clinical intake interview structure and case history taking.</li>
              <li>Observation of psychometric and cognitive testing procedures.</li>
              <li>Case formulation and evidence-based therapeutic treatment planning.</li>
              <li>Ethics, confidentiality, and legal aspects of mental healthcare in India.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Eligibility & How to Apply</h2>
            <p className={styles.paragraph}>
              Applicants must currently be pursuing or have completed a Master’s degree in
              Psychology or Social Work from a recognised university. Applications are accepted
              on a rolling basis.
            </p>
            <p className={styles.paragraph}>
              To apply, please email your academic credentials and university recommendation letter
              to <strong>internships@softmindindia.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
