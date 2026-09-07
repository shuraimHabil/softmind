import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/lib/articles";
import ArticleHero from "@/components/Article/ArticleHero";
import ArticleTrustBar from "@/components/Article/ArticleTrustBar";
import ArticleBody from "@/components/Article/ArticleBody";
import ArticleContinueExploring from "@/components/Article/ArticleContinueExploring";
import CliniciansCTA from "@/components/Clinicians/CliniciansCTA";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Softmind`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug).slice(0, 5);

  return (
    <>
      <ArticleHero article={article} />
      <ArticleTrustBar reviewedDate={article.reviewedDate} />
      <ArticleBody article={article} related={related} />
      <ArticleContinueExploring current={slug} />
      <CliniciansCTA />
    </>
  );
}
