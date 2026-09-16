import { Metadata } from "next";
import { getAllCentres } from "@/lib/centres";
import CentresHero from "@/components/Centres/CentresHero";
import CentreDetailView from "@/components/Centres/CentreDetailView";
import CliniciansCTA from "@/components/Clinicians/CliniciansCTA";

export const metadata: Metadata = {
  title: "Softmind Wellness Centres | Locations Across Kerala",
  description:
    "Visit any of our peaceful, evidence-based wellness centres in Kochi (Panampilly Nagar & Kakkanad), Trivandrum, and Thrissur. Find the centre nearest to you.",
  openGraph: {
    title: "Softmind Wellness Centres | Locations Across Kerala",
    description:
      "Visit any of our peaceful, evidence-based wellness centres in Kochi (Panampilly Nagar & Kakkanad), Trivandrum, and Thrissur. Find the centre nearest to you.",
    url: "https://www.softmindindia.com/centres",
    type: "website",
    images: [
      {
        url: "https://www.softmindindia.com/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Softmind Wellness Centres | Locations Across Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Softmind Wellness Centres | Locations Across Kerala",
    description:
      "Visit any of our peaceful, evidence-based wellness centres in Kochi (Panampilly Nagar & Kakkanad), Trivandrum, and Thrissur. Find the centre nearest to you.",
    images: ["https://www.softmindindia.com/og/default.jpg"],
  },
  alternates: {
    canonical: "https://www.softmindindia.com/centres",
  },
};

export default function CentresPage() {
  const allCentres = getAllCentres();
  const defaultCentre = allCentres[0];

  return (
    <>
      <CentresHero />
      <CentreDetailView centre={defaultCentre} allCentres={allCentres} />
      <CliniciansCTA />
    </>
  );
}
