"use client";

import styles from "./CentresHero.module.css";

export default function CentresHero() {
  return (
    <section className={styles.hero}>
      {/* Full-bleed background image from Figma */}
      <div className={styles.bgWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/centres_hero_clean.webp"
          alt="Softmind Centres"
          className={styles.bgImg}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/assets/centres_hero_bg.jpg";
          }}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Visit us in person, whenever you&apos;re ready.
          </h1>
          <p className={styles.subtitle}>
            Every Softmind centre is built around the same principle as our Knowledge Centre — calm, unhurried, and never clinical in the cold sense of the word. Choose a location to see facilities, clinicians and hours.
          </p>
        </div>
      </div>
    </section>
  );
}
