import Link from "next/link";
import styles from "./OnlineConsultationSpecialties.module.css";

const specialties = [
  {
    title: "Anxiety & Panic Attacks",
    desc: "Gain effective coping tools for generalized anxiety, panic episodes, social anxiety, and phobias.",
    category: "Emotional Wellbeing"
  },
  {
    title: "Depression & Low Mood",
    desc: "Evidence-based therapeutic support to process sadness, overcome lethargy, and rebuild emotional energy.",
    category: "Emotional Wellbeing"
  },
  {
    title: "Relationship & Marital Therapy",
    desc: "Online couples counselling focused on communication breakdown, trust restoration, and intimacy.",
    category: "Relationship & Family"
  },
  {
    title: "Stress & Workplace Burnout",
    desc: "Structured strategies to manage chronic occupational stress, executive burnout, and work-life balance.",
    category: "Personal & Life Challenges"
  },
  {
    title: "Child & Adolescent Mental Health",
    desc: "Specialized online therapy for academic stress, behavioural concerns, screen addiction, and emotional regulation.",
    category: "Children & Adolescents"
  },
  {
    title: "Psychiatric Consultation",
    desc: "Medical psychiatric evaluations, diagnosis, and prescription management for clinical mental health conditions.",
    category: "Psychiatry"
  }
];

export default function OnlineConsultationSpecialties() {
  return (
    <section className={styles.section} id="specialties">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Conditions We Treat Online</span>
          <h2 className={styles.title}>Comprehensive Tele-Mental Health Services</h2>
          <p className={styles.subtitle}>
            Our experienced specialists provide evidence-backed online care for a wide range of psychological concerns.
          </p>
        </div>

        <div className={styles.grid}>
          {specialties.map((item, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.categoryBadge}>{item.category}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
              <Link href="/clinicians" className={styles.cardLink}>
                Find Specialists →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
