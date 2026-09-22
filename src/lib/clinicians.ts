import axios from "axios";

export interface ClinicianExpertise {
  title: string;
  description: string;
}

export interface ClinicianArticle {
  title: string;
  category: string;
  readTime: string;
  img: string;
  href: string;
}

export interface Clinician {
  id: string | number;
  slug: string;
  name: string;
  role: string;
  eyebrow?: string;
  tagline: string;
  desc: string;
  img: string;
  categories: string[];
  experience: string;
  experienceSub: string;
  sessions: string;
  sessionsSub: string;
  license: string;
  licenseSub: string;
  aboutParagraphs: string[];
  socialLinks: {
    instagram?: string;
    youtube?: string;
    facebook?: string;
    twitter?: string;
  };
  portfolioUrl?: string;
  languages: string[];
  quote: string;
  quoteAuthor: string;
  expertise: ClinicianExpertise[];
  articles: ClinicianArticle[];
  isRciLicensed?: boolean;
  rci_licensed?: boolean;
}

export interface ApiClinician {
  id: string;
  name: string;
  title: string | null;
  tagline: string | null;
  image: string | null;
  categories: string[];
  about: string | null;
  rca_registered?: number | boolean | null;
  rci_registered?: number | boolean | null;
  rci_license?: number | boolean | null;
}

export function stripHtml(html: string): string {
  if (!html) return "";
  return html
    .replace(/<br\s*[\/]?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<\/div>/gi, "\n\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\n\s*\n+/g, "\n\n")
    .trim();
}

export async function fetchClinicians(): Promise<Clinician[]> {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/method/softmind_custom.api.clinician_api.get_clinicians`
    );
    const json = res.data;
    const data: ApiClinician[] = json.message?.data || [];
    
    if (!Array.isArray(data) || data.length === 0) {
      return [];
    }
    
    const apiClinicians = data.map((item) => {
       const cleanName = stripHtml(item.name || "");
       const cleanTitle = stripHtml(item.title || "Consultant");
       const cleanTagline = stripHtml(item.tagline || "");
       const cleanAbout = stripHtml(item.about || "");
       const aboutParagraphs = cleanAbout
         ? cleanAbout.split(/\n\n+/).map((p) => p.trim()).filter(Boolean)
         : [];
       const isRci = Boolean(
         item.rca_registered === 1 ||
         item.rca_registered === true ||
         item.rci_registered === 1 ||
         item.rci_registered === true ||
         item.rci_license === 1 ||
         item.rci_license === true ||
         cleanTagline.toLowerCase().includes("rci") ||
         cleanAbout.toLowerCase().includes("rci") ||
         cleanTitle.toLowerCase().includes("rci")
       );

       return {
         id: item.id,
         slug: item.id,
         name: cleanName,
         role: cleanTitle,
         eyebrow: cleanTitle,
         tagline: cleanTagline,
         desc: cleanTagline || (aboutParagraphs.length > 0 ? aboutParagraphs[0] : ""),
         img: item.image ? encodeURI(item.image) : "/invalid-image.jpg",
         categories: item.categories && item.categories.length > 0 ? item.categories : ["All"],
         isRciLicensed: isRci,
         rci_licensed: isRci,
         experience: "Experienced",
         experienceSub: "CLINICAL PRACTICE",
         sessions: "1000+",
         sessionsSub: "SESSIONS CONDUCTED",
         license: isRci ? "RCI Licensed Practitioner" : "Licensed Practitioner",
         licenseSub: isRci ? "RCI LICENSED" : "QUALIFIED CARE",
         aboutParagraphs: aboutParagraphs.length > 0 ? aboutParagraphs : [cleanAbout].filter(Boolean),
         socialLinks: {},
         languages: ["English", "Malayalam"],
         quote: "Empowering Minds. Healing Hearts. Enabling Better Life.",
         quoteAuthor: `- ${cleanName}`,
         expertise: [],
         articles: []
       } as Clinician;
    });

    return apiClinicians;
  } catch (err) {
     console.error("fetchClinicians error:", err);
     return [];
  }
}

export async function fetchClinicianBySlug(slug: string): Promise<Clinician | undefined> {
  const allClinicians = await fetchClinicians();
  const decoded = decodeURIComponent(slug).toLowerCase().trim();
  const normalized = decoded.replace(/[_\s]+/g, "-");

  const summaryItem = allClinicians.find((c) => {
    const cSlug = String(c.slug || "").toLowerCase().trim();
    const cId = String(c.id || "").toLowerCase().trim();
    return (
      cSlug === decoded ||
      cId === decoded ||
      cSlug.replace(/[_\s]+/g, "-") === normalized ||
      cId.replace(/[_\s]+/g, "-") === normalized
    );
  });

  const targetSlug = summaryItem ? String(summaryItem.slug || summaryItem.id) : normalized;

  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/method/softmind_custom.api.clinician_api.get_clinician_detail?practitioner=${encodeURIComponent(targetSlug)}`,
      { timeout: 5000 }
    );
    const json = res.data;
    const detail = json.message?.data || json.message;
    if (detail && (detail.id || detail.name)) {
      const cleanName = stripHtml(detail.name || summaryItem?.name || "");
      const cleanTitle = stripHtml(detail.title || detail.role || summaryItem?.role || "Consultant");
      const cleanTagline = stripHtml(detail.tagline || summaryItem?.tagline || "");
      const cleanAbout = stripHtml(detail.about || "");
      const aboutParagraphs = cleanAbout
        ? cleanAbout.split(/\n\n+/).map((p: string) => p.trim()).filter(Boolean)
        : (summaryItem?.aboutParagraphs || []);

      const isRci = Boolean(
        detail["rca registered"] === 1 ||
        detail["rca registered"] === true ||
        detail.rca_registered === 1 ||
        detail.rca_registered === true ||
        detail.rci_registered === 1 ||
        detail.rci_registered === true ||
        detail.rci_license === 1 ||
        detail.rci_license === true ||
        summaryItem?.isRciLicensed ||
        cleanTagline.toLowerCase().includes("rci") ||
        cleanAbout.toLowerCase().includes("rci") ||
        cleanTitle.toLowerCase().includes("rci")
      );

      const mappedExpertise: ClinicianExpertise[] = Array.isArray(detail.areas_of_expertise)
        ? detail.areas_of_expertise.map((item: any) =>
            typeof item === "string"
              ? { title: stripHtml(item), description: "" }
              : { title: stripHtml(item.title || item.name || ""), description: stripHtml(item.description || "") }
          ).filter((e: ClinicianExpertise) => Boolean(e.title))
        : (summaryItem?.expertise || []);

      const languages: string[] = Array.isArray(detail.languages) && detail.languages.length > 0
        ? detail.languages.map((l: any) => String(l).trim()).filter(Boolean)
        : (summaryItem?.languages || ["English", "Malayalam"]);

      const socialLinks = {
        ...(summaryItem?.socialLinks || {}),
        ...(detail.social || {}),
      };

      return {
        id: detail.id || summaryItem?.id || targetSlug,
        slug: detail.id || summaryItem?.slug || targetSlug,
        name: cleanName,
        role: cleanTitle,
        eyebrow: cleanTitle,
        tagline: cleanTagline,
        desc: cleanTagline || (aboutParagraphs.length > 0 ? aboutParagraphs[0] : ""),
        img: detail.image ? encodeURI(detail.image) : (summaryItem?.img || "/invalid-image.jpg"),
        categories: Array.isArray(detail.categories) && detail.categories.length > 0
          ? detail.categories
          : (summaryItem?.categories || ["All"]),
        isRciLicensed: isRci,
        rci_licensed: isRci,
        experience: summaryItem?.experience || "Experienced",
        experienceSub: summaryItem?.experienceSub || "CLINICAL PRACTICE",
        sessions: summaryItem?.sessions || "1000+",
        sessionsSub: summaryItem?.sessionsSub || "SESSIONS CONDUCTED",
        license: isRci ? "RCI Licensed Practitioner" : (summaryItem?.license || "Licensed Practitioner"),
        licenseSub: isRci ? "RCI LICENSED" : (summaryItem?.licenseSub || "QUALIFIED CARE"),
        aboutParagraphs: aboutParagraphs.length > 0 ? aboutParagraphs : (summaryItem?.aboutParagraphs || []),
        socialLinks,
        portfolioUrl: detail.portfolio_url || summaryItem?.portfolioUrl,
        languages,
        quote: summaryItem?.quote || "Empowering Minds. Healing Hearts. Enabling Better Life.",
        quoteAuthor: summaryItem?.quoteAuthor || `- ${cleanName}`,
        expertise: mappedExpertise.length > 0 ? mappedExpertise : (summaryItem?.expertise || []),
        articles: summaryItem?.articles || []
      } as Clinician;
    }
  } catch (err) {
    console.error("fetchClinicianBySlug error:", err);
  }

  return summaryItem;
}

export const clinicians: Clinician[] = [];

export function getClinicianBySlug(slug: string): Clinician | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  return clinicians.find(
    (c) => c.slug.toLowerCase() === normalized || String(c.id) === normalized
  );
}

export function getClinicianById(id: string | number): Clinician | undefined {
  if (!id) return undefined;
  const strId = String(id).toLowerCase().trim();
  const found = clinicians.find(
    (c) => String(c.id) === strId || c.slug.toLowerCase() === strId
  );
  if (found) return found;
  return clinicians[0];
}
