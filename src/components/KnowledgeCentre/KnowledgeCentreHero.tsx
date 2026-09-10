"use client";

import styles from "./KnowledgeCentreHero.module.css";

const pillars = [
  {
    title: "Psychological\nScience",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a6 6 0 0 0-6 6c0 1.8.8 3.4 2 4.5V15a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.5c1.2-1.1 2-2.7 2-4.5a6 6 0 0 0-6-6z" />
        <path d="M9 19h6" />
        <path d="M12 6v6" />
        <path d="M9.5 8.5l5 3" />
        <path d="M14.5 8.5l-5 3" />
      </svg>
    ),
  },
  {
    title: "Human\nExperience",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="2.5" />
        <path d="M2.5 15v-1a3.5 3.5 0 0 1 7 0v1" />
        <circle cx="18" cy="6" r="2.5" />
        <path d="M14.5 15v-1a3.5 3.5 0 0 1 7 0v1" />
        <path d="M9.5 9h5" />
      </svg>
    ),
  },
  {
    title: "Meaningful\nConnections",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        <path d="M12 12v5" />
        <path d="M12 12c-1.5-1.5-3 0-3 0s0 1.5 1.5 1.5" />
        <path d="M12 13.5c1.5-1.5 3 0 3 0s0 1.5-1.5 1.5" />
      </svg>
    ),
  },
  {
    title: "Trusted\nKnowledge",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export default function KnowledgeCentreHero() {
  return (
    <section className={styles.hero}>
      {/* Full Background Image */}
      <div className={styles.bgWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/Frame 288.webp"
          alt="Knowledge Centre"
          className={styles.bgImg}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/assets/knowledge_hero.webp";
          }}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Knowledge Centre</h1>
          <p className={styles.subtitle}>
            Clear, reliable and accessible content on psychological science, human behaviour, relationships and everyday experience.
          </p>

          {/* 4 Pillars Strip */}
          <div className={styles.pillars}>
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className={`${styles.pillarItem} ${
                  idx < pillars.length - 1 ? styles.pillarDivider : ""
                }`}
              >
                <div className={styles.pillarIcon}>{p.icon}</div>
                <span className={styles.pillarTitle}>{p.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
