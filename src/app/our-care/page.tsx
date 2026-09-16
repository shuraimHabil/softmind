import type { Metadata } from "next";
import OurApproachHero from "@/components/OurApproach/OurApproachHero";
import OurApproachSpecialties from "@/components/OurApproach/OurApproachSpecialties";
import OurApproachPhilosophy from "@/components/OurApproach/OurApproachPhilosophy";
import CliniciansCTA from "@/components/Clinicians/CliniciansCTA";

export const metadata: Metadata = {
  title: "Our Care | Softmind – You Don't Need A Diagnosis To Begin",
  description:
    "Softmind's primary care model starts with understanding your most pressing concerns. We make it simple to find the pathway that's right for you.",
  openGraph: {
    title: "Our Care | Softmind – You Don't Need A Diagnosis To Begin",
    description:
      "Softmind's primary care model starts with understanding your most pressing concerns. We make it simple to find the pathway that's right for you.",
    url: "https://www.softmindindia.com/our-care",
    type: "website",
    images: [
      {
        url: "https://www.softmindindia.com/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Our Care | Softmind – You Don't Need A Diagnosis To Begin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Care | Softmind – You Don't Need A Diagnosis To Begin",
    description:
      "Softmind's primary care model starts with understanding your most pressing concerns. We make it simple to find the pathway that's right for you.",
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
      <OurApproachPhilosophy />
      <CliniciansCTA />
    </>
  );
}
