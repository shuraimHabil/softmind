"use client";

import { useState } from "react";
import Link from "next/link";
import { conditions } from "@/lib/conditions";
import styles from "./KnowledgeCentreConditions.module.css";

const CATEGORIES = [
  "Anxiety and stress",
  "Mood",
  "Obsessions and compulsions",
  "Trauma",
  "Personality",
  "Children and teenagers",
  "Eating and body",
  "Sleep",
  "Body and mind",
  "Addiction",
];

// Map display category names to the `group` values used in conditions.ts
const CATEGORY_MAP: Record<string, string[]> = {
  "Anxiety and stress": ["Anxiety and stress"],
  "Mood": ["Mood"],
  "Obsessions and compulsions": ["Obsessions and compulsions"],
  "Trauma": ["Trauma"],
  "Personality": ["Personality"],
  "Children and teenagers": ["Children and teenagers"],
  "Eating and body": ["Eating and body"],
  "Sleep": ["Sleep"],
  "Body and mind": ["Body and mind"],
  "Addiction": ["Addiction"],
};

export default function KnowledgeCentreConditions() {
  const [activeCategory, setActiveCategory] = useState("Anxiety and stress");

  const filtered = conditions.filter((c) => {
    const mapped = CATEGORY_MAP[activeCategory] ?? [];
    return (
      mapped.includes(c.group) ||
      c.group.toLowerCase() === activeCategory.toLowerCase()
    );
  });

  return (
    <section className={styles.section} id="conditions">
      <div className={styles.container}>
        <h2 className={styles.heading}>Mental Health Conditions &amp; Care</h2>

        {/* Category filter tabs */}
        <div className={styles.tabsWrapper}>
          <div className={styles.tabs} role="tablist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`${styles.tab} ${activeCategory === cat ? styles.tabActive : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Conditions grid */}
        {filtered.length > 0 ? (
          <div className={styles.grid}>
            {filtered.map((condition) => (
              <Link
                key={condition.slug}
                href={condition.url}
                className={styles.card}
              >
                <div className={styles.cardTop}>
                  <span className={styles.groupTag}>{condition.group}</span>
                  <h3 className={styles.cardTitle}>{condition.name}</h3>
                </div>
                <p className={styles.cardDesc}>{condition.whatItIs.slice(0, 100)}…</p>
                <span className={styles.cardArrow}>Read guide →</span>
              </Link>
            ))}
          </div>
        ) : (
          <p className={styles.empty}>No conditions found in this category.</p>
        )}
      </div>
    </section>
  );
}
