import { Metadata } from "next";
import { getAllCentres } from "@/lib/centres";
import CentresHero from "@/components/Centres/CentresHero";
import CentreDetailView from "@/components/Centres/CentreDetailView";
import CliniciansCTA from "@/components/Clinicians/CliniciansCTA";

export const metadata: Metadata = {
  title: "Softmind Wellness Centres | Locations Across Kerala",
  description:
    "Visit any of our peaceful, evidence-based wellness centres in Kochi, Kakkanad, Trivandrum, and Thrissur.",
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
