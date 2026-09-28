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
  content: string;
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

/** Process raw HTML to add IDs to headings and extract TOC */
function processHTMLAndTOC(html: string) {
  let processedHTML = html;
  const toc: string[] = [];
  
  const regex = /<(h[23])([^>]*)>(.*?)<\/\1>/gi;
  processedHTML = processedHTML.replace(regex, (match, tag, attrs, innerText) => {
    const cleanText = innerText.replace(/<[^>]+>/g, "").trim();
    if (cleanText) {
      toc.push(cleanText);
    }
    const id = cleanText.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    if (!attrs.includes("id=")) {
      return `<${tag}${attrs} id="${id}">${innerText}</${tag}>`;
    }
    return match;
  });

  return { processedHTML, toc };
}

/** Helper to make URL-friendly slugs */
function sanitizeSlug(slug: string): string {
  return slug
    .toLowerCase()
    .replace(/[^\p{L}\p{M}\p{N}]+/gu, "-")
    .replace(/(^-|-$)/g, "");
}

/** Map a raw API article to the Article interface */
function mapArticle(raw: RawArticle): Article {
  const sections = parseSections(raw.content ?? "");
  const { processedHTML, toc } = processHTMLAndTOC(raw.content ?? "");

  const isMalayalam = /[\u0D00-\u0D7F]/.test(raw.title || "");

  return {
    slug: sanitizeSlug(raw.slug || raw.name || raw.title || ""),
    badge: raw.badge ?? "Article",
    category: raw.category ?? "General",
    language: (raw.language === "Malayalam" || isMalayalam ? "Malayalam" : "English") as Article["language"],
    title: raw.title,
    excerpt: raw.excerpt ?? "",
    author: raw.author ?? "PRASAD AMORE",
    authorRole: raw.author_role ?? "Clinical Specialist",
    readTime: raw.read_time ?? estimateReadTime(raw.content ?? ""),
    reviewedDate: formatDate(raw.published_on),
    img: raw.feature_image || "/assets/anxiety_hero.jpg",
    widerView: raw.excerpt ?? "",
    toc,
    sections,
    content: processedHTML,
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
  const normalizedInput = sanitizeSlug(decodeURIComponent(slug));
  return articles.find((a) => sanitizeSlug(a.slug) === normalizedInput);
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
export function deriveFilterData(articles: Article[], dynamicDoctors: string[] = []) {
  const apiCategories = articles.map((a) => a.category).filter(Boolean);
  const apiLanguages = articles.map((a) => a.language).filter(Boolean) as Article["language"][];
  const apiDoctors = articles.map((a) => a.author).filter(Boolean);

  const categories = [...new Set([...articleCategories, ...apiCategories])];
  const languages = [...new Set([...articleLanguages, ...apiLanguages])] as Article["language"][];
  
  // Clean empty strings from dynamic doctors
  const validDynamic = dynamicDoctors.filter(d => Boolean(d && d.trim()));

  const doctors = validDynamic.length > 0 
    ? [...new Set(validDynamic)] 
    : [...new Set([...articleDoctors, ...apiDoctors])];

  return { categories, languages, doctors };
}
