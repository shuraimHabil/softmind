import Link from "next/link";
import { TherapeuticApproach } from "@/lib/clinicians";
import styles from "./ClinicianDetailTherapeuticApproaches.module.css";

interface ClinicianDetailTherapeuticApproachesProps {
  approaches?: TherapeuticApproach[];
}

function parseLines(desc: string): string[] {
  if (!desc) return [];
  if (desc.includes("\n")) {
    return desc.split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
  }
  if (desc.includes(",")) {
    return desc.split(",").map((s) => s.trim()).filter(Boolean);
  }
  return [desc];
}

export default function ClinicianDetailTherapeuticApproaches({
  approaches,
}: ClinicianDetailTherapeuticApproachesProps) {
  if (!approaches || approaches.length === 0) return null;

  return (
    <section className={styles.section} id="therapeutic-approaches">
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <h2 className={styles.title}>Therapeutic Approaches</h2>
          <Link href="/our-care" className={styles.exploreLink}>
            Explore our approach &rarr;
          </Link>
        </div>

        <div className={styles.grid}>
          {approaches.map((item, idx) => {
            const lines = parseLines(item.description);
            return (
              <div key={idx} className={styles.card}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <div className={styles.linesList}>
                  {lines.map((line, lIdx) => (
                    <p key={lIdx} className={styles.lineItem}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <p className={styles.footerNote}>
          Approaches are selected according to individual needs, therapeutic goals, available evidence and professional judgement.
        </p>
      </div>
    </section>
  );
}
