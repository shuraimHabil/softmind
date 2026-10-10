import type { Metadata } from "next";
import PerspectivesDetail from "@/components/Perspectives/PerspectivesDetail";
import CliniciansCTA from "@/components/Clinicians/CliniciansCTA";

export const metadata: Metadata = {
  title: "Our Perspective | Softmind – Understanding the Person, Not Merely the Problem",
  description:
    "An editorial reflection on the philosophy that guides Softmind — informed by psychological science, affective neuroscience and a commitment to human understanding.",
  openGraph: {
    title: "Our Perspective | Softmind – Understanding the Person, Not Merely the Problem",
    description:
      "An editorial reflection on the philosophy that guides Softmind — informed by psychological science, affective neuroscience and a commitment to human understanding.",
    url: "https://www.softmindindia.com/perspectives",
    type: "article",
    images: [
      {
        url: "/assets/perspectives/hero_chair.jpg",
        width: 1200,
        height: 630,
        alt: "Our Perspective – Softmind Wellness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Perspective | Softmind – Understanding the Person, Not Merely the Problem",
    description:
      "An editorial reflection on the philosophy that guides Softmind — informed by psychological science, affective neuroscience and a commitment to human understanding.",
    images: ["/assets/perspectives/hero_chair.jpg"],
  },
  alternates: {
    canonical: "https://www.softmindindia.com/perspectives",
  },
};

export default function PerspectivesPage() {
  return (
    <main>
      <PerspectivesDetail />
      <CliniciansCTA />
    </main>
  );
}
