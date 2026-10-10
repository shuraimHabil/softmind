import type { Metadata } from "next";
import {
  fetchPublishedArticles,
  deriveFilterData,
} from "@/lib/articles";
import ArticlesBrowser from "@/components/ArticlesBrowser/ArticlesBrowser";
import CliniciansCTA from "@/components/Clinicians/CliniciansCTA";

export const metadata: Metadata = {
  title: "Browse Clinical Articles | Softmind Healthcare",
  description:
    "Explore evidence-based mental health articles, psychology research, and clinical insights curated by Softmind's licensed specialists in Kerala.",
  openGraph: {
    title: "Browse Clinical Articles | Softmind Healthcare",
    description:
      "Explore evidence-based mental health articles, psychology research, and clinical insights curated by Softmind's licensed specialists in Kerala.",
    url: "https://www.softmindindia.com/articles",
    type: "website",
    images: [
      {
        url: "https://www.softmindindia.com/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Browse Clinical Articles | Softmind Healthcare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Browse Clinical Articles | Softmind Healthcare",
    description:
      "Explore evidence-based mental health articles, psychology research, and clinical insights curated by Softmind's licensed specialists in Kerala.",
    images: ["https://www.softmindindia.com/og/default.jpg"],
  },
  alternates: {
    canonical: "https://www.softmindindia.com/articles",
  },
};

import { fetchClinicians } from "@/lib/clinicians";

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ doctor?: string }>;
}) {
  const resolvedParams = await searchParams;
  const initialDoctor = resolvedParams?.doctor;

  const [articles, allClinicians] = await Promise.all([
    fetchPublishedArticles(),
    fetchClinicians(),
  ]);
  const clinicianNames = allClinicians.map((c) => c.name);
  const { categories, languages, doctors } = deriveFilterData(articles, clinicianNames);

  let latestReport = null;
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://devsoftminderp.m.frappe.cloud";
    const res = await fetch(`${baseUrl}/api/method/softmind_custom.cms_api.weekly_research_api.get_weekly_research_reports`, {
      next: { revalidate: 60 }
    });
    if (res.ok) {
      const json = await res.json();
      if (json.message?.success && Array.isArray(json.message.data) && json.message.data.length > 0) {
        latestReport = json.message.data[0];
      }
    }
  } catch (err) {
    console.error("Failed to fetch latest research report", err);
  }

  return (
    <main>
      <ArticlesBrowser
        articles={articles}
        categories={categories}
        languages={languages}
        doctors={doctors}
        initialDoctor={initialDoctor}
        latestReport={latestReport}
      />
      <CliniciansCTA />
    </main>
  );
}

