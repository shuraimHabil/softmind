import Link from "next/link";
import styles from "./KnowledgeCentreFeatured.module.css";

interface Report {
  title: string;
  pdf_attach: string | null;
  date: string | null;
  creation: string;
  modified: string;
}

export default async function KnowledgeCentreFeatured() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://devsoftminderp.m.frappe.cloud";
  let reports: Report[] = [];

  try {
    const res = await fetch(`${baseUrl}/api/method/softmind_custom.cms_api.knowledge_center_api.get_knowledge_center`, {
      next: { revalidate: 60 }
    });
    
    if (res.ok) {
      const json = await res.json();
      if (json.message?.success && Array.isArray(json.message.data)) {
        reports = json.message.data;
      }
    } else {
      console.error("Failed to fetch reports:", res.statusText);
    }
  } catch (err) {
    console.error("Failed to fetch knowledge center reports", err);
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured Research</h2>

        {reports.length === 0 ? (
          <p className="text-sm text-gray-500">No reports found.</p>
        ) : (
          <div className={styles.grid}>
            {reports.map((item, idx) => {
              const href = item.pdf_attach 
                ? (item.pdf_attach.startsWith('/') ? `${baseUrl}${item.pdf_attach}` : item.pdf_attach)
                : "#";

              return (
                <a key={idx} href={href} target={item.pdf_attach ? "_blank" : "_self"} rel="noreferrer" className={styles.card}>
                  <div className={styles.imgWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/assets/knowledge_featured_${(idx % 3) + 1}.jpg`}
                      alt={item.title}
                      className={styles.img}
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <span className={styles.tag}>Research Report</span>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.desc}>{item.date ? `Published on ${item.date}` : "Weekly Research Report"}</p>
                    <div className={styles.footer}>
                      <span className={styles.readTime}>View Document</span>
                      <span className={styles.arrow}>→</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
