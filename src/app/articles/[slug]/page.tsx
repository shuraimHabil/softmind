import { notFound, redirect } from "next/navigation";
import { fetchPublishedArticles, fetchArticleBySlug } from "@/lib/articles";
import ArticleHero from "@/components/Article/ArticleHero";
import ArticleBody from "@/components/Article/ArticleBody";
import ArticleContinueExploring from "@/components/Article/ArticleContinueExploring";
import CliniciansCTA from "@/components/Clinicians/CliniciansCTA";
import JsonLd, {
  generateBreadcrumbsLd,
  generateArticleLd,
} from "@/components/SEO/JsonLd";
import { getSiteUrl, getFullImageUrl } from "@/lib/siteUrl";

export const dynamicParams = true;

export async function generateStaticParams() {
  const articles = await fetchPublishedArticles();
  // Linux filesystems (ext4/tmpfs on Vercel) have a strict 255-byte limit per filename/directory component.
  // Next.js static prerender generates directories like `<slug>.segments` and `<slug>.html`.
  // Long Malayalam/Unicode slugs can exceed 255 bytes in UTF-8 (each character is 3 bytes),
  // causing `ENAMETOOLONG: name too long, mkdir ...`.
  // Filtering out slugs longer than 150 bytes in UTF-8 avoids this build failure.
  // Articles with longer slugs will still be seamlessly rendered on-demand at runtime via dynamicParams.
  return articles
    .filter((a) => a.slug && Buffer.byteLength(a.slug, "utf8") <= 150)
    .map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await fetchArticleBySlug(slug);
  if (!article) return {};

  const siteUrl = getSiteUrl();
  const canonicalUrl = `${siteUrl}/articles/${article.slug}`;
  const title = `${article.title} | Softmind Wellness`;
  const description = article.excerpt || article.title;
  const imageUrl = getFullImageUrl(article.img);

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
          url: imageUrl,
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
      images: [imageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const [article, allArticles] = await Promise.all([
    fetchArticleBySlug(slug),
    fetchPublishedArticles(),
  ]);

  if (!article) notFound();

  // If accessed by an older alias/raw slug or name, redirect to canonical custom slug
  const decodedSlug = decodeURIComponent(slug).trim().toLowerCase();
  if (article.slug && decodedSlug !== article.slug.toLowerCase()) {
    redirect(`/articles/${article.slug}`);
  }

  const siteUrl = getSiteUrl();
  const imageUrl = getFullImageUrl(article.img);
  const related = allArticles.filter((a) => a.slug !== article.slug).slice(0, 5);

  const breadcrumbs = [
    { name: "Home", url: siteUrl },
    { name: "Articles", url: `${siteUrl}/articles` },
    {
      name: article.title,
      url: `${siteUrl}/articles/${article.slug}`,
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
    url: `${siteUrl}/articles/${article.slug}`,
    image: imageUrl,
  });

  return (
    <>
      <JsonLd data={breadcrumbsLd} />
      <JsonLd data={articleLd} />
      <ArticleHero article={article} />
      <ArticleBody article={article} />
      <ArticleContinueExploring current={slug} />
      <CliniciansCTA />
    </>
  );
}



