"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./PerspectivesDetail.module.css";

interface PerspectiveAPIItem {
  name: string;
  title: string;
  content: string;
  creation: string;
}



interface PerspectivesDetailProps {
  perspectives?: PerspectiveAPIItem[];
  isSinglePage?: boolean;
}

export default function PerspectivesDetail({ perspectives = [], isSinglePage = false }: PerspectivesDetailProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* ── Hero Section ── */}
        <section className={styles.heroSection}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.categoryTag}>PERSPECTIVES</span>
              {isSinglePage && perspectives.length === 1 ? (
                <>
                  <h1 className={styles.heroTitle}>{perspectives[0].title}</h1>
                  <h2 className={styles.heroSubtitle}>
                    An editorial reflection by Softmind
                  </h2>
                  <p className={styles.heroExcerpt}>
                    Exploring insights and thoughts informed by psychological science, affective neuroscience and a commitment to human understanding.
                  </p>
                </>
              ) : (
                <>
                  <h1 className={styles.heroTitle}>Our Perspective</h1>
                  <h2 className={styles.heroSubtitle}>
                    Understanding the Person, Not Merely the Problem
                  </h2>
                  <p className={styles.heroExcerpt}>
                    An editorial reflection on the philosophy that guides Softmind — informed
                    by psychological science, affective neuroscience and a commitment to human
                    understanding.
                  </p>
                </>
              )}
              <div className={styles.heroMeta}>
                <span>By Softmind Editorial Team</span>
                <span className={styles.metaDot}>|</span>
                <span>October 2026</span>
                <span className={styles.metaDot}>|</span>
                <span>8 min read</span>
              </div>
            </div>

            <div className={styles.heroImageWrap}>
              <Image
                src="/assets/perspectives/hero_chair.jpg"
                alt="Therapy space with armchair and warm sunlight"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 45vw"
                className={styles.heroImage}
              />
            </div>
          </div>
        </section>

        {/* ── Main Two-Column Layout ── */}
        <div className={styles.mainLayout}>
          {/* ── Left Column: Article Body ── */}
          <article className={styles.articleBody}>
            {perspectives.length === 0 ? (
              <div style={{ padding: '80px 0', textAlign: 'center', color: '#64748b' }}>
                No perspectives found.
              </div>
            ) : (
              perspectives.map((item, idx) => {
                const sectionId = item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                return (
                  <section key={item.name || idx} id={sectionId} className={styles.sectionBlock}>
                    {!isSinglePage && <h2 className={styles.sectionHeading}>{item.title}</h2>}
                    <div 
                      className={`${styles.dynamicContent} ${!isSinglePage ? styles.lineClamp : ''}`}
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                    {!isSinglePage && (
                      <Link href={`/perspectives/${item.name}`} className={styles.readMoreLink}>
                        Read more &rarr;
                      </Link>
                    )}
                  </section>
                );
              })
            )}

            {/* Article Footer & Share Bar */}
            <footer className={styles.articleFooter}>
              <div className={styles.footerAuthorInfo}>
                <span className={styles.footerAuthorName}>By Softmind Editorial Team</span>
                <span className={styles.footerMeta}>
                  October 2026 &nbsp;|&nbsp; 8 min read &nbsp;|&nbsp; Last updated: October 2026
                </span>
              </div>

              <div className={styles.shareSection}>
                <span className={styles.shareLabel}>Share this article</span>
                <div className={styles.shareButtons}>
                  {/* Copy Link */}
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className={styles.shareBtn}
                    aria-label="Copy link"
                    title="Copy link"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  </button>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.softmindindia.com%2Fperspectives"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.shareBtn}
                    aria-label="Share on LinkedIn"
                    title="Share on LinkedIn"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.05 1.53 1.53 0 0 0 0 3.05m1.37 9.74v-8.37H5.09v8.37h2.74z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.softmindindia.com%2Fperspectives"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.shareBtn}
                    aria-label="Share on Facebook"
                    title="Share on Facebook"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>

                  {/* X / Twitter */}
                  <a
                    href="https://twitter.com/intent/tweet?text=Our%20Perspective%20-%20Softmind%20Wellness&url=https%3A%2F%2Fwww.softmindindia.com%2Fperspectives"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.shareBtn}
                    aria-label="Share on X"
                    title="Share on X"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:?subject=Our%20Perspective%20%7C%20Softmind&body=Read%20this%20thoughtful%20perspective%20from%20Softmind%20Wellness%3A%20https%3A%2F%2Fwww.softmindindia.com%2Fperspectives"
                    className={styles.shareBtn}
                    aria-label="Share via Email"
                    title="Share via Email"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </a>
                </div>

                {copied && <span className={styles.copyToast}>Link copied to clipboard!</span>}
              </div>
            </footer>
          </article>
        </div>
      </div>

      {/* ── Full-Width Editorial Statement Banner ── */}
      <section className={styles.editorialBannerSection}>
        <div className={styles.container}>
          <div className={styles.bannerGrid}>
            <div className={styles.bannerStatement}>
              <p>Science guides the care.</p>
              <p>Technology supports it.</p>
              <p>The person remains at the centre.</p>
            </div>

            <div className={styles.bannerMetaCol}>
              <span className={styles.bannerTag}>SOFTMIND PERSPECTIVES</span>
              <p className={styles.bannerOrgText}>
                An institutional editorial statement<br />
                by Softmind Wellness Pvt. Ltd.<br />
                Kerala, India.
              </p>
              <p className={styles.bannerItalicTagline}>
                Beyond labels. Towards understanding.
              </p>
            </div>

            <div className={styles.bannerIllustrationCol}>
              <div className={styles.bannerBotanicalWrap}>
                <Image
                  src="/assets/perspectives/botanical.jpg"
                  alt="Botanical illustration"
                  fill
                  sizes="190px"
                  className={styles.botanicalImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
