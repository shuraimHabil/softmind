import styles from "./Practitioners.module.css";
import { fetchClinicians } from "@/lib/clinicians";
import PractitionersSlider from "./PractitionersSlider";

export default async function Practitioners() {
  const allClinicians = await fetchClinicians();

  return (
    <section className={styles.section} id="practitioners-section">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <h2 className={styles.title}>Our Expert Practitioners</h2>
            <p className={styles.subtitle}>
              Meet our team of licensed psychiatrists, clinical psychologists, and counseling specialists dedicated to your growth.
            </p>
          </div>
        </div>

        <PractitionersSlider clinicians={allClinicians} />
      </div>
    </section>
  );
}
