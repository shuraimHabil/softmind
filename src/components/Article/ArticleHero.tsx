import Image from "next/image";
import type { Article } from "@/lib/articles";
import styles from "./ArticleHero.module.css";

export default function ArticleHero({ article }: { article: Article }) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Left: text */}
        <div className={styles.textSide}>
          <h1 className={styles.title}>{article.title}</h1>
          <p className={styles.excerpt}>{article.excerpt}</p>

          {/* Author */}
          <div className={styles.authorRow}>
            <div className={styles.authorAvatar}>
              {article.authorAvatar ? (
                <Image
                  src={article.authorAvatar}
                  alt={article.author}
                  width={44}
                  height={44}
                  className={styles.authorImg}
                />
              ) : (
                article.author.charAt(0)
              )}
            </div>
            <div className={styles.authorText}>
              <p className={styles.authorName}>{article.author}</p>
              <p className={styles.authorRole}>{article.authorRole}</p>
            </div>
            <div className={styles.metaRow}>
              <span>{article.readTime}</span>
              <span className={styles.dot}>•</span>
              <span>Reviewed {article.reviewedDate}</span>
            </div>
          </div>
        </div>

        {/* Right: hero image */}
        <div className={styles.imgSide}>
          <div className={styles.imgWrap}>
            <Image
              src={article.img}
              alt={article.title}
              fill
              className={styles.img}
              sizes="(max-width: 900px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
