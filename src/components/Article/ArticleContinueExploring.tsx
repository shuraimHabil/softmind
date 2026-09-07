import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/articles";
import styles from "./ArticleContinueExploring.module.css";

export default function ArticleContinueExploring({ current }: { current: string }) {
  // Get 5 exploring items (matching the 5 cards in the screenshot)
  const otherArticles = articles.filter((a) => a.slug !== current);
  const items = otherArticles.length >= 5
    ? otherArticles.slice(0, 5)
    : [...otherArticles, ...articles].slice(0, 5);

  return (
    <section className={styles.section} id="continue-exploring">
      <div className={styles.container}>
        <h2 className={styles.heading}>Continue Exploring</h2>
        <div className={styles.grid}>
          {items.map((a, idx) => (
            <Link
              key={`${a.slug}-${idx}`}
              href={`/articles/${a.slug}`}
              className={styles.card}
            >
              <div className={styles.imgWrap}>
                <Image
                  src={a.img}
                  alt={a.title}
                  fill
                  className={styles.img}
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>
              <div className={styles.info}>
                <p className={styles.title}>{a.title}</p>
                <span className={styles.date}>{a.reviewedDate}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
