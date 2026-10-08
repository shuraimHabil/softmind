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
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800" style={{ paddingTop: "140px", paddingBottom: "64px" }}>
      <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: "820px", margin: "0 auto" }}>
        
        {/* Back link — sits above the A4 card with clear spacing */}
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 text-sm font-semibold transition-colors"
          style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}
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
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 2.8vw, 2.1rem)", fontWeight: 400, color: "#0f172a", lineHeight: 1.3, marginBottom: "24px", wordWrap: "break-word", letterSpacing: "-0.01em" }}>
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

            {report.reference && (
              <div style={{ marginTop: "56px", paddingTop: "32px", borderTop: "1px solid #f1f5f9" }}>
                {Array.isArray(report.reference) ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {report.reference.map((refItem: any, idx: number) => {
                      if (typeof refItem === "object" && refItem !== null) {
                        const title = refItem.title || refItem.reference_title || refItem.heading || "";
                        const name = refItem.name || refItem.reference_name || refItem.link || refItem.text || "";
                        return (
                          <div key={idx} style={{ display: "flex", alignItems: "baseline", gap: "8px", fontSize: "0.95rem", color: "#475569" }}>
                            {title && <span style={{ fontWeight: 600, color: "#1e293b" }}>{title}:</span>}
                            <span>{name || title || JSON.stringify(refItem)}</span>
                          </div>
                        );
                      }
                      return (
                        <div key={idx} style={{ display: "flex", alignItems: "baseline", gap: "8px", fontSize: "0.95rem", color: "#475569" }}>
                          <span style={{ fontWeight: 600, color: "#1e293b" }}>References:</span>
                          <span>{String(refItem)}</span>
                        </div>
                      );
                    })}
                  </div>
                ) : typeof report.reference === "object" ? (
                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px", fontSize: "0.95rem", color: "#475569" }}>
                    {(report.reference.title || report.reference.reference_title) && (
                      <span style={{ fontWeight: 600, color: "#1e293b" }}>
                        {report.reference.title || report.reference.reference_title}:
                      </span>
                    )}
                    <span>
                      {report.reference.name || report.reference.reference_name || report.reference.link || JSON.stringify(report.reference)}
                    </span>
                  </div>
                ) : (
                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px", fontSize: "0.95rem", color: "#475569" }}>
                    <span style={{ fontWeight: 600, color: "#1e293b" }}>References:</span>
                    <span>{String(report.reference)}</span>
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
