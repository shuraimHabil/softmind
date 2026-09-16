import type { Metadata } from "next";
import CliniciansView from "@/components/Clinicians/CliniciansView";
import CliniciansCTA from "@/components/Clinicians/CliniciansCTA";

export const metadata: Metadata = {
  title: "Our Clinicians | Softmind – Experienced Mental Health Professionals",
  description:
    "Meet our team of 35+ clinical psychologists, psychotherapists, psychiatrists and developmental specialists — each selected for both clinical rigour and the ability to listen well.",
  openGraph: {
    title: "Our Clinicians | Softmind – Experienced Mental Health Professionals",
    description:
      "Meet our team of 35+ clinical psychologists, psychotherapists, psychiatrists and developmental specialists — each selected for both clinical rigour and the ability to listen well.",
    url: "https://www.softmindindia.com/clinicians",
    type: "website",
    images: [
      {
        url: "https://www.softmindindia.com/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Our Clinicians | Softmind – Experienced Mental Health Professionals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Clinicians | Softmind – Experienced Mental Health Professionals",
    description:
      "Meet our team of 35+ clinical psychologists, psychotherapists, psychiatrists and developmental specialists — each selected for both clinical rigour and the ability to listen well.",
    images: ["https://www.softmindindia.com/og/default.jpg"],
  },
  alternates: {
    canonical: "https://www.softmindindia.com/clinicians",
  },
};

export default function CliniciansPage() {
  return (
    <>
      <CliniciansView />
      <CliniciansCTA />
    </>
  );
}
