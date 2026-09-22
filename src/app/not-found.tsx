import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Softmind Wellness",
  description: "The page you are looking for does not exist.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem", padding: "4rem 1rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 600, color: "#0f172a" }}>Page Not Found</h1>
      <p style={{ color: "#64748b", maxWidth: "380px" }}>
        The page you are looking for does not exist or may have moved.
      </p>
      <Link href="/" style={{ background: "#0d9488", color: "#fff", padding: "10px 24px", borderRadius: "30px", textDecoration: "none", fontWeight: 600 }}>
        Go to Homepage
      </Link>
    </main>
  );
}
