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

export default async function ArticlesPage() {
  const articles = await fetchPublishedArticles();
  const { categories, languages, doctors } = deriveFilterData(articles);

  return (
    <main>
      <ArticlesBrowser
        articles={articles}
        categories={categories}
        languages={languages}
        doctors={doctors}
      />
      <CliniciansCTA />
    </main>
  );
}

