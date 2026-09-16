import { Metadata } from "next";
import Link from "next/link";
import JsonLd, { generateBreadcrumbsLd } from "@/components/SEO/JsonLd";
import styles from "../about/about.module.css";

export const metadata: Metadata = {
  title: "Careers at Softmind | Work with Us",
  description:
    "Explore career opportunities for clinical psychologists, counselling psychologists, psychotherapists, and psychiatrists at Softmind Wellness in Kerala.",
  alternates: {
    canonical: "https://www.softmindindia.com/careers",
  },
};

export default function CareersPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.softmindindia.com" },
    { name: "Careers", url: "https://www.softmindindia.com/careers" },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbsLd(breadcrumbs)} />
      <div className={styles.container}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>JOIN OUR TEAM</p>
          <h1 className={styles.h1}>Careers at Softmind Wellness</h1>
          <p className={styles.intro}>
            We are always seeking committed, licensed mental health practitioners who share our
            dedication to evidence-based care, ethical practice, and patient wellbeing.
          </p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.h2}>Clinical Opportunities</h2>
            <p className={styles.paragraph}>
              We invite applications from RCI-licensed Clinical Psychologists, Rehabilitation
              Psychologists, and Consultant Psychiatrists interested in full-time or visiting
              practice at our centres in Kochi, Thrissur, and Aroor, as well as our tele-health division.
            </p>
            <p className={styles.paragraph}>
              We provide supportive peer supervision, continuing professional development, and
              soundproof consultation facilities.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>How to Apply</h2>
            <p className={styles.paragraph}>
              To express your interest, please email your detailed CV and copy of professional
              licensure/registration to <strong>careers@softmindindia.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
