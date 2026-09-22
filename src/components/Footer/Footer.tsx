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
                alt="Softmind Wellness"
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
            Evidence-based psychological and psychiatric care in Kerala, in person and online.
          </p>

          <div className={styles.socials}>
            <a
              href="https://facebook.com/softmindindia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={styles.social}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/softmindindia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={styles.social}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/softmindkerala"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={styles.social}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Link Columns */}
        {[
          {
            heading: "OUR CARE",
            links: [
              { label: "All Care Services", href: "/our-care" },
              { label: "Psychological Counselling", href: "/our-care/psychological-counselling" },
              { label: "Couple & Relationship", href: "/our-care/relationship-counselling" },
              { label: "Child & Adolescent", href: "/our-care/child-adolescent-counselling" },
              { label: "Clinical Psychology", href: "/our-care/clinical-psychology" },
              { label: "Psychiatry", href: "/our-care/psychiatry" },
            ],
          },
          {
            heading: "CONDITIONS",
            links: [
              { label: "Conditions Hub", href: "/conditions" },
              { label: "Anxiety & Stress", href: "/conditions/anxiety" },
              { label: "Depression", href: "/conditions/depression" },
              { label: "OCD", href: "/conditions/ocd" },
              { label: "PTSD & Trauma", href: "/conditions/ptsd" },
              { label: "ADHD", href: "/conditions/adhd" },
            ],
          },
          {
            heading: "CENTRES",
            links: [
              { label: "Find a Centre", href: "/centres" },
            ],
          },
          {
            heading: "ORGANISATION",
            links: [
              { label: "About Softmind", href: "/about" },
              { label: "Clinical Standards", href: "/about/clinical-standards" },
              { label: "Meet Clinicians", href: "/clinicians" },
              { label: "Professional Learning", href: "/professional-learning" },
              { label: "Articles & Knowledge", href: "/articles" },
              { label: "Careers", href: "/careers" },
              { label: "FAQ & Contact", href: "/faq" },
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
            © {year} Softmind Wellness Pvt. Ltd. All rights reserved. &nbsp;|&nbsp;{" "}
            <Link href="/terms">Terms & Conditions</Link> &nbsp;|&nbsp;{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>
          </p>
          <p className={styles.crisis}>
            If you are in crisis or thinking about suicide, call Tele-MANAS on <strong>14416</strong> (free, 24 hours) or go to your nearest emergency department.
          </p>
        </div>
      </div>
    </footer>
  );
}
