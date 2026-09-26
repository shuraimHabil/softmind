import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchCentres, fetchCentreBySlug } from "@/lib/centres";
import { fetchClinicians } from "@/lib/clinicians";
import CentresHero from "@/components/Centres/CentresHero";
import CentreDetailView from "@/components/Centres/CentreDetailView";
import CliniciansCTA from "@/components/Clinicians/CliniciansCTA";
import JsonLd, {
  generateBreadcrumbsLd,
  generateCentreLd,
} from "@/components/SEO/JsonLd";

interface CentrePageProps {
  params: Promise<{ id: string }>;
}

export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = 0;

export async function generateStaticParams() {
  const centres = await fetchCentres();
  return [
    ...centres.map((c) => ({ id: c.slug })),
    { id: "kochi" },
    { id: "aroor" },
  ];
}

export async function generateMetadata({ params }: CentrePageProps): Promise<Metadata> {
  const { id } = await params;
  const centre = await fetchCentreBySlug(id);

  if (!centre) {
    return {
      title: "Centre Not Found | Softmind Wellness",
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
  const centre = await fetchCentreBySlug(id);

  if (!centre) {
    notFound();
  }

  const allCentres = await fetchCentres();
  const clinicians = await fetchClinicians();

  const breadcrumbs = [
    { name: "Home", url: "https://www.softmindindia.com" },
    { name: "Centres", url: "https://www.softmindindia.com/centres" },
    {
      name: centre.shortName,
      url: `https://www.softmindindia.com/centres/${centre.slug}`,
    },
  ];

  const breadcrumbsLd = generateBreadcrumbsLd(breadcrumbs);
  const centreLd = generateCentreLd({
    name: centre.name,
    url: `https://www.softmindindia.com/centres/${centre.slug}`,
    phone: centre.phone,
    fullAddress: centre.fullAddress,
    city: centre.city,
  });

  return (
    <>
      <JsonLd data={breadcrumbsLd} />
      <JsonLd data={centreLd} />
      <CentresHero />
      <CentreDetailView centre={centre} allCentres={allCentres} clinicians={clinicians} />
      <CliniciansCTA />
    </>
  );
}
