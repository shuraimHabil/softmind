export interface WeeklyResearchReport {
  name?: string;
  title: string;
  researcher?: {
    id?: string;
    name?: string;
  } | string;
  date_of_research_report?: string;
  date?: string;
  text_area?: string;
  content?: string;
  reference?: string[] | string;
  creation?: string;
  modified?: string;
}

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://devsoftminderp.m.frappe.cloud";

export async function fetchWeeklyResearchReports(): Promise<WeeklyResearchReport[]> {
  try {
    const res = await fetch(
      `${BASE_URL}/api/method/softmind_custom.cms_api.weekly_research_api.get_weekly_research_reports`,
      { cache: "no-store" }
    );

    if (res.ok) {
      const json = await res.json();
      const items =
        json.message?.data ||
        json.message ||
        (Array.isArray(json.data) ? json.data : []);

      if (Array.isArray(items)) {
        return items.filter(
          (item: any) => item && item.title && item.title.trim().length > 0
        );
      }
    }
  } catch (err) {
    console.error("Failed to fetch weekly research reports:", err);
  }

  return [];
}
