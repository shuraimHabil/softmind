import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Softmind Wellness Centres | Locations Across Kerala",
  description:
    "Visit any of our peaceful, evidence-based wellness centres in Kochi, Trivandrum, and Thrissur. Find the centre nearest to you.",
  openGraph: {
    title: "Softmind Wellness Centres | Locations Across Kerala",
    description:
      "Visit any of our peaceful, evidence-based wellness centres in Kochi, Trivandrum, and Thrissur. Find the centre nearest to you.",
    url: "https://www.softmindindia.com/centres",
    type: "website",
    images: [
      {
        url: "https://www.softmindindia.com/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Softmind Wellness Centres | Locations Across Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Softmind Wellness Centres | Locations Across Kerala",
    description:
      "Visit any of our peaceful, evidence-based wellness centres in Kochi, Trivandrum, and Thrissur. Find the centre nearest to you.",
    images: ["https://www.softmindindia.com/og/default.jpg"],
  },
  alternates: {
    canonical: "https://www.softmindindia.com/centres",
  },
};

import { redirect } from "next/navigation";
import { fetchCentres } from "@/lib/centres";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function CentresPage() {
  const allCentres = await fetchCentres();
  const panampillyCentre =
    allCentres.find(
      (c) =>
        c.slug.toLowerCase().includes("panampilly") ||
        c.id.toLowerCase().includes("panampilly") ||
        c.name.toLowerCase().includes("panampilly") ||
        c.shortName.toLowerCase().includes("panampilly")
    ) || allCentres[0];

  if (panampillyCentre) {
    redirect(`/centres/${panampillyCentre.slug}`);
  }

  return (
    <section style={{ padding: "80px 24px", textAlign: "center" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", color: "#134e4a", marginBottom: "12px", fontFamily: "var(--font-heading, serif)" }}>
          No Centres Listed
        </h2>
        <p style={{ color: "#64748b", fontSize: "16px", lineHeight: 1.6 }}>
          Centres data from the server will appear here as soon as they are added in the ERP system.
        </p>
      </div>
    </section>
  );
}
