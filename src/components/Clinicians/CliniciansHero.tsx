"use client";

import Image from "next/image";
import SearchBar from "../ui/SearchBar";
import styles from "./CliniciansHero.module.css";

interface CliniciansHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearchSubmit?: () => void;
}

export default function CliniciansHero({
  searchQuery,
  setSearchQuery,
  onSearchSubmit,
}: CliniciansHeroProps) {
  const handleSubmit = () => {
    if (onSearchSubmit) {
      onSearchSubmit();
    } else {
      const gridEl = document.getElementById("clinicians-grid");
      if (gridEl) {
        gridEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleQuickTag = (tag: string) => {
    setSearchQuery(tag);
    const gridEl = document.getElementById("clinicians-grid");
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero}>
      {/* Background photo */}
      <div className={styles.bgWrap}>
        <Image
          src="/assets/clinicians/hero_clinicians.jpg"
          alt="Clinician session"
          fill
          className={styles.bgImg}
          sizes="100vw"
          priority
        />
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Experienced professionals.<br />
          Human understanding.
        </h1>
        <p className={styles.subtext}>
          35+ clinicians across four centres — clinical psychologists, psychotherapists,
          psychiatrists and developmental specialists — each selected for both clinical
          rigour and the ability to listen well.
        </p>

        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSubmit={handleSubmit}
          placeholder="Search clinicians by name, specialty, or condition..."
          quickTags={["Anxiety", "CBT", "Depression", "ADHD", "Family Therapy"]}
        />
      </div>
    </section>
  );
}
