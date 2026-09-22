import styles from "./OnlineConsultationWhyChoose.module.css";

const reasons = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    title: "Qualified Professionals",
    description: "Experienced psychologists and allied professionals"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
      </svg>
    ),
    title: "Personalised Care",
    description: "Resources selected around your unique needs"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44L2.04 14.5a2.5 2.5 0 0 1 2.46-3.06H7V4.5A2.5 2.5 0 0 1 9.5 2z"></path>
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44l4.99-5.44a2.5 2.5 0 0 0-2.46-3.06H17V4.5A2.5 2.5 0 0 0 14.5 2z"></path>
      </svg>
    ),
    title: "Science-guided",
    description: "Rooted in psychological science and effective neuroscience"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
    title: "Confidential & Secure",
    description: "Your privacy and data are protected"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
    title: "Flexible & Accessible",
    description: "Care from the comfort of your chosen space"
  }
];

export default function OnlineConsultationWhyChoose() {
  return (
    <section className={styles.section} id="why-choose">
      <div className={styles.container}>
        <h2 className={styles.title}>Why Choose Softmind Online Care?</h2>

        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.iconWrap}>{reason.icon}</div>
              <h3 className={styles.itemTitle}>{reason.title}</h3>
              <p className={styles.itemDesc}>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
