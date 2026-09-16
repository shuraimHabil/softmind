import { notFound } from "next/navigation";
import Link from "next/link";
import { careServices, getCareServiceBySlug } from "@/lib/careServices";
import JsonLd, {
  generateBreadcrumbsLd,
  generateFaqLd,
} from "@/components/SEO/JsonLd";
import styles from "./careService.module.css";

export async function generateStaticParams() {
  return careServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getCareServiceBySlug(slug);
  if (!service) return {};

  const title = `${service.title} | Softmind Wellness`;
  const description =
    service.intro ||
    `Evidence-based ${service.title.toLowerCase()} provided by qualified psychologists and psychiatrists at Softmind Wellness in Kerala and online.`;
  const canonicalUrl = `https://www.softmindindia.com/our-care/${service.slug}`;

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
      type: "website",
      images: [
        {
          url: "https://www.softmindindia.com/og/default.jpg",
          width: 1200,
          height: 630,
          alt: title,
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

export default async function CareServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getCareServiceBySlug(slug);
  if (!service) notFound();

  const breadcrumbs = [
    { name: "Home", url: "https://www.softmindindia.com" },
    { name: "Our Care", url: "https://www.softmindindia.com/our-care" },
    {
      name: service.title,
      url: `https://www.softmindindia.com/our-care/${service.slug}`,
    },
  ];

  const breadcrumbsLd = generateBreadcrumbsLd(breadcrumbs);
  const faqLd = generateFaqLd(service.faqs);

  return (
    <>
      <JsonLd data={breadcrumbsLd} />
      {faqLd && <JsonLd data={faqLd} />}

      <article className={styles.container}>
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumbs" className={styles.breadcrumbs}>
          <ol itemScope itemType="https://schema.org/BreadcrumbList">
            {breadcrumbs.map((item, index) => (
              <li
                key={item.url}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {index > 0 && <span className={styles.breadcrumbDivider}>/</span>}
                {index === breadcrumbs.length - 1 ? (
                  <span itemProp="name" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.url} itemProp="item">
                    <span itemProp="name">{item.name}</span>
                  </Link>
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            ))}
          </ol>
        </nav>

        {/* Hero Section */}
        <header className={styles.hero}>
          <p className={styles.eyebrow}>OUR CARE</p>
          <h1 className={styles.h1}>{service.h1 || service.title}</h1>
          {service.intro && <p className={styles.intro}>{service.intro}</p>}
          <div className={styles.ctaRow}>
            <Link href="/book" className={styles.primaryBtn}>
              Book a session
            </Link>
            <Link href="/centres" className={styles.secondaryBtn}>
              Find a centre
            </Link>
          </div>
        </header>

        {/* Structured Content Sections */}
        <div className={styles.contentBody}>
          {service.sections.map((sec, idx) => (
            <section key={idx} className={styles.sectionBlock}>
              {sec.section && sec.section !== "Hero" && (
                <h2 className={styles.h2}>{sec.section}</h2>
              )}
              <p className={styles.bodyText}>{sec.text}</p>
            </section>
          ))}

          {/* Frequently Asked Questions */}
          {service.faqs && service.faqs.length > 0 && (
            <section className={styles.faqSection}>
              <h2 className={styles.h2}>Frequently Asked Questions</h2>
              <div className={styles.faqList}>
                {service.faqs.map((faq, index) => (
                  <div key={index} className={styles.faqItem}>
                    <h3 className={styles.faqQuestion}>{faq.question}</h3>
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Tele-MANAS Crisis Note */}
          <aside className={styles.crisisBanner}>
            <p className={styles.crisisTitle}>Need immediate support?</p>
            <p className={styles.crisisText}>
              If you are in distress or thinking about suicide, call Tele-MANAS
              on <strong>14416</strong> (free, 24/7) or visit the nearest
              emergency medical facility.
            </p>
          </aside>
        </div>
      </article>
    </>
  );
}
