export interface ArticleSection {
  num: string;
  heading: string;
  body: string;
}

export interface Article {
  slug: string;
  badge: string;
  category: string;
  language: "English" | "Malayalam";
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  authorAvatar?: string;
  readTime: string;
  reviewedDate: string;
  img: string;
  widerView: string;
  toc: string[];
  sections: ArticleSection[];
}

// ── Raw shape returned by the Frappe API ──────────────────────────────────────
interface RawArticle {
  name: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;          // HTML string
  feature_image: string;
  published_on: string;     // "YYYY-MM-DD HH:mm:ss.ffffff"
  gallery: string[];
  // optional fields that may be present in future
  badge?: string;
  category?: string;
  language?: string;
  author?: string;
  author_role?: string;
  read_time?: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://devsoftminderp.m.frappe.cloud";
const ARTICLES_ENDPOINT = `${BASE_URL}/api/method/softmind_custom.cms_api.get_cms_api.get_published_articles`;

/** Format a raw published_on timestamp to a readable date e.g. "Sep 25, 2026" */
function formatDate(raw: string): string {
  if (!raw) return "";
  try {
    const d = new Date(raw.replace(" ", "T"));
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return raw;
  }
}

/** Estimate read time from plain-text content */
function estimateReadTime(html: string): string {
  const text = html.replace(/<[^>]+>/g, " ");
  const words = text.trim().split(/\s+/).length;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}

/** Parse raw HTML content into structured sections */
function parseSections(html: string): ArticleSection[] {
  const paragraphs = html.split(/<\/p>/i).filter(Boolean);
  return paragraphs.slice(0, 5).map((p, i) => {
    const clean = p.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    const lines = clean.split(/\n/).map((l) => l.trim()).filter(Boolean);
    const heading = lines[1] ?? `Section ${i + 1}`;
    const body = lines.slice(2).join(" ") || clean;
    const num = String(i + 1).padStart(2, "0");
    return { num, heading, body };
  });
}

/** Map a raw API article to the Article interface */
function mapArticle(raw: RawArticle): Article {
  const sections = parseSections(raw.content ?? "");
  const toc = sections.map((s) => s.heading);

  return {
    slug: raw.slug ?? raw.name,
    badge: raw.badge ?? "Article",
    category: raw.category ?? "General",
    language: (raw.language === "Malayalam" ? "Malayalam" : "English") as Article["language"],
    title: raw.title,
    excerpt: raw.excerpt ?? "",
    author: raw.author ?? "Softmind Team",
    authorRole: raw.author_role ?? "Clinical Specialist",
    readTime: raw.read_time ?? estimateReadTime(raw.content ?? ""),
    reviewedDate: formatDate(raw.published_on),
    img: raw.feature_image || "/assets/anxiety_hero.jpg",
    widerView: raw.excerpt ?? "",
    toc,
    sections,
  };
}

// ── Public fetch helpers ──────────────────────────────────────────────────────

/** Fetch all published articles from the CMS API */
export async function fetchPublishedArticles(): Promise<Article[]> {
  try {
    const res = await fetch(ARTICLES_ENDPOINT, {
      next: { revalidate: 300 }, // ISR: revalidate every 5 minutes
    });
    if (!res.ok) throw new Error(`API error ${res.status}`);
    const json = await res.json();
    const raw: RawArticle[] = Array.isArray(json.message) ? json.message : [];
    return raw.map(mapArticle);
  } catch (err) {
    console.error("[fetchPublishedArticles] Failed:", err);
    return [];
  }
}

/** Fetch a single article by slug from the CMS API */
export async function fetchArticleBySlug(slug: string): Promise<Article | undefined> {
  const articles = await fetchPublishedArticles();
  return articles.find((a) => a.slug === slug);
}

// ── Static filter options (shown in the sidebar) ─────────────────────────────
// These are fixed so the filter UI is always fully populated, regardless of
// how many articles the API currently returns.

export const articleCategories = [
  "Anxiety & Worry",
  "Depression",
  "Therapy",
  "Mindfulness",
  "Parenting",
];

export const articleLanguages: Article["language"][] = ["English", "Malayalam"];

export const articleDoctors = [
  "Dr. Marcus Vance",
  "Dr. Anand Kumar",
  "Misha Thomas",
  "Riya Varghese",
];

/** Derive filter metadata — merges static defaults with any new values from live API data */
export function deriveFilterData(articles: Article[]) {
  const apiCategories = articles.map((a) => a.category).filter(Boolean);
  const apiLanguages = articles.map((a) => a.language).filter(Boolean) as Article["language"][];
  const apiDoctors = articles.map((a) => a.author).filter(Boolean);

  const categories = [...new Set([...articleCategories, ...apiCategories])];
  const languages = [...new Set([...articleLanguages, ...apiLanguages])] as Article["language"][];
  const doctors = [...new Set([...articleDoctors, ...apiDoctors])];

  return { categories, languages, doctors };
}
