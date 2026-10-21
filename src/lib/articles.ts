export interface ArticleSection {
  num: string;
  heading: string;
  body: string;
}

export interface Article {
  slug: string;
  websiteSlug?: string;
  rawSlug?: string;
  rawName?: string;
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
  website_slug?: string | null;
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
const ARTICLES_ENDPOINT = `${BASE_URL}/api/method/softmind_custom.cms_api.get_cms_api.get_published_articles?limit=0`;

const KNOWN_ARTICLE_AUTHORS: Record<string, string> = {
  "autism-spectrum-disorder---early-identification-and-behavioural-support": "Hamna K S",
};

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

/** Clean HTML tags, inline styles, and entities from excerpt */
export function cleanExcerpt(raw: string): string {
  if (!raw) return "";
  return raw
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
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

/** Helper to convert string to Title Case */
export function toTitleCase(str: string): string {
  if (!str) return "";
  return str
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

/** Helper to infer category from article title if not provided by CMS */
function inferCategory(title: string): string {
  if (!title) return "General";
  const t = title.toLowerCase();
  if (t.includes("anxiety") || t.includes("worry") || t.includes("panic")) return "Anxiety & Worry";
  if (t.includes("depression") || t.includes("depressive") || t.includes("mood")) return "Depression";
  if (t.includes("therapy") || t.includes("ചികിത്സ") || t.includes("counseling") || t.includes("psychotherapy")) return "Therapy";
  if (t.includes("mind") || t.includes("mindful") || t.includes("meditation")) return "Mindfulness";
  if (t.includes("parent") || t.includes("child") || t.includes("teen") || t.includes("adolescent")) return "Parenting";
  return "General";
}

/** Map a raw API article to the Article interface */
function mapArticle(raw: RawArticle): Article {
  const sections = parseSections(raw.content ?? "");
  const { processedHTML, toc } = processHTMLAndTOC(raw.content ?? "");

  const isMalayalam = /[\u0D00-\u0D7F]/.test(raw.title || "");
  const category = raw.category && raw.category.trim() !== "" ? raw.category : inferCategory(raw.title);

  const rawAuthor = raw.author && raw.author.trim() !== "" ? raw.author : undefined;
  const matchedAuthor = rawAuthor || KNOWN_ARTICLE_AUTHORS[raw.slug] || KNOWN_ARTICLE_AUTHORS[raw.name] || "Prasad Amore";

  const rawCustomSlug = raw.website_slug?.trim();
  const effectiveSlug = rawCustomSlug
    ? sanitizeSlug(rawCustomSlug)
    : sanitizeSlug(raw.slug || raw.name || raw.title || "");

  const cleanedExcerpt = cleanExcerpt(raw.excerpt ?? "");
  const effectiveExcerpt = cleanedExcerpt || cleanExcerpt(sections[0]?.body ?? "");

  return {
    slug: effectiveSlug,
    websiteSlug: rawCustomSlug || undefined,
    rawSlug: raw.slug || undefined,
    rawName: raw.name || undefined,
    badge: raw.badge || category,
    category,
    language: (raw.language === "Malayalam" || isMalayalam ? "Malayalam" : "English") as Article["language"],
    title: raw.title,
    excerpt: effectiveExcerpt,
    author: toTitleCase(matchedAuthor),
    authorRole: raw.author_role ?? "Clinical Specialist",
    readTime: raw.read_time ?? estimateReadTime(raw.content ?? ""),
    reviewedDate: formatDate(raw.published_on),
    img: raw.feature_image || "/assets/anxiety_hero.jpg",
    widerView: effectiveExcerpt,
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
  const decoded = decodeURIComponent(slug).trim();
  const normalizedInput = sanitizeSlug(decoded);

  return articles.find((a) => {
    if (sanitizeSlug(a.slug) === normalizedInput) return true;
    if (a.websiteSlug && sanitizeSlug(a.websiteSlug) === normalizedInput) return true;
    if (a.rawSlug && sanitizeSlug(a.rawSlug) === normalizedInput) return true;
    if (a.rawName && sanitizeSlug(a.rawName) === normalizedInput) return true;
    if (a.slug.toLowerCase() === decoded.toLowerCase()) return true;
    if (a.websiteSlug && a.websiteSlug.toLowerCase() === decoded.toLowerCase()) return true;
    if (a.rawSlug && a.rawSlug.toLowerCase() === decoded.toLowerCase()) return true;
    if (a.rawName && a.rawName.toLowerCase() === decoded.toLowerCase()) return true;
    return false;
  });
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
  "General",
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
  
  // Clean empty strings from dynamic doctors and ensure Title Case
  const validDynamic = dynamicDoctors
    .filter((d) => Boolean(d && d.trim()))
    .map((d) => toTitleCase(d));

  const doctors = validDynamic.length > 0 
    ? [...new Set(validDynamic)] 
    : [...new Set([...articleDoctors.map(toTitleCase), ...apiDoctors.map(toTitleCase)])];

  return { categories, languages, doctors };
}
