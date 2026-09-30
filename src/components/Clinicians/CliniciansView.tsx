"use client";

import CliniciansHero from "./CliniciansHero";
import CliniciansGrid from "./CliniciansGrid";
import { Clinician } from "@/lib/clinicians";

interface CliniciansViewProps {
  initialClinicians: Clinician[];
}

export default function CliniciansView({ initialClinicians }: CliniciansViewProps) {
  return (
    <>
      <CliniciansHero />
      <CliniciansGrid clinicians={initialClinicians} />
    </>
  );
}
