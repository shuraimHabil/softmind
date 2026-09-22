import { Metadata } from "next";
import Link from "next/link";
import JsonLd, {
  generateBreadcrumbsLd,
  generateOrganizationLd,
} from "@/components/SEO/JsonLd";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Softmind Wellness | Psychological Care in Kerala",
  description:
    "Learn about Softmind Wellness Pvt. Ltd., our clinical governance, multidisciplinary team of licensed psychologists and psychiatrists, and our commitment to evidence-based care.",
  alternates: {
    canonical: "https://www.softmindindia.com/about",
  },
  openGraph: {
    title: "About Softmind Wellness | Psychological Care in Kerala",
    description:
      "Grounded in science, free of stigma, and dedicated to compassionate psychological care across Kerala and online.",
    url: "https://www.softmindindia.com/about",
  },
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.softmindindia.com" },
    { name: "About", url: "https://www.softmindindia.com/about" },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbsLd(breadcrumbs)} />
      <JsonLd data={generateOrganizationLd()} />

      <div className={styles.container}>


        <header className={styles.hero}>
          <h1 className={styles.h1}>About Softmind Wellness</h1>
          <p className={styles.intro}>
            Softmind Wellness Pvt. Ltd. is an established mental health organisation in Kerala,
            offering evidence-based psychological assessment, therapy, and psychiatric consultation
            at physical centres across Kochi, Thrissur, Aroor, and through secure online consultations.
          </p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.h2}>How We Work</h2>
            <p className={styles.paragraph}>
              When you contact Softmind, you first speak with an experienced psychologist who
              understands what you are looking for and matches you with the clinician best suited
              to your needs.
            </p>
            <p className={styles.paragraph}>
              Our team includes RCI-licensed clinical and rehabilitation psychologists, psychotherapists,
              and consultant psychiatrists. We use standard psychological assessments at intake and review
              points, ensuring transparency and measurable progress throughout your care journey.
            </p>
            <p className={styles.paragraph}>
              If medication could be helpful alongside therapy, our psychiatrists work collaboratively
              with your treating psychologist on a shared, holistic care plan.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Our Standards of Practice</h2>
            <ul className={styles.bulletList}>
              <li>Every clinician offers at least two established, evidence-based psychotherapies (e.g. CBT, SFBT, mindfulness).</li>
              <li>Care is strictly confidential and delivered in soundproof, private consultation suites.</li>
              <li>No unsupported superlatives or guarantees — care is guided by clinical research and ongoing evaluation.</li>
              <li>Multi-language support in both Malayalam and English.</li>
            </ul>
            <p style={{ marginTop: "16px" }}>
              <Link href="/about/clinical-standards" className={styles.textLink}>
                Read our full Clinical Standards and Governance &rarr;
              </Link>
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Vision and Mission</h2>
            <div className={styles.missionGrid}>
              <div className={styles.missionCard}>
                <h3 className={styles.cardHeading}>Our Vision</h3>
                <p className={styles.cardText}>
                  Psychological care in Kerala that is grounded in science, free of stigma,
                  and responsive to the real circumstances of each person’s life.
                </p>
              </div>
              <div className={styles.missionCard}>
                <h3 className={styles.cardHeading}>Our Mission</h3>
                <p className={styles.cardText}>
                  To offer thorough clinical assessment and evidence-based treatment with
                  deep respect for individual privacy, rigorous ethics, and genuine empathy.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Centres & Access</h2>
            <p className={styles.paragraph}>
              We operate dedicated mental health centres in <strong>Panampilly Nagar</strong> (Kochi),{" "}
              <strong>Kakkanad</strong> (Kochi), <strong>Thrissur</strong>, and <strong>Aroor</strong> (inside Lakshmi Hospital),
              along with secure tele-health consultations across Kerala and worldwide.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/centres" className={styles.primaryBtn}>
                Find a Centre Near You
              </Link>
              <Link href="/clinicians" className={styles.secondaryBtn}>
                Meet Our Clinicians
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
