import { notFound } from "next/navigation";
import Link from "next/link";
import { conditions, getConditionBySlug } from "@/lib/conditions";
import JsonLd, {
  generateBreadcrumbsLd,
  generateConditionLd,
  generateFaqLd,
} from "@/components/SEO/JsonLd";
import styles from "./conditionDetail.module.css";

export async function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);
  if (!condition) return {};

  const title = `${condition.name} – Symptoms, Assessment & Treatment | Softmind Wellness`;
  const description = condition.metaDescription;
  const canonicalUrl = `https://www.softmindindia.com/conditions/${condition.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: "https://www.softmindindia.com/og/default.jpg",
          width: 1200,
          height: 630,
          alt: `${condition.name} Clinical Guide`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.softmindindia.com/og/default.jpg"],
    },
  };
}

export default async function ConditionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);
  if (!condition) notFound();

  const breadcrumbs = [
    { name: "Home", url: "https://www.softmindindia.com" },
    { name: "Conditions", url: "https://www.softmindindia.com/conditions" },
    {
      name: condition.name,
      url: `https://www.softmindindia.com/conditions/${condition.slug}`,
    },
  ];

  const breadcrumbsLd = generateBreadcrumbsLd(breadcrumbs);
  const conditionLd = generateConditionLd({
    name: condition.name,
    url: `https://www.softmindindia.com/conditions/${condition.slug}`,
    description: condition.whatItIs,
    commonSigns: condition.commonSigns,
  });
  const faqLd = generateFaqLd(condition.faqs);

  return (
    <>
      <JsonLd data={breadcrumbsLd} />
      <JsonLd data={conditionLd} />
      {faqLd && <JsonLd data={faqLd} />}

      <article className={styles.container}>
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumbs" className={styles.breadcrumbs}>
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <span className={styles.divider}>/</span>
            <li>
              <Link href="/conditions">Conditions</Link>
            </li>
            <span className={styles.divider}>/</span>
            <li aria-current="page">{condition.name}</li>
          </ol>
        </nav>

        {/* High-priority Safe Messaging Crisis Alert (for suicidal thoughts or severe distress) */}
        {condition.isEmergency && (
          <div className={styles.urgentHelpBoxTop} role="alert">
            <h2 className={styles.urgentTopHeading}>Immediate Crisis Support Available</h2>
            <p className={styles.urgentTopText}>
              If you or someone you care about is in immediate danger or having thoughts
              of suicide, free 24/7 confidential help is available right now.
              Call Tele-MANAS on <strong>14416</strong> (toll-free across India)
              or go to your nearest emergency department.
            </p>
          </div>
        )}

        {/* Header */}
        <header className={styles.header}>
          <p className={styles.groupBadge}>{condition.group}</p>
          <h1 className={styles.h1}>{condition.name}</h1>
          <p className={styles.leadText}>{condition.whatItIs}</p>
          <div className={styles.reviewerNote}>
            <span>Clinically reviewed by <strong>{condition.reviewer.name}</strong> ({condition.reviewer.role})</span>
            <span className={styles.reviewDate}>• Updated {condition.reviewer.date}</span>
          </div>
        </header>

        {/* 10 Required Sections Structure */}
        <div className={styles.articleBody}>
          {/* Section 1: What It Is */}
          <section className={styles.section}>
            <h2 className={styles.h2}>1. Understanding {condition.name}</h2>
            <p className={styles.paragraph}>{condition.whatItIs}</p>
          </section>

          {/* Section 2: Common Signs */}
          <section className={styles.section}>
            <h2 className={styles.h2}>2. Common Signs & Symptoms</h2>
            <ul className={styles.bulletList}>
              {condition.commonSigns.map((sign, idx) => (
                <li key={idx} className={styles.bulletItem}>
                  {sign}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3: What Can Cause It */}
          <section className={styles.section}>
            <h2 className={styles.h2}>3. What Can Cause or Trigger It</h2>
            <ul className={styles.bulletList}>
              {condition.causes.map((cause, idx) => (
                <li key={idx} className={styles.bulletItem}>
                  {cause}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 4: How Softmind Assesses It */}
          <section className={styles.section}>
            <h2 className={styles.h2}>4. How Softmind Assesses It</h2>
            <p className={styles.paragraph}>{condition.assessment}</p>
          </section>

          {/* Section 5: Treatment */}
          <section className={styles.section}>
            <h2 className={styles.h2}>5. Treatment: Therapy, Medication or Both</h2>
            <p className={styles.paragraph}>{condition.treatment}</p>
          </section>

          {/* Section 6: When to Get Help Urgently */}
          <section className={`${styles.section} ${styles.urgentSection}`}>
            <h2 className={styles.h2}>6. When to Get Help Urgently</h2>
            <p className={styles.paragraph}>{condition.urgentHelp}</p>
            <div className={styles.callout}>
              <strong>Tele-MANAS Crisis Helpline:</strong> Call <strong>14416</strong> (Available 24 hours, free of charge, across all states).
            </div>
          </section>

          {/* Section 7: Related Care Pages & Clinicians */}
          <section className={styles.section}>
            <h2 className={styles.h2}>7. Related Care Services & Support</h2>
            <p className={styles.paragraph}>
              Our multidisciplinary team provides tailored psychological therapy and psychiatric consultations for {condition.name.toLowerCase()}:
            </p>
            <div className={styles.careLinks}>
              {condition.relatedCare.map((careUrl, idx) => {
                const serviceSlug = careUrl.replace("/our-care/", "");
                const label = serviceSlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
                return (
                  <Link key={idx} href={careUrl} className={styles.careLinkBadge}>
                    {label} &rarr;
                  </Link>
                );
              })}
              <Link href="/clinicians" className={styles.careLinkBadge}>
                View Consulting Clinicians &rarr;
              </Link>
            </div>
          </section>

          {/* Section 8: FAQ */}
          <section className={styles.section}>
            <h2 className={styles.h2}>8. Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              {condition.faqs.map((faq, idx) => (
                <div key={idx} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{faq.question}</h3>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 9: Clinical Sign-off */}
          <section className={styles.section}>
            <h2 className={styles.h2}>9. Clinical Sign-Off</h2>
            <div className={styles.signOffCard}>
              <p><strong>Clinical Reviewer:</strong> {condition.reviewer.name}</p>
              <p><strong>Professional Designation:</strong> {condition.reviewer.role}</p>
              <p><strong>Review Status:</strong> Content aligned with current clinical evidence (Review date: {condition.reviewer.date})</p>
            </div>
          </section>

          {/* Section 10: Reputable References */}
          <section className={styles.section}>
            <h2 className={styles.h2}>10. Reputable References</h2>
            <ol className={styles.refList}>
              {condition.references.map((ref, idx) => (
                <li key={idx} className={styles.refItem}>
                  {ref}
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* Booking CTA Footer */}
        <div className={styles.bottomCta}>
          <h3 className={styles.bottomCtaTitle}>Ready to speak with a psychologist?</h3>
          <p className={styles.bottomCtaText}>
            Our team offers thoughtful, confidential consultations at our centres in Kochi, Thrissur, Aroor, and online.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/book" className={styles.primaryBtn}>
              Book a consultation
            </Link>
            <Link href="/centres" className={styles.secondaryBtn}>
              Our centres
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
