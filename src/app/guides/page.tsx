import type { Metadata } from "next";
import { fetchAllGuides } from "@/lib/guides";
import GuidesBrowser from "@/components/GuidesBrowser/GuidesBrowser";
import CliniciansCTA from "@/components/Clinicians/CliniciansCTA";
import JsonLd, { generateBreadcrumbsLd } from "@/components/SEO/JsonLd";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Clinical & Practical Mental Health Guides | Softmind Healthcare",
  description:
    "Explore evidence-informed clinical PDF guides and resources curated by licensed psychologists at Softmind.",
  openGraph: {
    title: "Clinical & Practical Mental Health Guides | Softmind Healthcare",
    description:
      "Explore evidence-informed clinical PDF guides and resources curated by licensed psychologists at Softmind.",
    url: "https://www.softmindindia.com/guides",
    type: "website",
    images: [
      {
        url: "https://www.softmindindia.com/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Clinical Guides | Softmind Healthcare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinical & Practical Mental Health Guides | Softmind Healthcare",
    description:
      "Explore evidence-informed clinical PDF guides and resources curated by licensed psychologists at Softmind.",
    images: ["https://www.softmindindia.com/og/default.jpg"],
  },
  alternates: {
    canonical: "https://www.softmindindia.com/guides",
  },
};

export default async function GuidesPage() {
  const guides = await fetchAllGuides();

  const breadcrumbs = [
    { name: "Home", url: "https://www.softmindindia.com" },
    { name: "Knowledge Centre", url: "https://www.softmindindia.com/knowledge-centre" },
    { name: "Guides", url: "https://www.softmindindia.com/guides" },
  ];

  return (
    <main>
      <JsonLd data={generateBreadcrumbsLd(breadcrumbs)} />
      <GuidesBrowser guides={guides} />
      <div style={{ marginTop: "-20px" }}>
        <CliniciansCTA />
      </div>
    </main>
  );
}
