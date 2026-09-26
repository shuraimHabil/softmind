import { notFound } from "next/navigation";
import { fetchClinicians, fetchClinicianBySlug } from "@/lib/clinicians";
import ClinicianDetailHero from "@/components/ClinicianDetail/ClinicianDetailHero";
import ClinicianDetailAbout from "@/components/ClinicianDetail/ClinicianDetailAbout";
import ClinicianDetailExpertise from "@/components/ClinicianDetail/ClinicianDetailExpertise";
import CliniciansCTA from "@/components/Clinicians/CliniciansCTA";
import JsonLd, {
  generateBreadcrumbsLd,
  generateClinicianLd,
} from "@/components/SEO/JsonLd";

export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = 0;

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const clinician = await fetchClinicianBySlug(id);
  if (!clinician) return {};

  const nameParts = clinician.name.replace(/^Dr\.\s*/, "").split(" ");
  const firstName = nameParts[0] ?? clinician.name;
  const lastName = nameParts.slice(1).join(" ") || "";
  const canonicalUrl = `https://www.softmindindia.com/clinicians/${clinician.slug}`;
  const title = `${clinician.name} – ${clinician.role} | Softmind Wellness`;
  const description =
    clinician.tagline ||
    `${clinician.name} is a ${clinician.role} at Softmind Wellness, providing evidence-based psychological care.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "profile",
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
    other: {
      "profile:first_name": firstName,
      ...(lastName ? { "profile:last_name": lastName } : {}),
    },
  };
}

export default async function ClinicianDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const clinician = await fetchClinicianBySlug(id);
  if (!clinician) notFound();

  const breadcrumbs = [
    { name: "Home", url: "https://www.softmindindia.com" },
    { name: "Clinicians", url: "https://www.softmindindia.com/clinicians" },
    {
      name: clinician.name,
      url: `https://www.softmindindia.com/clinicians/${clinician.slug}`,
    },
  ];

  const breadcrumbsLd = generateBreadcrumbsLd(breadcrumbs);
  const clinicianLd = generateClinicianLd({
    name: clinician.name,
    role: clinician.role,
    url: `https://www.softmindindia.com/clinicians/${clinician.slug}`,
    license: clinician.license,
    languages: clinician.languages,
  });

  return (
    <>
      <JsonLd data={breadcrumbsLd} />
      <JsonLd data={clinicianLd} />
      <main>
        <ClinicianDetailHero clinician={clinician} />
        <ClinicianDetailAbout clinician={clinician} />
        <ClinicianDetailExpertise expertise={clinician.expertise} />
        <CliniciansCTA />
      </main>
    </>
  );
}
