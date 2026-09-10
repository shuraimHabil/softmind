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

  return {
    title: `${clinician.name} - ${clinician.role} | Softmind`,
    description: clinician.tagline || clinician.desc,
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
