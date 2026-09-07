import Image from "next/image";
import Link from "next/link";
import { ClinicianArticle } from "@/lib/clinicians";
import styles from "./ClinicianDetailBlogs.module.css";

interface ClinicianDetailBlogsProps {
  articles: ClinicianArticle[];
}

export default function ClinicianDetailBlogs({
  articles,
}: ClinicianDetailBlogsProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className={styles.blogsSection} id="clinician-blogs">
      <div className={styles.container}>
        <h2 className={styles.heading}>Blogs</h2>
        <div className={styles.grid}>
          {articles.map((art, idx) => (
            <Link key={idx} href={art.href} className={styles.card}>
              <div className={styles.imgWrap}>
                <Image
                  src={art.img}
                  alt={art.title}
                  fill
                  className={styles.img}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className={styles.metaRow}>
                <span className={styles.category}>{art.category}</span>
                <span className={styles.readTime}>{art.readTime}</span>
              </div>

              <h3 className={styles.cardTitle}>{art.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
