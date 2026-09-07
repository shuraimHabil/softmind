"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./Footer.module.css";

const year = 2026;

export default function Footer() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand Column */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            {!logoError ? (
              <Image
                src="/assets/Softmind Logo White.png"
                alt="Softmind"
                width={150}
                height={51}
                className={styles.logoImg}
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className={styles.logoText}>soft<span>mind</span></span>
            )}
          </Link>
          <p className={styles.desc}>
            Providing compassionate, evidence-based psychiatric and psychological care resources in environments built entirely around your needs.
          </p>

          <div className={styles.socials}>
            <Link href="#" aria-label="Facebook" className={styles.social}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </Link>
            <Link href="#" aria-label="Twitter" className={styles.social}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </Link>
            <Link href="#" aria-label="Instagram" className={styles.social}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </Link>
            <Link href="#" aria-label="YouTube" className={styles.social}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#131b2e" />
              </svg>
            </Link>
          </div>

          <div className={styles.appDownload}>
            <p className={styles.appTitle}>Get the Softmind app</p>
            <div className={styles.appBadges}>
              <Link href="#" className={styles.appBadge}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186a1.986 1.986 0 01-.61-.92L3 2.734c0-.337.218-.654.609-.92zM15.207 13.414l2.578 2.578-11.83 6.822 9.252-9.4zM15.207 10.586L5.955 1.186 17.785 8.008l-2.578 2.578zM18.89 9.113l2.846 1.643a1.442 1.442 0 010 2.488l-2.846 1.643-2.184-2.184 2.184-2.19z" />
                </svg>
                <span>Google Play</span>
              </Link>
              <Link href="#" className={styles.appBadge}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.64 1.35-.58.66-.99 1.73-.85 2.76 1.01.08 2.05-.51 2.57-1.26z" />
                </svg>
                <span>App Store</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Link Columns */}
        {[
          {
            heading: "KNOWLEDGE",
            links: [
              { label: "All Articles", href: "/articles" },
              { label: "Video Hub", href: "#" },
              { label: "Interactive Check-ins", href: "#" },
              { label: "CBT Resources", href: "#" },
            ],
          },
          {
            heading: "TOPICS",
            links: [
              { label: "Anxiety & Worry", href: "/articles?category=Anxiety%20%26%20Worry" },
              { label: "Depression", href: "/articles?category=Depression" },
              { label: "Relationships", href: "#" },
              { label: "Mindfulness", href: "/articles?category=Mindfulness" },
            ],
          },
          {
            heading: "ABOUT",
            links: [
              { label: "Our Mission", href: "/our-care" },
              { label: "Clinicians", href: "/clinicians" },
              { label: "Clinical Science", href: "#" },
              { label: "Careers", href: "#" },
            ],
          },
          {
            heading: "CONNECT",
            links: [
              { label: "Book Session", href: "#" },
              { label: "Contact Hub", href: "#" },
              { label: "FAQ & Support", href: "#" },
              { label: "Privacy Policy", href: "#" },
            ],
          },
        ].map((col) => (
          <div key={col.heading} className={styles.col}>
            <h4 className={styles.colHeading}>{col.heading}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            © {year} Softmind Healthcare. All rights reserved. &nbsp;|&nbsp;{" "}
            <Link href="#">Terms & Conditions</Link> &nbsp;|&nbsp;{" "}
            <Link href="#">Privacy Policy</Link>
          </p>
          <p className={styles.crisis}>
            If you are experiencing an immediate mental health crisis, please contact your local emergency services.
          </p>
        </div>
      </div>
    </footer>
  );
}
