import Image from "next/image";
import Link from "next/link";
import { Article } from "@/lib/articles";
import { Clinician } from "@/lib/clinicians";
import styles from "./ClinicianDetailBlogs.module.css";

interface ClinicianDetailBlogsProps {
  clinician: Clinician;
  articles: Article[];
  hasMore?: boolean;
}

export default function ClinicianDetailBlogs({
  clinician,
  articles,
  hasMore,
}: ClinicianDetailBlogsProps) {
  const hasQualifications = Boolean(
    clinician.qualifications && clinician.qualifications.length > 0
  );
  const hasArticles = Boolean(articles && articles.length > 0);

  if (!hasQualifications && !hasArticles) return null;

  const moreHref = `/articles?doctor=${encodeURIComponent(clinician.name)}`;

  return (
    <section className={styles.section} id="qualifications-blogs">
      <div className={styles.container}>
        <div className={`${styles.twoColGrid} ${!hasQualifications && hasArticles ? styles.singleCol : ""}`}>
          {/* Left Column: Qualifications */}
          {hasQualifications && (
            <div className={styles.leftCol}>
              <h2 className={styles.columnTitle}>Qualifications / Credentials</h2>

              {clinician.qualifications && clinician.qualifications.length > 0 && (
                <div className={styles.qualificationsList}>
                  {clinician.qualifications.map((qual, idx) => (
                    <div key={idx} className={styles.qualificationItem}>
                      <div className={styles.qualIconWrap}>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c3 3 9 3 12 0v-5" />
                        </svg>
                      </div>
                      <div className={styles.qualTextWrap}>
                        <span className={styles.qualTitle}>{qual}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Right Column: Research, Writing & Ideas / Blogs */}
          {hasArticles && (
            <div className={styles.rightCol}>
              <div className={styles.headerRow}>
                <h2 className={styles.columnTitle}>Research, Writing &amp; Ideas</h2>
                <Link href={moreHref} className={styles.viewAllLink}>
                  View all &rarr;
                </Link>
              </div>

              <div className={styles.blogsList}>
                {articles.map((art) => (
                  <Link
                    key={art.slug}
                    href={`/articles/${art.slug}`}
                    className={styles.blogCard}
                  >
                    <div className={styles.imgWrap}>
                      <Image
                        src={art.img || "/assets/anxiety_hero.jpg"}
                        alt={art.title}
                        fill
                        className={styles.img}
                        sizes="(max-width: 768px) 100vw, 20vw"
                      />
                    </div>

                    <div className={styles.cardContent}>
                      <div className={styles.metaRow}>
                        <span className={styles.category}>{art.category}</span>
                        {art.readTime && (
                          <span className={styles.readTime}>{art.readTime}</span>
                        )}
                      </div>

                      <h3 className={styles.cardTitle}>{art.title}</h3>

                      {art.excerpt && (
                        <p className={styles.cardExcerpt}>{art.excerpt}</p>
                      )}

                      <span className={styles.readArticleLink}>
                        Read Article &rarr;
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {hasMore && (
                <div className={styles.footerRow}>
                  <Link href={moreHref} className={styles.readMoreBtn}>
                    Read more blogs
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
