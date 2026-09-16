import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/lib/articles";
import ArticleHero from "@/components/Article/ArticleHero";
import ArticleTrustBar from "@/components/Article/ArticleTrustBar";
import ArticleBody from "@/components/Article/ArticleBody";
import ArticleContinueExploring from "@/components/Article/ArticleContinueExploring";
import CliniciansCTA from "@/components/Clinicians/CliniciansCTA";
import JsonLd, {
  generateBreadcrumbsLd,
  generateArticleLd,
} from "@/components/SEO/JsonLd";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const canonicalUrl = `https://www.softmindindia.com/articles/${slug}`;
  const title = `${article.title} | Softmind Wellness`;
  const description = article.excerpt;

  const publishedDate = article.reviewedDate
    ? new Date(article.reviewedDate).toISOString()
    : new Date("2026-07-21").toISOString();

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: "https://www.softmindindia.com/og/default.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedDate ? { publishedTime: publishedDate } : {}),
      ...(article.category ? { section: article.category } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.softmindindia.com/og/default.jpg"],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug).slice(0, 5);

  const breadcrumbs = [
    { name: "Home", url: "https://www.softmindindia.com" },
    { name: "Articles", url: "https://www.softmindindia.com/articles" },
    {
      name: article.title,
      url: `https://www.softmindindia.com/articles/${article.slug}`,
    },
  ];

  const breadcrumbsLd = generateBreadcrumbsLd(breadcrumbs);
  const articleLd = generateArticleLd({
    title: article.title,
    headline: article.title,
    datePublished: article.reviewedDate
      ? new Date(article.reviewedDate).toISOString()
      : "2026-07-21T00:00:00.000Z",
    author: article.author || "Softmind Wellness Team",
    url: `https://www.softmindindia.com/articles/${article.slug}`,
    image: "https://www.softmindindia.com/og/default.jpg",
  });

  return (
    <>
      <JsonLd data={breadcrumbsLd} />
      <JsonLd data={articleLd} />
      <ArticleHero article={article} />
      <ArticleTrustBar reviewedDate={article.reviewedDate} />
      <ArticleBody article={article} related={related} />
      <ArticleContinueExploring current={slug} />
      <CliniciansCTA />
    </>
  );
}
