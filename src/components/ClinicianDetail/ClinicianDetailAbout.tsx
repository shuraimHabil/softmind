import Link from "next/link";
import { Clinician } from "@/lib/clinicians";
import styles from "./ClinicianDetailAbout.module.css";

interface ClinicianDetailAboutProps {
  clinician: Clinician;
}

export default function ClinicianDetailAbout({ clinician }: ClinicianDetailAboutProps) {
  return (
    <section className={styles.aboutSection} id="clinician-about">
      <div className={styles.container}>
        <div className={styles.aboutGrid}>
          {/* Main About Card */}
          <div className={styles.aboutCard}>
            <h2 className={styles.aboutTitle}>About {clinician.name}</h2>
            <div className={styles.paragraphs}>
              {clinician.aboutParagraphs.map((p, idx) => (
                <p key={idx} className={styles.paragraph}>
                  {p}
                </p>
              ))}
            </div>

            {/* Bottom Row: Social Icons + Portfolio Button */}
            <div className={styles.cardFooter}>
              <div className={styles.socialIcons}>
                <a
                  href={clinician.socialLinks?.instagram || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href={clinician.socialLinks?.youtube || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label="YouTube"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </a>
                <a
                  href={clinician.socialLinks?.facebook || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href={clinician.socialLinks?.twitter || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label="Twitter / X"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </a>
              </div>

              {clinician.portfolioUrl && (
                <Link href={clinician.portfolioUrl} className={styles.portfolioBtn}>
                  Personal Portfolio →
                </Link>
              )}
            </div>
          </div>

          {/* Side Stacked Cards */}
          <div className={styles.sideCol}>
            {/* Languages Card */}
            <div className={styles.sideCard}>
              <h3 className={styles.sideTitle}>Languages</h3>
              <ul className={styles.languageList}>
                {clinician.languages.map((lang, idx) => (
                  <li key={idx} className={styles.languageItem}>
                    {lang}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote Card */}
            <div className={styles.sideCard}>
              <span className={styles.quoteIcon}>“</span>
              <p className={styles.quoteText}>{clinician.quote}</p>
              <span className={styles.quoteAuthor}>{clinician.quoteAuthor}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
