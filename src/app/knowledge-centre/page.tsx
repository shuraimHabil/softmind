import type { Metadata } from "next";
import KnowledgeCentreHero from "@/components/KnowledgeCentre/KnowledgeCentreHero";
import KnowledgeCentreFeatured from "@/components/KnowledgeCentre/KnowledgeCentreFeatured";
import KnowledgeCentreCollections from "@/components/KnowledgeCentre/KnowledgeCentreCollections";
import CliniciansCTA from "@/components/Clinicians/CliniciansCTA";

export const metadata: Metadata = {
  title: "Knowledge Centre | Softmind – Psychological Science & Insights",
  description:
    "Clear, reliable, and accessible content on psychological science, human behaviour, relationships, and everyday experience.",
  openGraph: {
    title: "Knowledge Centre | Softmind – Psychological Science & Insights",
    description:
      "Clear, reliable, and accessible content on psychological science, human behaviour, relationships, and everyday experience.",
    url: "https://www.softmindindia.com/knowledge-centre",
    type: "website",
    images: [
      {
        url: "https://www.softmindindia.com/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Knowledge Centre | Softmind – Psychological Science & Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Knowledge Centre | Softmind – Psychological Science & Insights",
    description:
      "Clear, reliable, and accessible content on psychological science, human behaviour, relationships, and everyday experience.",
    images: ["https://www.softmindindia.com/og/default.jpg"],
  },
  alternates: {
    canonical: "https://www.softmindindia.com/knowledge-centre",
  },
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
