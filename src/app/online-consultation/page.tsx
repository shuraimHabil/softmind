import type { Metadata } from "next";
import JsonLd, { generateBreadcrumbsLd } from "@/components/SEO/JsonLd";
import OnlineConsultationView from "./OnlineConsultationView";
import { fetchClinicians } from "@/lib/clinicians";

export const metadata: Metadata = {
  title: "Online Psychological Consultation | Softmind Wellness",
  description:
    "A conversation is a place to begin understanding. Professional psychological care, wherever you are. Book an online consultation with Softmind professionals.",
  openGraph: {
    title: "Online Psychological Consultation | Softmind Wellness",
    description:
      "A conversation is a place to begin understanding. Professional psychological care, wherever you are.",
    url: "https://www.softmindindia.com/online-consultation",
    type: "website",
    images: [
      {
        url: "https://www.softmindindia.com/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Online Psychological Consultation | Softmind Wellness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Psychological Consultation | Softmind Wellness",
    description:
      "A conversation is a place to begin understanding. Professional psychological care, wherever you are.",
    images: ["https://www.softmindindia.com/og/default.jpg"],
  },
  alternates: {
    canonical: "https://www.softmindindia.com/online-consultation",
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function OnlineConsultationPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.softmindindia.com" },
    {
      name: "Online Consultation",
      url: "https://www.softmindindia.com/online-consultation",
    },
  ];

  const clinicians = await fetchClinicians();

  return (
    <>
      <JsonLd data={generateBreadcrumbsLd(breadcrumbs)} />
      <main>
        <OnlineConsultationView clinicians={clinicians} />
      </main>
    </>
  );
}
