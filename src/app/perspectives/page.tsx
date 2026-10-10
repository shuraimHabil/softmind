import type { Metadata } from "next";
import PerspectivesDetail from "@/components/Perspectives/PerspectivesDetail";
import CliniciansCTA from "@/components/Clinicians/CliniciansCTA";

export const metadata: Metadata = {
  title: "Our Perspective | Softmind – Understanding the Person, Not Merely the Problem",
  description:
    "An editorial reflection on the philosophy that guides Softmind — informed by psychological science, affective neuroscience and a commitment to human understanding.",
  openGraph: {
    title: "Our Perspective | Softmind – Understanding the Person, Not Merely the Problem",
    description:
      "An editorial reflection on the philosophy that guides Softmind — informed by psychological science, affective neuroscience and a commitment to human understanding.",
    url: "https://www.softmindindia.com/perspectives",
    type: "article",
    images: [
      {
        url: "/assets/perspectives/hero_chair.jpg",
        width: 1200,
        height: 630,
        alt: "Our Perspective – Softmind Wellness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Perspective | Softmind – Understanding the Person, Not Merely the Problem",
    description:
      "An editorial reflection on the philosophy that guides Softmind — informed by psychological science, affective neuroscience and a commitment to human understanding.",
    images: ["/assets/perspectives/hero_chair.jpg"],
  },
  alternates: {
    canonical: "https://www.softmindindia.com/perspectives",
  },
};

async function fetchPerspectives() {
  try {
    const envBaseUrl = (process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_BACKEND_URL || "https://devsoftminderp.m.frappe.cloud").replace(/\/+$/, "");
    const endpointPath = "/api/method/softmind_custom.cms_api.perspective_api.get_perspectives";
    const targetUrl = `${envBaseUrl}${endpointPath}`;
    
    const response = await fetch(targetUrl, { next: { revalidate: 60 } });
    if (!response.ok) {
      console.error("Failed to fetch perspectives API status:", response.status);
      return [];
    }
    const result = await response.json();
    if (Array.isArray(result?.message?.data)) return result.message.data;
    if (Array.isArray(result?.message)) return result.message;
    if (Array.isArray(result?.data)) return result.data;
    return [];
  } catch (err) {
    console.error("fetchPerspectives error:", err);
    return [];
  }
}

export default async function PerspectivesPage() {
  const perspectives = await fetchPerspectives();

  return (
    <main>
      <PerspectivesDetail perspectives={perspectives} />
      <CliniciansCTA />
    </main>
  );
}
