import Image from "next/image";
import Link from "next/link";
import styles from "./Locations.module.css";
import { fetchCentres } from "@/lib/centres";



const features = [
  {
    label: "Accessible\nLocations",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7eb84e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
  },
  {
    label: "Safe &\nConfidential",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7eb84e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
  },
  {
    label: "Compassionate\nCare, Closer to You",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7eb84e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="19" cy="9" r="3"></circle>
        <path d="M23 21v-1a3 3 0 0 0-3-3"></path>
      </svg>
    ),
  },
];

export default async function Locations() {
  const centres = await fetchCentres();

  if (!centres || centres.length === 0) {
    return null;
  }

  return (
    <section className={styles.section} id="centres">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Find a Softmind Centre Near You</h2>
          <p className={styles.subtitle}>Visit us at any of our wellness centres across Kerala.</p>

          {/* Compact 3 Features Strip */}
          <div className={styles.featuresStrip}>
            {features.map((f, index) => (
              <div
                key={index}
                className={`${styles.featureItem} ${
                  index < features.length - 1 ? styles.featureDivider : ""
                }`}
              >
                <div className={styles.featureIcon}>{f.icon}</div>
                <span className={styles.featureLabel}>
                  {f.label.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < f.label.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Location Cards Grid */}
        <div className={styles.grid}>
          {centres.map((loc) => (
            <Link key={loc.id} href={`/centres/${loc.slug}`} className={styles.card}>
              <div className={styles.imgWrap}>
                <Image
                  src={loc.thumbnail || "/invalid-image.jpg"}
                  alt={`${loc.name} centre`}
                  fill
                  className={styles.img}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className={styles.info}>
                <h3 className={styles.cardName}>{loc.name}</h3>
                <p className={styles.cardAddress}>
                  {loc.address.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < loc.address.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </p>
                <p className={styles.cardPhone}>{loc.phone}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
