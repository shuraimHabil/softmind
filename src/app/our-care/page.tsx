import type { Metadata } from "next";
import OurApproachHero from "@/components/OurApproach/OurApproachHero";
import OurApproachSpecialties from "@/components/OurApproach/OurApproachSpecialties";
import OurApproachPhilosophy from "@/components/OurApproach/OurApproachPhilosophy";
import CliniciansCTA from "@/components/Clinicians/CliniciansCTA";

export const metadata: Metadata = {
  title: "Our Care | Softmind – You Don't Need A Diagnosis To Begin",
  description:
    "Softmind's primary care model starts with understanding your most pressing concerns. We make it simple to find the pathway that's right for you.",
  keywords: ["mental health care", "therapy", "counselling", "care plan", "Softmind", "evidence-based"],
};

export default function OurCarePage() {
  return (
    <>
      <OurApproachHero />
      <OurApproachSpecialties />
      <OurApproachPhilosophy />
      <CliniciansCTA />
    </>
  );
}
