import Hero from "@/components/Hero/Hero";
import Philosophy from "@/components/Philosophy/Philosophy";
import ServicesNav from "@/components/ServicesNav/ServicesNav";
import Locations from "@/components/Locations/Locations";
import Practitioners from "@/components/Practitioners/Practitioners";
import Institutional from "@/components/Institutional/Institutional";
import Topics from "@/components/Topics/Topics";
import Insights from "@/components/Insights/Insights";
import Newsletter from "@/components/Newsletter/Newsletter";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/siteUrl";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Softmind - Evidence-Based & Personalized Psychological Care",
  description:
    "Softmind is a pioneer in evidence based and personalized mental healthcare, offering psychiatric services, psychological therapy and wellness programs in Kochi and online.",
  openGraph: {
    siteName: "Softmind Wellness",
    locale: "en_IN",
    type: "website",
    title: "Softmind - Evidence-Based & Personalized Psychological Care",
    description:
      "Softmind is a pioneer in evidence based and personalized mental healthcare, offering psychiatric services, psychological therapy and wellness programs in Kochi and online.",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/assets/softmind_india.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Softmind - Evidence-Based & Personalized Psychological Care",
      },
      {
        url: `${siteUrl}/og/default.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Softmind - Evidence-Based & Personalized Psychological Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Softmind - Evidence-Based & Personalized Psychological Care",
    description:
      "Softmind is a pioneer in evidence based and personalized mental healthcare, offering psychiatric services, psychological therapy and wellness programs in Kochi and online.",
    images: [`${siteUrl}/assets/softmind_india.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <ServicesNav />
      <Locations />
      <Practitioners />
      <Institutional />
      <Topics />
      <Insights />
      <Newsletter />
    </>
  );
}
