import { notFound } from "next/navigation";
import { fetchClinicians, fetchClinicianBySlug } from "@/lib/clinicians";
import { fetchPublishedArticles } from "@/lib/articles";
import ClinicianDetailHero from "@/components/ClinicianDetail/ClinicianDetailHero";
import ClinicianDetailAbout from "@/components/ClinicianDetail/ClinicianDetailAbout";
import ClinicianDetailAreasOfPractice from "@/components/ClinicianDetail/ClinicianDetailAreasOfPractice";
import ClinicianDetailHowIWork from "@/components/ClinicianDetail/ClinicianDetailHowIWork";
import ClinicianDetailTherapeuticApproaches from "@/components/ClinicianDetail/ClinicianDetailTherapeuticApproaches";
import ClinicianDetailBlogs from "@/components/ClinicianDetail/ClinicianDetailBlogs";
import CliniciansCTA from "@/components/Clinicians/CliniciansCTA";
import JsonLd, {
  generateBreadcrumbsLd,
  generateClinicianLd,
} from "@/components/SEO/JsonLd";
import { getSiteUrl, getFullImageUrl } from "@/lib/siteUrl";

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

  const siteUrl = getSiteUrl();
  const nameParts = clinician.name.replace(/^Dr\.\s*/, "").split(" ");
  const firstName = nameParts[0] ?? clinician.name;
  const lastName = nameParts.slice(1).join(" ") || "";
  const canonicalUrl = `${siteUrl}/clinicians/${clinician.slug}`;
  const title = `${clinician.name} – ${clinician.role} | Softmind Wellness`;
  const description =
    clinician.tagline ||
    `${clinician.name} is a ${clinician.role} at Softmind Wellness, providing evidence-based psychological care.`;
  const imageUrl = getFullImageUrl(clinician.img);

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
          url: imageUrl,
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
      images: [imageUrl],
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
  const [clinician, allArticles] = await Promise.all([
    fetchClinicianBySlug(id),
    fetchPublishedArticles(),
  ]);
  if (!clinician) notFound();

  const cleanClinicianName = clinician.name
    .toLowerCase()
    .replace(/^dr\.?\s*/i, "")
    .trim();

  const doctorArticles = allArticles.filter((art) => {
    if (!art.author) return false;
    const cleanAuthor = art.author
      .toLowerCase()
      .replace(/^dr\.?\s*/i, "")
      .trim();
    return (
      cleanAuthor === cleanClinicianName ||
      cleanAuthor.includes(cleanClinicianName) ||
      cleanClinicianName.includes(cleanAuthor)
    );
  });

  const siteUrl = getSiteUrl();
  const breadcrumbs = [
    { name: "Home", url: siteUrl },
    { name: "Clinicians", url: `${siteUrl}/clinicians` },
    {
      name: clinician.name,
      url: `${siteUrl}/clinicians/${clinician.slug}`,
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
        <ClinicianDetailAreasOfPractice areas={clinician.areasOfPractice} />
        <ClinicianDetailHowIWork />
        <ClinicianDetailTherapeuticApproaches approaches={clinician.therapeuticApproaches} />
        <ClinicianDetailBlogs
          clinician={clinician}
          articles={doctorArticles.slice(0, 3)}
          hasMore={doctorArticles.length > 3}
        />
        <CliniciansCTA />
      </main>
    </>
  );
}
