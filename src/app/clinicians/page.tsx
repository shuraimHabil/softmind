import type { Metadata } from "next";
import CliniciansView from "@/components/Clinicians/CliniciansView";
import CliniciansCTA from "@/components/Clinicians/CliniciansCTA";

export const metadata: Metadata = {
  title: "Our Clinicians | Softmind – Experienced Mental Health Professionals",
  description:
    "Meet our team of 35+ clinical psychologists, psychotherapists, psychiatrists and developmental specialists — each selected for both clinical rigour and the ability to listen well.",
  keywords: ["clinicians", "psychologists", "psychiatrists", "therapists", "mental health", "Softmind", "Kerala"],
};

export default function CliniciansPage() {
  return (
    <>
      <CliniciansView />
      <CliniciansCTA />
    </>
  );
}
