import { Metadata } from "next";
import JsonLd, { generateBreadcrumbsLd } from "@/components/SEO/JsonLd";
import styles from "../about/about.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Softmind Wellness",
  description:
    "Privacy and data protection policy of Softmind Wellness Pvt. Ltd., covering client confidentiality and data security.",
  alternates: {
    canonical: "https://www.softmindindia.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.softmindindia.com" },
    { name: "Privacy Policy", url: "https://www.softmindindia.com/privacy-policy" },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbsLd(breadcrumbs)} />
      <div className={styles.container}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>LEGAL & PRIVACY</p>
          <h1 className={styles.h1}>Privacy Policy</h1>
          <p className={styles.intro}>
            How Softmind Wellness Pvt. Ltd. collects, protects, and handles your personal information
            and clinical records.
          </p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.h2}>1. Clinical Information</h2>
            <p className={styles.paragraph}>
              All clinical notes and therapy records are maintained in secure, restricted systems.
              Only your treating psychologist, psychiatrist, and authorised clinical supervisor have
              access to your session details.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>2. Website Data & Contact Information</h2>
            <p className={styles.paragraph}>
              When you submit a contact request or appointment booking form, we collect your name,
              phone number, and preferred centre solely to facilitate communication. We never sell,
              rent, or share your contact information with external marketing companies.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>3. Online Consultations Security</h2>
            <p className={styles.paragraph}>
              Tele-health video sessions are conducted via secure, encrypted platforms to ensure your
              conversation remains entirely between you and your clinician.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>4. Contact Us Concerning Privacy</h2>
            <p className={styles.paragraph}>
              If you have any questions about how your data is handled, please contact our data
              officer at privacy@softmindindia.com.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
