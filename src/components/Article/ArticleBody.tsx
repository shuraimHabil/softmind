import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/articles";
import styles from "./ArticleBody.module.css";

export default function ArticleBody({
  article,
}: {
  article: Article;
}) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* ── Main content ── */}
        <div className={styles.main}>
          {/* Article Content */}
          <div 
            className={styles.articleContent}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </div>
    </section>
  );
}
