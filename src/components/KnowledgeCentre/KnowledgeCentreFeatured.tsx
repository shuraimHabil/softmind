"use client";

import Link from "next/link";
import styles from "./KnowledgeCentreFeatured.module.css";

const featuredItems = [
  {
    id: "understanding-anxiety",
    type: "Article",
    title: "Understanding Anxiety",
    desc: "What anxiety is, why it happens, and evidence-based ways to manage it.",
    readTime: "7 min read",
    img: "/assets/knowledge_featured_1.jpg",
    href: "/articles",
  },
  {
    id: "first-therapy-session",
    type: "Guide",
    title: "First Therapy Session: What To Expect",
    desc: "A simple guide to help you feel prepared and comfortable for your first session.",
    readTime: "5 min read",
    img: "/assets/knowledge_featured_2.jpg",
    href: "/articles",
  },
  {
    id: "understanding-anxiety-2",
    type: "Article",
    title: "Understanding Anxiety",
    desc: "What anxiety is, why it happens, and evidence-based ways to manage it.",
    readTime: "7 min read",
    img: "/assets/knowledge_featured_3.jpg",
    href: "/articles",
  },
];

export default function KnowledgeCentreFeatured() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured</h2>

        <div className={styles.grid}>
          {featuredItems.map((item, idx) => (
            <Link key={idx} href={item.href} className={styles.card}>
              <div className={styles.imgWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={item.title}
                  className={styles.img}
                  onError={(e) => {
                    (e.target as HTMLElement).style.opacity = "0";
                  }}
                />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.tag}>{item.type}</span>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.desc}>{item.desc}</p>
                <div className={styles.footer}>
                  <span className={styles.readTime}>{item.readTime}</span>
                  <span className={styles.arrow}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
