import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCentres, getCentreBySlug } from "@/lib/centres";
import CentresHero from "@/components/Centres/CentresHero";
import CentreDetailView from "@/components/Centres/CentreDetailView";
import CliniciansCTA from "@/components/Clinicians/CliniciansCTA";

interface CentrePageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const centres = getAllCentres();
  return [
    ...centres.map((c) => ({ id: c.slug })),
    { id: "kochi" },
  ];
}

export async function generateMetadata({ params }: CentrePageProps): Promise<Metadata> {
  const { id } = await params;
  const centre = getCentreBySlug(id);

  if (!centre) {
    return {
      title: "Centre Not Found | Softmind",
    };
  }

  return {
    title: `${centre.name} - ${centre.shortName} | Softmind Wellness Centres`,
    description: centre.tagline,
    openGraph: {
      title: `${centre.name} | Softmind`,
      description: centre.tagline,
      images: [{ url: centre.thumbnail }],
    },
  };
}

export default async function CentreDetailPage({ params }: CentrePageProps) {
  const { id } = await params;
  const centre = getCentreBySlug(id);

  if (!centre) {
    notFound();
  }

  const allCentres = getAllCentres();

  return (
    <>
      <CentresHero />
      <CentreDetailView centre={centre} allCentres={allCentres} />
      <CliniciansCTA />
    </>
  );
}
