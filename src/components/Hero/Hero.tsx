"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

const stats = [
  {
    id: "years",
    primary: "15+",
    label: "Years",
    sublabel: "ESTABLISHED 2011",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "clinicians",
    primary: "35+",
    label: "Clinicians",
    sublabel: "PROFESSIONAL TEAM",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.3.3 0 1 0 .2.3" />
        <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
        <circle cx="20" cy="10" r="2" />
      </svg>
    ),
  },
  {
    id: "rci",
    primary: "RCI",
    label: "Registered",
    sublabel: "STATE-OF-THE-ART FACILITIES",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "research",
    primary: "Research &",
    label: "Innovation Centered",
    sublabel: "SCIENCE IN PRACTICE",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18h8" />
        <path d="M3 22h18" />
        <path d="M14 22a7 7 0 1 0-14 0" />
        <path d="M9 14h2" />
        <path d="M9 12a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2" />
        <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className={styles.hero} id="heroSection">
      <div className={styles.bgImageDesktop}>
        <Image
          src="/assets/hand1.webp"
          alt="Therapist and client in a calm Softmind session"
          fill
          priority
          unoptimized
          className={styles.bgImg}
          sizes="100vw"
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <div className={styles.bgImageTablet}>
        <Image
          src="/assets/soft_hero_02.webp"
          alt="Therapist and client in a calm Softmind session"
          fill
          priority
          unoptimized
          className={styles.bgImg}
          sizes="100vw"
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <div className={styles.bgImageMobile}>
        <Image
          src="/assets/hero_mobile.webp"
          alt="Therapist and client in a calm Softmind session"
          fill
          priority
          unoptimized
          className={styles.bgImg}
          sizes="100vw"
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <div className={styles.contentWrap}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Science Guide the Care.<br />
            The Person Remains at<br />
            the Centre.
          </h1>
          <p className={styles.subtitle}>
            Expert articles, guided videos, and self-assessment tools — all in one place.<br />
            Explore evidence based psychological and psychiatric resources curated by our<br />
            licensed experts.
          </p>
        </div>
      </div>

      {/* Desktop & Tablet Banner */}
      <div className={styles.statsBanner}>
        {stats.map((item, idx) => (
          <div key={item.id} className={`${styles.statItem} ${idx < stats.length - 1 ? styles.hasDivider : ""}`}>
            <div className={styles.iconWrap}>
              {item.icon}
            </div>
            <div className={styles.statTextWrap}>
              <span className={styles.statPrimary}>{item.primary}</span>
              <span className={styles.statLabel}>{item.label}</span>
              <span className={styles.statSublabel}>{item.sublabel}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Continuous Tagline Ticker (Mobile View Only) */}
      <div className={styles.marqueeWrapper} aria-label="Highlights">
        <div className={styles.marqueeTrack}>
          {[...stats, ...stats, ...stats, ...stats].map((item, idx) => (
            <div key={`m-${item.id}-${idx}`} className={styles.marqueeItem}>
              <div className={styles.marqueeIconWrap}>
                {item.icon}
              </div>
              <span className={styles.marqueeText}>
                {item.primary} {item.label}
              </span>
              <span className={styles.marqueeDivider} aria-hidden="true">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
