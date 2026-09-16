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

  const canonicalUrl = `https://www.softmindindia.com/centres/${centre.slug}`;
  const title = `Softmind ${centre.shortName} – Mental Health Centre in ${centre.city}`;
  const description = centre.tagline;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: "https://www.softmindindia.com/og/default.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.softmindindia.com/og/default.jpg"],
    },
    alternates: {
      canonical: canonicalUrl,
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
