import { ClinicianExpertise } from "@/lib/clinicians";
import styles from "./ClinicianDetailExpertise.module.css";

interface ClinicianDetailExpertiseProps {
  expertise: ClinicianExpertise[];
}

export default function ClinicianDetailExpertise({
  expertise,
}: ClinicianDetailExpertiseProps) {
  if (!expertise || expertise.length === 0) return null;

  return (
    <section className={styles.expertiseSection} id="clinician-expertise">
      <div className={styles.container}>
        <h2 className={styles.heading}>Areas Of Expertise</h2>
        <div className={styles.grid}>
          {expertise.map((item, idx) => (
            <div key={idx} className={styles.item}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
