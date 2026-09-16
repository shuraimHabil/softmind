import { Metadata } from "next";
import Link from "next/link";
import JsonLd, { generateBreadcrumbsLd } from "@/components/SEO/JsonLd";
import styles from "../about.module.css";

export const metadata: Metadata = {
  title: "Clinical Standards & Governance | Softmind Wellness",
  description:
    "Explore Softmind Wellness clinical standards, ethical guidelines, practitioner qualifications, and evidence-based practice framework.",
  alternates: {
    canonical: "https://www.softmindindia.com/about/clinical-standards",
  },
  openGraph: {
    title: "Clinical Standards & Governance | Softmind Wellness",
    description:
      "Our clinical governance framework ensures ethical, evidence-based, and confidential psychological and psychiatric care across Kerala.",
    url: "https://www.softmindindia.com/about/clinical-standards",
  },
};

export default function ClinicalStandardsPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.softmindindia.com" },
    { name: "About", url: "https://www.softmindindia.com/about" },
    {
      name: "Clinical Standards",
      url: "https://www.softmindindia.com/about/clinical-standards",
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
              <Link href="/about">About</Link>
            </li>
            <span className={styles.divider}>/</span>
            <li aria-current="page">Clinical Standards</li>
          </ol>
        </nav>

        <header className={styles.hero}>
          <p className={styles.eyebrow}>CLINICAL GOVERNANCE</p>
          <h1 className={styles.h1}>Clinical Standards and Ethics</h1>
          <p className={styles.intro}>
            At Softmind Wellness, our clinical work is governed by clear standards of
            qualification, evidence-based methodologies, and strict ethical accountability.
          </p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.h2}>1. Practitioner Credentials & Licensure</h2>
            <p className={styles.paragraph}>
              All clinical psychologists on our team hold valid registrations with the
              Rehabilitation Council of India (RCI) or appropriate medical councils. We verify
              credentials before any clinician sees clients, ensuring you receive care from
              qualified, accountable professionals.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>2. Evidence-Based Interventions</h2>
            <p className={styles.paragraph}>
              We provide interventions supported by peer-reviewed psychological research,
              primarily Cognitive Behaviour Therapy (CBT), Acceptance and Commitment principles,
              mindfulness-informed psychotherapy, and structured psychiatric consultations. We do
              not endorse unscientific cures or quick-fix therapies.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>3. Confidentiality & Privacy</h2>
            <p className={styles.paragraph}>
              Everything discussed in therapy is protected by strict clinical confidentiality.
              Information is never disclosed to family members, employers, or third parties
              without your explicit written consent, except in rare situations where there is an
              imminent risk to life.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>4. Safe Clinical Messaging & Crisis Protocols</h2>
            <p className={styles.paragraph}>
              Our centres are outpatient clinics designed for planned therapy and consultations.
              For acute emergencies and crises, we maintain established escalation protocols and
              direct individuals to the national Tele-MANAS helpline (<strong>14416</strong>) or
              emergency medical departments.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>5. Collaborative Care</h2>
            <p className={styles.paragraph}>
              When medication is indicated, our psychiatrists work collaboratively with our
              psychologists to ensure integrated, patient-centred care.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
