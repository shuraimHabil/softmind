import { Metadata } from "next";
import Link from "next/link";
import JsonLd, { generateBreadcrumbsLd } from "@/components/SEO/JsonLd";
import styles from "../about/about.module.css";

export const metadata: Metadata = {
  title: "Professional Learning & Training | Softmind Wellness",
  description:
    "Internships, clinical training workshops, and continuing professional development for psychology students and practitioners at Softmind Wellness.",
  alternates: {
    canonical: "https://www.softmindindia.com/professional-learning",
  },
};

export default function ProfessionalLearningPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.softmindindia.com" },
    {
      name: "Professional Learning",
      url: "https://www.softmindindia.com/professional-learning",
    },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbsLd(breadcrumbs)} />
      <div className={styles.container}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>ACADEMIC & CLINICAL ADVANCEMENT</p>
          <h1 className={styles.h1}>Professional Learning at Softmind</h1>
          <p className={styles.intro}>
            Structured clinical training, internships, and skill-building workshops led by
            experienced psychologists and mental health professionals in Kerala.
          </p>
        </header>

        <div className={styles.content}>
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <h2 className={styles.cardHeading}>Clinical Internships</h2>
              <p className={styles.cardText}>
                Intensive, supervised practical exposure for postgraduate students of psychology
                (MSc / MA Psychology and MSW). Observe clinical case formulations, psychological
                assessments, and ethical therapy practice.
              </p>
              <p style={{ marginTop: "16px" }}>
                <Link
                  href="/professional-learning/internships"
                  className={styles.textLink}
                >
                  Explore Internship Programmes &rarr;
                </Link>
              </p>
            </div>

            <div className={styles.missionCard}>
              <h2 className={styles.cardHeading}>Workshops & Seminars</h2>
              <p className={styles.cardText}>
                Focussed continuing education modules on CBT techniques, adolescent counselling,
                psychometrics, and neuroscience-informed psychotherapy.
              </p>
              <p style={{ marginTop: "16px" }}>
                <Link
                  href="/professional-learning/workshops"
                  className={styles.textLink}
                >
                  View Clinical Workshops &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
