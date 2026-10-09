import Link from "next/link";
import styles from "./CliniciansCTA.module.css";

export default function CliniciansCTA() {
  return (
    <section className={styles.section} id="clinicians-cta">
      <div className={styles.container}>
        <h2 className={styles.title}>
          When You&apos;re Ready, <span className={styles.highlightText}>We&apos;re Here.</span>
        </h2>

        {/* 3-Column Features Card */}
        <div className={styles.featuresCard}>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>Confidential</h3>
              <p className={styles.featureSubtitle}>Your privacy matters</p>
            </div>
          </div>

          <div className={styles.cardDivider} aria-hidden="true" />

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>Judgement-free</h3>
              <p className={styles.featureSubtitle}>A safe, supportive space</p>
            </div>
          </div>

          <div className={styles.cardDivider} aria-hidden="true" />

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M18 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>Compassionate Team</h3>
              <p className={styles.featureSubtitle}>Here for you always</p>
            </div>
          </div>
        </div>

        <p className={styles.subtitle}>
          we believe that understanding is the first step toward healing. With compassionate care and evidence-based approaches, we&apos;re here to help you move forward, one step at a time
        </p>

        <div className={styles.actions}>
          <Link href="tel:+918089005676" className={styles.btnCall} id="clinicians-cta-call">
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
            </svg>
            Call Us →
          </Link>

          <Link href="https://wa.me/919496864960" className={styles.btnWhatsapp} id="clinicians-cta-whatsapp">
            <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c.965.527 1.83.805 2.806.805h.005c3.178 0 5.767-2.587 5.768-5.766.001-3.18-2.586-5.788-5.773-5.788zm3.376 8.163c-.144.405-.837.774-1.17.824-.312.045-.694.067-1.121-.07-.26-.084-.593-.198-1.026-.385-1.834-.793-3.033-2.656-3.125-2.778-.092-.122-.741-.987-.741-1.884 0-.897.469-1.339.636-1.522.167-.183.366-.229.488-.229.122 0 .245.001.352.006.113.005.264-.043.413.315.153.366.52 1.272.566 1.364.046.091.077.198.016.32-.061.122-.092.198-.183.305-.091.107-.193.239-.275.321-.092.092-.188.192-.081.376.107.184.477.788 1.023 1.274.704.628 1.298.822 1.482.914.183.091.29-.076.397-.198.107-.122.458-.534.58-.717.122-.183.244-.153.412-.091.168.061 1.069.504 1.252.595.183.092.305.137.351.214.046.076.046.443-.098.848z"/>
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.662 1.438 5.179L2 22l4.981-1.307A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.603 0-3.1-.476-4.356-1.297l-.312-.205-2.955.775.789-2.88-.225-.357A8.136 8.136 0 013.833 12c0-4.503 3.664-8.167 8.167-8.167 4.503 0 8.167 3.664 8.167 8.167 0 4.503-3.664 8.167-8.167 8.167z"/>
            </svg>
            WhatsApp →
          </Link>
        </div>
      </div>
    </section>
  );
}
