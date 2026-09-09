import Image from "next/image";
import styles from "./Hero.module.css";

const tags = [
  { icon: "✦", label: "15+ Years" },
  { icon: "✦", label: "35+ Clinicians" },
  { icon: "✦", label: "RCI Registered" },
  { icon: "✦", label: "Research & Innovation" },
  { icon: "✦", label: "Science in Practice" },
  { icon: "✦", label: "Established 2011" },
  { icon: "✦", label: "Professional Team" },
  { icon: "✦", label: "State-of-the-Art Facilities" },
];

export default function Hero() {
  return (
    <>
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
      </section>

      {/* Infinite scrolling marquee ticker - sits exactly at the end of the hero */}
      <div className={styles.marqueeWrapper} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {/* Render twice for seamless loop */}
          {[...tags, ...tags].map((tag, idx) => (
            <span key={idx} className={styles.marqueeTag}>
              <span className={styles.marqueeDot}>{tag.icon}</span>
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
