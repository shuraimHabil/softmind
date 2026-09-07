import Image from "next/image";
import Link from "next/link";
import styles from "./Practitioners.module.css";

const practitioners = [
  { name: "Dr. Anand Kumar", role: "Chief Psychiatrist", desc: "Over 15 years of experience in clinical psychiatry and cognitive behavioral mapping.", img: "/assets/practitioner_1.jpg" },
  { name: "Misha Thomas", role: "Clinical Psychologist", desc: "Specializes in anxiety disorders, depression therapy, and stress mitigation protocols.", img: "/assets/practitioner_2.jpg" },
  { name: "Sufi S", role: "Counseling Psychologist", desc: "Dedicated to family therapy, personal growth, and relationship guidance counseling.", img: "/assets/practitioner_3.jpg" },
  { name: "Riya Varghese", role: "Child Psychologist", desc: "Expertise in childhood learning difficulties, play therapy, and teen psychology.", img: "/assets/practitioner_4.jpg" },
];

export default function Practitioners() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Expert Practitioners</h2>
          <p className={styles.subtitle}>Meet our team of licensed psychiatrists, clinical psychologists, and counseling specialists dedicated to your growth.</p>
        </div>
        <div className={styles.grid}>
          {practitioners.map((p) => (
            <div key={p.name} className={styles.card}>
              <div className={styles.imgWrap}>
                <Image src={p.img} alt={p.name} fill className={styles.img} sizes="25vw" />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{p.name}</h3>
                <span className={styles.role}>{p.role}</span>
                <p className={styles.desc}>{p.desc}</p>
                <Link href="#" className={styles.link}>View Profile</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
