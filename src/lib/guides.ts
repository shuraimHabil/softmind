export interface PDFGuide {
  id: string;
  title: string;
  date?: string | null;
  pdfUrl?: string | null;
  fileSize?: string;
  category?: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://devsoftminderp.m.frappe.cloud";

export const defaultPdfGuides: PDFGuide[] = [
  {
    id: "panic-attack-somatic-reset",
    title: "Managing Panic Attacks: Somatic Reset & Sensory Grounding Guide",
    date: "Oct 2026",
    pdfUrl: "/assets/guides/panic-attacks-grounding-guide.pdf",
    fileSize: "1.2 MB",
    category: "Anxiety & Panic"
  },
  {
    id: "cbt-worry-restructuring",
    title: "Breaking The Worry Cycle: Cognitive Restructuring Protocol",
    date: "Oct 2026",
    pdfUrl: "/assets/guides/cbt-worry-restructuring-guide.pdf",
    fileSize: "850 KB",
    category: "CBT Tools"
  },
  {
    id: "sleep-hygiene-cbti",
    title: "Clinical Sleep Architecture & Insomnia Recovery Guide",
    date: "Sep 2026",
    pdfUrl: "/assets/guides/clinical-sleep-hygiene-guide.pdf",
    fileSize: "1.4 MB",
    category: "Sleep Care"
  },
  {
    id: "workplace-burnout-boundaries",
    title: "Navigating Burnout & Workplace Chronic Stress Manual",
    date: "Sep 2026",
    pdfUrl: "/assets/guides/workplace-burnout-boundaries.pdf",
    fileSize: "920 KB",
    category: "Occupational Health"
  },
  {
    id: "couples-conflict-deescalation",
    title: "Couples Communication: De-escalating Conflict & Emotional Attunement",
    date: "Oct 2026",
    pdfUrl: "/assets/guides/couples-communication-guide.pdf",
    fileSize: "1.1 MB",
    category: "Relationships"
  },
  {
    id: "parenting-anxious-children",
    title: "Parenting Anxious Children: Emotion Coaching & Scaffolding Handbook",
    date: "Sep 2026",
    pdfUrl: "/assets/guides/parenting-anxious-children-guide.pdf",
    fileSize: "1.6 MB",
    category: "Child Psychology"
  },
  {
    id: "social-anxiety-exposure-hierarchy",
    title: "Social Anxiety Exposure Hierarchy: Step-by-Step Desensitization",
    date: "Oct 2026",
    pdfUrl: "/assets/guides/social-anxiety-exposure-guide.pdf",
    fileSize: "780 KB",
    category: "Anxiety & Panic"
  },
  {
    id: "somatic-vagus-nerve-reset",
    title: "Vagus Nerve & Somatic Nervous System Regulation Pocket Guide",
    date: "Oct 2026",
    pdfUrl: "/assets/guides/somatic-nervous-system-regulation.pdf",
    fileSize: "1.3 MB",
    category: "Somatic Practices"
  },
  {
    id: "erp-intrusive-thoughts",
    title: "Exposure & Response Prevention (ERP) for Intrusive Thoughts Primer",
    date: "Sep 2026",
    pdfUrl: "/assets/guides/erp-intrusive-thoughts-primer.pdf",
    fileSize: "960 KB",
    category: "CBT Tools"
  },
  {
    id: "behavioral-activation-depression",
    title: "Overcoming Low Motivation: Behavioral Activation Action Plan",
    date: "Oct 2026",
    pdfUrl: "/assets/guides/behavioral-activation-action-plan.pdf",
    fileSize: "1.0 MB",
    category: "Depression & Mood"
  },
  {
    id: "adult-adhd-executive-functions",
    title: "Adult ADHD Executive Functioning Strategies & Scaffolding",
    date: "Sep 2026",
    pdfUrl: "/assets/guides/adult-adhd-executive-functioning.pdf",
    fileSize: "1.5 MB",
    category: "Neurodiversity"
  },
  {
    id: "setting-healthy-boundaries",
    title: "Setting Healthy Interpersonal Boundaries with Family & Work",
    date: "Oct 2026",
    pdfUrl: "/assets/guides/interpersonal-boundaries-handbook.pdf",
    fileSize: "890 KB",
    category: "Relationships"
  }
];

export async function fetchAllGuides(): Promise<PDFGuide[]> {
  try {
    const res = await fetch(
      `${BASE_URL}/api/method/softmind_custom.cms_api.knowledge_center_api.get_knowledge_center`,
      { cache: "no-store" }
    );

    if (res.ok) {
      const json = await res.json();
      const items =
        json.message?.data ||
        json.message ||
        (Array.isArray(json.data) ? json.data : []);

      if (Array.isArray(items)) {
        const apiGuides: PDFGuide[] = items
          .filter((item: any) => item && item.title && item.title.trim().length > 0)
          .map(
            (item: { title: string; pdf_attach: string | null; date: string | null; creation: string }, idx: number) => {
              const pdfUrl = item.pdf_attach
                ? item.pdf_attach.startsWith("/")
                  ? `${BASE_URL}${item.pdf_attach}`
                  : item.pdf_attach
                : null;

              return {
                id: `api-guide-${idx}-${encodeURIComponent(item.title)}`,
                title: item.title,
                date: item.date || item.creation?.split(" ")[0] || null,
                pdfUrl,
                fileSize: "PDF Document",
                category: "Clinical Guide",
              };
            }
          );

        return apiGuides;
      }
    }
  } catch (err) {
    console.error("[fetchAllGuides] Failed to fetch from API:", err);
  }

  return [];
}

