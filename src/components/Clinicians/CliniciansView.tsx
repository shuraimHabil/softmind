"use client";

import { useState } from "react";
import CliniciansHero from "./CliniciansHero";
import CliniciansGrid from "./CliniciansGrid";

export default function CliniciansView() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <CliniciansHero />
      <CliniciansGrid
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </>
  );
}
