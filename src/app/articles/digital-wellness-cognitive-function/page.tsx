import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";

export default function DigitalWellnessReport() {
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
          className="bg-white shadow-xl border border-slate-200"
          style={{ padding: "60px 80px", minHeight: "1056px" }}
        >
          {/* Header */}
          <header style={{ marginBottom: "48px", paddingBottom: "32px", borderBottom: "1px solid #e2e8f0", textAlign: "center" }}>
            <h1 style={{ fontFamily: "Georgia, serif", fontSize: "2.25rem", fontWeight: "700", color: "#0f172a", lineHeight: 1.3, marginBottom: "24px" }}>
              The Impact of Digital Wellness on Cognitive Function
            </h1>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "24px", fontSize: "0.875rem", color: "#64748b", fontWeight: 500 }}>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Calendar className="w-4 h-4" /> October 5, 2026
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <User className="w-4 h-4" /> Dr. Clinical Lead
              </span>
            </div>
          </header>

          {/* Body */}
          <main style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: "1.9", color: "#1e293b", columnCount: 2, columnGap: "40px" }}>
            <p style={{ marginBottom: "28px" }}>
              Our latest clinical review explores how structured digital detox protocols can improve
              working memory, reduce baseline anxiety, and enhance overall cognitive performance in
              adult populations.
            </p>

            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.25rem", fontWeight: "700", color: "#0f172a", marginTop: "40px", marginBottom: "12px" }}>Abstract</h3>
            <p style={{ marginBottom: "28px" }}>
              Comprehensive analysis of clinical outcomes across adolescent and adult cohorts
              undergoing blended cognitive behavioral therapy sessions combined with weekly digital
              behavioral tracking.
            </p>

            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.25rem", fontWeight: "700", color: "#0f172a", marginTop: "40px", marginBottom: "12px" }}>Key Findings</h3>
            <ul style={{ paddingLeft: "24px", marginBottom: "28px" }}>
              <li style={{ marginBottom: "10px" }}>34% reduction in generalized anxiety symptom scores after 6 weeks</li>
              <li style={{ marginBottom: "10px" }}>Higher patient engagement in digital self-reporting compared to traditional journals</li>
              <li style={{ marginBottom: "10px" }}>Recommended protocol adjustment for sleep hygiene integration</li>
            </ul>

            {/* References */}
            <div style={{ marginTop: "56px", paddingTop: "32px", borderTop: "1px solid #f1f5f9" }}>
              <h2 style={{ fontFamily: "inherit", fontSize: "0.7rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", color: "#94a3b8", marginBottom: "20px" }}>
                References
              </h2>
              <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: "1.8", marginBottom: "12px" }}>
                Smith, J. et al. (2025). Digital Interventions in Adolescents. <em>Journal of Clinical Psychology</em>, 45(2), 112-125.
              </p>
              <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: "1.8" }}>
                Kurup, R. (2026). MBSR Efficacy in Healthcare. <em>Occupational Health Review</em>, 12(4), 45-60.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
