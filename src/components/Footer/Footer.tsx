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
              href="https://www.facebook.com/softmindkerala"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={styles.social}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-.821.3-.821.889v1.944h2.745l-.361 2.767H13.255V20h-3.36v-6.4H7.5V10.833h2.395V8.539C9.895 6.166 11.344 5 13.461 5c1.014 0 1.886.076 2.14.11V7.5z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/softmindindia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={styles.social}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@softmind6128"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube" 
              className={styles.social}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/softmindkerala"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={styles.social}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
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
              { label: "The Softmind Approach", href: "/approach" },
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
              { label: "Find a Centre", href: "/centres/softmind-panampilly-nagar-kochi" },
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p className={styles.copyright}>
              © {year} Softmind Wellness Pvt. Ltd. All rights reserved. &nbsp;|&nbsp;{" "}
              <Link href="/terms">Terms & Conditions</Link> &nbsp;|&nbsp;{" "}
              <Link href="/privacy-policy">Privacy Policy</Link> &nbsp;|&nbsp;{" "}
              <Link href="/disclaimer">Disclaimer</Link>
            </p>
            <p className={styles.crisis}>
              Powered by <a href="https://finlytyx.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Finlytyx AI Labs</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
