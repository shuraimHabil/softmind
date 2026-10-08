import type { Metadata } from "next";
import { fetchWeeklyResearchReports } from "@/lib/researchReports";
import WeeklyResearchBrowser from "@/components/WeeklyResearch/WeeklyResearchBrowser";
import CliniciansCTA from "@/components/Clinicians/CliniciansCTA";
import JsonLd, { generateBreadcrumbsLd } from "@/components/SEO/JsonLd";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Weekly Research Reports | Softmind Healthcare",
  description:
    "Explore clinical psychiatric literature digests, therapeutic efficacy papers, and evidence-informed mental health research reports curated by Softmind specialists.",
  openGraph: {
    title: "Weekly Research Reports | Softmind Healthcare",
    description:
      "Explore clinical psychiatric literature digests, therapeutic efficacy papers, and evidence-informed mental health research reports curated by Softmind specialists.",
    url: "https://www.softmindindia.com/weekly-research-reports",
    type: "website",
    images: [
      {
        url: "https://www.softmindindia.com/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Weekly Research Reports | Softmind Healthcare",
      },
    ],
  },
  alternates: {
    canonical: "https://www.softmindindia.com/weekly-research-reports",
  },
};

export default async function WeeklyResearchReportsPage() {
  const reports = await fetchWeeklyResearchReports();

  const breadcrumbs = [
    { name: "Home", url: "https://www.softmindindia.com" },
    { name: "Articles", url: "https://www.softmindindia.com/articles" },
    { name: "Weekly Research Reports", url: "https://www.softmindindia.com/weekly-research-reports" },
  ];

  return (
    <main>
      <JsonLd data={generateBreadcrumbsLd(breadcrumbs)} />
      <WeeklyResearchBrowser reports={reports} />
      <div style={{ marginTop: "-20px" }}>
        <CliniciansCTA />
      </div>
    </main>
  );
}
