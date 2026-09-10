import type { Metadata } from "next";
import KnowledgeCentreHero from "@/components/KnowledgeCentre/KnowledgeCentreHero";
import KnowledgeCentreFeatured from "@/components/KnowledgeCentre/KnowledgeCentreFeatured";
import KnowledgeCentreCollections from "@/components/KnowledgeCentre/KnowledgeCentreCollections";
import CliniciansCTA from "@/components/Clinicians/CliniciansCTA";

export const metadata: Metadata = {
  title: "Knowledge Centre | Softmind – Psychological Science & Insights",
  description:
    "Clear, reliable, and accessible content on psychological science, human behaviour, relationships, and everyday experience.",
  keywords: [
    "knowledge centre",
    "psychology",
    "mental health articles",
    "psychological science",
    "wellness guides",
    "therapy FAQ",
  ],
};

export default function KnowledgeCentrePage() {
  return (
    <main>
      <KnowledgeCentreHero />
      <KnowledgeCentreFeatured />
      <KnowledgeCentreCollections />
      <CliniciansCTA />
    </main>
  );
}
