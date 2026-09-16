import { notFound } from "next/navigation";
import { clinicians, getClinicianById } from "@/lib/clinicians";
import ClinicianDetailHero from "@/components/ClinicianDetail/ClinicianDetailHero";
import ClinicianDetailAbout from "@/components/ClinicianDetail/ClinicianDetailAbout";
import ClinicianDetailExpertise from "@/components/ClinicianDetail/ClinicianDetailExpertise";
import CliniciansCTA from "@/components/Clinicians/CliniciansCTA";

export async function generateStaticParams() {
  return clinicians.map((c) => ({ id: String(c.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const clinician = getClinicianById(id);
  if (!clinician) return {};

  const nameParts = clinician.name.replace(/^Dr\.\s*/, "").split(" ");
  const firstName = nameParts[0] ?? clinician.name;
  const lastName = nameParts.slice(1).join(" ") || "";
  const canonicalUrl = `https://www.softmindindia.com/clinicians/${id}`;
  const title = `${clinician.name} – ${clinician.role} | Softmind Wellness`;
  const description = clinician.tagline;

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
  const clinician = getClinicianById(id);
  if (!clinician) notFound();

  return (
    <main>
      <ClinicianDetailHero clinician={clinician} />
      <ClinicianDetailAbout clinician={clinician} />
      <ClinicianDetailExpertise expertise={clinician.expertise} />
      <CliniciansCTA />
    </main>
  );
}
