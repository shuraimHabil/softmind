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

  const canonicalUrl = `https://www.softmindindia.com/articles/${slug}`;
  const title = article.title;
  const description = article.excerpt;

  // Parse reviewedDate ("Aug 28, 2026") → ISO string for article:published_time
  const publishedDate = article.reviewedDate
    ? new Date(article.reviewedDate).toISOString()
    : undefined;

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
