"use client";

import { useState } from "react";
import CliniciansHero from "./CliniciansHero";
import CliniciansGrid from "./CliniciansGrid";

export default function CliniciansView() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = () => {
    const gridEl = document.getElementById("clinicians-grid");
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <CliniciansHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
      />
      <CliniciansGrid
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </>
  );
}
