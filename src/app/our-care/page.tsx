import type { Metadata } from "next";
import OurApproachHero from "@/components/OurApproach/OurApproachHero";
import OurApproachSpecialties from "@/components/OurApproach/OurApproachSpecialties";
import CliniciansCTA from "@/components/Clinicians/CliniciansCTA";

export const metadata: Metadata = {
  title: "Our Care | Softmind – Understanding Your Concerns Is Where Care Begins",
  description:
    "Explore psychological counselling, psychotherapy and assessments tailored to your experiences, needs and everyday life.",
  openGraph: {
    title: "Our Care | Softmind – Understanding Your Concerns Is Where Care Begins",
    description:
      "Explore psychological counselling, psychotherapy and assessments tailored to your experiences, needs and everyday life.",
    url: "https://www.softmindindia.com/our-care",
    type: "website",
    images: [
      {
        url: "https://www.softmindindia.com/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Our Care | Softmind – Understanding Your Concerns Is Where Care Begins",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Care | Softmind – Understanding Your Concerns Is Where Care Begins",
    description:
      "Explore psychological counselling, psychotherapy and assessments tailored to your experiences, needs and everyday life.",
    images: ["https://www.softmindindia.com/og/default.jpg"],
  },
  alternates: {
    canonical: "https://www.softmindindia.com/our-care",
  },
};

export default function OurCarePage() {
  return (
    <>
      <OurApproachHero />
      <OurApproachSpecialties />
      <CliniciansCTA />
    </>
  );
}
