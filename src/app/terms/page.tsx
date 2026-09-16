import { Metadata } from "next";
import Link from "next/link";
import JsonLd, { generateBreadcrumbsLd } from "@/components/SEO/JsonLd";
import styles from "../about/about.module.css";

export const metadata: Metadata = {
  title: "Terms and Conditions | Softmind Wellness",
  description:
    "Terms of service, consultation guidelines, and clinical policies for Softmind Wellness Pvt. Ltd.",
  alternates: {
    canonical: "https://www.softmindindia.com/terms",
  },
};

export default function TermsPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.softmindindia.com" },
    { name: "Terms", url: "https://www.softmindindia.com/terms" },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbsLd(breadcrumbs)} />
      <div className={styles.container}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>LEGAL</p>
          <h1 className={styles.h1}>Terms and Conditions</h1>
          <p className={styles.intro}>
            These terms govern clinical appointments, online consultations, and website usage
            with Softmind Wellness Pvt. Ltd.
          </p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.h2}>1. Clinical Consultation Scope</h2>
            <p className={styles.paragraph}>
              Softmind Wellness provides outpatient psychological counselling, psychotherapy,
              and psychiatric consultations. Our services are elective, planned interventions and
              do not constitute inpatient or crisis hospitalisation services.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>2. Appointment Scheduling & Cancellations</h2>
            <p className={styles.paragraph}>
              Appointments are reserved in advance. If you need to reschedule or cancel a session,
              please notify our reception team at least 24 hours prior to your scheduled time.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>3. Confidentiality</h2>
            <p className={styles.paragraph}>
              We adhere strictly to professional ethical standards regarding client privacy.
              Records and disclosures are kept strictly confidential except where disclosure is
              mandated by law or where there exists an immediate, verifiable danger to self or others.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>4. Legal Entity</h2>
            <p className={styles.paragraph}>
              Softmind Wellness Pvt. Ltd. is incorporated in Kerala, India. For legal or administrative
              inquiries, please write to legal@softmindindia.com.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
