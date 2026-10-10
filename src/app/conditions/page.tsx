import { Metadata } from "next";
import Link from "next/link";
import { conditions } from "@/lib/conditions";
import JsonLd, { generateBreadcrumbsLd } from "@/components/SEO/JsonLd";
import styles from "./conditions.module.css";

export const metadata: Metadata = {
  title: "Mental Health Conditions & Concerns | Softmind Wellness",
  description:
    "Evidence-based clinical guides to psychological conditions, symptoms, assessment, and care pathways at Softmind Wellness in Kerala and online.",
  alternates: {
    canonical: "https://www.softmindindia.com/conditions",
  },
  openGraph: {
    title: "Mental Health Conditions & Concerns | Softmind Wellness",
    description:
      "Explore clinical guidance on anxiety, depression, OCD, trauma, and emotional wellbeing from licensed psychologists.",
    url: "https://www.softmindindia.com/conditions",
  },
};

export default function ConditionsHubPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.softmindindia.com" },
    { name: "Conditions", url: "https://www.softmindindia.com/conditions" },
  ];

  // Group conditions by their clinical category
  const groups: Record<string, typeof conditions> = {};
  for (const c of conditions) {
    if (!groups[c.group]) groups[c.group] = [];
    groups[c.group].push(c);
  }

  return (
    <>
      <JsonLd data={generateBreadcrumbsLd(breadcrumbs)} />
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.h1}>Mental Health Conditions & Care</h1>
          <p className={styles.subtitle}>
            Clear, clinically responsible information to help you understand
            what you are experiencing and how our team assesses and supports each
            concern.
          </p>
        </header>

        <div className={styles.groupList}>
          {Object.entries(groups).map(([groupName, items]) => (
            <section key={groupName} className={styles.groupSection}>
              <h2 className={styles.groupTitle}>{groupName}</h2>
              <div className={styles.cardsGrid}>
                {items.map((cond) => (
                  <Link
                    key={cond.slug}
                    href={cond.url}
                    className={styles.conditionCard}
                  >
                    <h3 className={styles.cardTitle}>{cond.name}</h3>
                    <p className={styles.cardSnippet}>{cond.whatItIs}</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
