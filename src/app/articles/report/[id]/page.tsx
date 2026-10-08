import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { notFound } from "next/navigation";

export default async function ReportPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);

  let report = null;
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://devsoftminderp.m.frappe.cloud";
    const res = await fetch(`${baseUrl}/api/method/softmind_custom.cms_api.weekly_research_api.get_weekly_research_reports?title=${encodeURIComponent(decodedId)}`, {
      next: { revalidate: 60 }
    });
    if (res.ok) {
      const json = await res.json();
      if (json.message?.success && Array.isArray(json.message.data) && json.message.data.length > 0) {
        report = json.message.data.find((r: any) =>
          r.title?.toLowerCase() === decodedId.toLowerCase() ||
          r.name === decodedId ||
          r.title?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") === decodedId.toLowerCase()
        ) || json.message.data[0];
      }
    }
  } catch (err) {
    console.error("Failed to fetch research report", err);
  }

  if (!report) {
    notFound();
  }

  const content = report.text_area || report.content || "Content not available.";
  const researcher = report.researcher?.name || report.researcher || "Unknown Researcher";
  const dateStr = report.date_of_research_report || report.date || report.creation?.split(" ")[0] || "Unknown Date";
  const referenceText = Array.isArray(report.reference) ? report.reference.join(", ") : report.reference;

  return (
    /* pt-[108px] accounts for the fixed header: 36px topbar + 72px nav */
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800" style={{ paddingTop: "108px", paddingBottom: "64px" }}>
      <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: "820px", margin: "0 auto" }}>
        
        {/* Back link — sits above the A4 card */}
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 text-sm font-medium transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Articles
        </Link>

        {/* A4-style paper card */}
        <div
          className="bg-white shadow-xl border border-slate-200 relative overflow-hidden"
          style={{ padding: "60px 80px", minHeight: "1056px" }}
        >
          {/* Header */}
          <header style={{ marginBottom: "48px", paddingBottom: "32px", borderBottom: "1px solid #e2e8f0", textAlign: "center" }}>
            <h1 style={{ fontFamily: "Georgia, serif", fontSize: "2.25rem", fontWeight: "700", color: "#0f172a", lineHeight: 1.3, marginBottom: "24px", wordWrap: "break-word" }}>
              {report.title}
            </h1>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "24px", fontSize: "0.875rem", color: "#64748b", fontWeight: 500 }}>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Calendar className="w-4 h-4" /> {dateStr}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <User className="w-4 h-4" /> {researcher}
              </span>
            </div>
          </header>

          {/* Body */}
          <main style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: "1.9", color: "#1e293b", whiteSpace: "pre-wrap" }}>
            {content}

            {referenceText && (
              <div style={{ marginTop: "56px", paddingTop: "32px", borderTop: "1px solid #f1f5f9" }}>
                <h2 style={{ fontFamily: "inherit", fontSize: "0.7rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", color: "#94a3b8", marginBottom: "20px" }}>
                  References
                </h2>
                <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: "1.8" }}>
                  {referenceText}
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
