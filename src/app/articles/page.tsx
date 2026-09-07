import type { Metadata } from "next";
import {
  articles,
  articleCategories,
  articleLanguages,
  articleDoctors,
} from "@/lib/articles";
import ArticlesBrowser from "@/components/ArticlesBrowser/ArticlesBrowser";
import CliniciansCTA from "@/components/Clinicians/CliniciansCTA";

export const metadata: Metadata = {
  title: "Browse Clinical Articles | Softmind Healthcare",
  description:
    "Explore evidence-based mental health articles, psychology research, and clinical insights curated by Softmind's licensed specialists in Kerala.",
  keywords: [
    "mental health articles",
    "psychology insights",
    "anxiety and worry",
    "depression help",
    "therapy kochi",
    "mindfulness",
    "Softmind",
    "Malayalam mental health articles",
  ],
};

export default function ArticlesPage() {
  return (
    <main>
      <ArticlesBrowser
        articles={articles}
        categories={articleCategories}
        languages={articleLanguages}
        doctors={articleDoctors}
      />
      <CliniciansCTA />
    </main>
  );
}
