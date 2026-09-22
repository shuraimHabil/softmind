"use client";

import { useState } from "react";
import CliniciansHero from "./CliniciansHero";
import CliniciansGrid from "./CliniciansGrid";
import { Clinician } from "@/lib/clinicians";

interface CliniciansViewProps {
  initialClinicians: Clinician[];
}

export default function CliniciansView({ initialClinicians }: CliniciansViewProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <CliniciansHero />
      <CliniciansGrid
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        clinicians={initialClinicians}
      />
    </>
  );
}
