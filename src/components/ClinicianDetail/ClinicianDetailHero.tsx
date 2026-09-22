import { Clinician } from "@/lib/clinicians";
import styles from "./ClinicianDetailHero.module.css";

interface ClinicianDetailHeroProps {
  clinician: Clinician;
}

export default function ClinicianDetailHero({ clinician }: ClinicianDetailHeroProps) {
  const isRci = Boolean(
    clinician.isRciLicensed ||
    clinician.rci_licensed ||
    clinician.license?.toLowerCase().includes("rci") ||
    clinician.tagline?.toLowerCase().includes("rci") ||
    clinician.role?.toLowerCase().includes("rci") ||
    clinician.desc?.toLowerCase().includes("rci") ||
    clinician.aboutParagraphs?.some((p) => p.toLowerCase().includes("rci"))
  );

  return (
    <section className={styles.heroSection} id="clinician-hero">
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          {/* Clinician Photo Container */}
          <div className={styles.imageContainer}>
            <div className={styles.imageWrap}>
              <img
                src={clinician.img || "/broken-image.jpg"}
                alt={clinician.name}
                className={styles.image}
              />
            </div>

            {isRci && (
              <div
                className={styles.rciBadge}
                title="RCI Licensed Practitioner"
                aria-label="RCI Licensed Practitioner"
              >
                <img
                  src="/assets/rci_license_logo.png"
                  alt="RCI Licensed"
                  className={styles.rciBadgeImg}
                />
              </div>
            )}
          </div>

          {/* Right Info Column */}
          <div className={styles.content}>
            <span className={styles.eyebrow}>{clinician.eyebrow || clinician.role}</span>
            <h1 className={styles.name}>{clinician.name}</h1>
            <p className={styles.tagline}>{clinician.tagline || clinician.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
