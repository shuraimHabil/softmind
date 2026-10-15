"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

const stats = [
  {
    id: "years",
    primary: "15+ Years",
    label: "",
    sublabel: "Established 2011",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "clinicians",
    primary: "35+ Clinicians",
    label: "",
    sublabel: "Multidisciplinary Expertise",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.3.3 0 1 0 .2.3" />
        <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
        <circle cx="20" cy="10" r="2" />
      </svg>
    ),
  },
  {
    id: "person-led",
    primary: "Person-Led Care",
    label: "",
    sublabel: "Beyond Labels · Individual Understanding",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
        <path d="m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95" />
        <path d="m2 15 6 6" />
        <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91" />
      </svg>
    ),
  },
  {
    id: "integrated-care",
    primary: "Integrated Care Model",
    label: "",
    sublabel: "Psychotherapy · Measurement · Technology",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
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
            Science Guides the Care.<br />
            The Person Remains at<br />
            the Centre.
          </h1>
          <div className={styles.subtitle}>
            <p>
              Explore psychotherapy, counselling, assessments and neuroscience-informed care, with research, expert insights, articles, videos and mental health resources.
            </p>
          </div>
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
              {item.label ? <span className={styles.statLabel}>{item.label}</span> : null}
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
                {[item.primary, item.label].filter(Boolean).join(" ")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
