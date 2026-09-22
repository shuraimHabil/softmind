import Image from "next/image";
import Link from "next/link";
import styles from "./Practitioners.module.css";
import { fetchClinicians } from "@/lib/clinicians";

export default async function Practitioners() {
  const allClinicians = await fetchClinicians();
  // Show only the first 4 on the homepage
  const practitioners = allClinicians.slice(0, 4);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Expert Practitioners</h2>
          <p className={styles.subtitle}>Meet our team of licensed psychiatrists, clinical psychologists, and counseling specialists dedicated to your growth.</p>
        </div>
        <div className={styles.grid}>
          {practitioners.map((p, idx) => (
            <div key={p.id || idx} className={styles.card}>
              <div className={styles.imgWrap}>
                <Image src={p.img || "/assets/practitioner_1.jpg"} alt={p.name} fill className={styles.img} sizes="25vw" />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{p.name}</h3>
                <span className={styles.role}>{p.role}</span>
                <p className={styles.desc}>{p.desc}</p>
                <Link href={`/clinicians/${p.slug}`} className={styles.link}>View Profile</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
