import type { Metadata } from "next";
import OnlineConsultationHero from "@/components/OnlineConsultation/OnlineConsultationHero";
import OnlineConsultationProcess from "@/components/OnlineConsultation/OnlineConsultationProcess";
import OnlineConsultationBetweenSessions from "@/components/OnlineConsultation/OnlineConsultationBetweenSessions";
import OnlineConsultationCareSection from "@/components/OnlineConsultation/OnlineConsultationCareSection";
import OnlineConsultationWhyChoose from "@/components/OnlineConsultation/OnlineConsultationWhyChoose";
import OnlineConsultationBottomSection from "@/components/OnlineConsultation/OnlineConsultationBottomSection";
import JsonLd, { generateBreadcrumbsLd } from "@/components/SEO/JsonLd";

export const metadata: Metadata = {
  title: "Online Consultation & Tele-Therapy | Softmind Wellness",
  description:
    "Confidential online consultation with Softmind professionals, supported by personalised resources between sessions. Connect with experienced psychologists and psychiatrists.",
  openGraph: {
    title: "Online Consultation & Tele-Therapy | Softmind Wellness",
    description:
      "Confidential online consultation with Softmind professionals, supported by personalised resources between sessions.",
    url: "https://www.softmindindia.com/online-consultation",
    type: "website",
    images: [
      {
        url: "https://www.softmindindia.com/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Online Consultation | Softmind Wellness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Consultation & Tele-Therapy | Softmind Wellness",
    description:
      "Confidential online consultation with Softmind professionals, supported by personalised resources between sessions.",
    images: ["https://www.softmindindia.com/og/default.jpg"],
  },
  alternates: {
    canonical: "https://www.softmindindia.com/online-consultation",
  },
};

export default function OnlineConsultationPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.softmindindia.com" },
    {
      name: "Online Consultation",
      url: "https://www.softmindindia.com/online-consultation",
    },
  ];

  const breadcrumbsLd = generateBreadcrumbsLd(breadcrumbs);

  return (
    <>
      <JsonLd data={breadcrumbsLd} />
      <main>
        <OnlineConsultationHero />
        <OnlineConsultationProcess />
        <OnlineConsultationBetweenSessions />
        <OnlineConsultationCareSection />
        <OnlineConsultationWhyChoose />
        <OnlineConsultationBottomSection />
      </main>
    </>
  );
}
