/**
 * Site URL and asset resolution utilities for Open Graph and metadata
 */

export function getSiteUrl(): string {
  // 1. Explicit environment variable (if user configures a custom production domain in Vercel)
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, "");
  }

  // 2. Vercel project production domain
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  // 3. Vercel deployment URL
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // 4. Default active deployment fallback
  return "https://softmind.vercel.app";
}

export function getFullImageUrl(imagePath?: string | null): string {
  if (!imagePath || !imagePath.trim()) {
    return `${getSiteUrl()}/og/default.jpg`;
  }

  const clean = imagePath.trim();

  // Already an absolute HTTP(S) URL
  if (clean.startsWith("http://") || clean.startsWith("https://")) {
    return clean;
  }

  // ERP / Frappe CMS uploaded files (/files/...)
  if (clean.startsWith("/files/")) {
    const frappeBase = (
      process.env.NEXT_PUBLIC_BASE_URL || "https://devsoftminderp.m.frappe.cloud"
    ).replace(/\/+$/, "");
    return `${frappeBase}${clean}`;
  }

  // Relative asset within public/ (e.g. /assets/... or /og/...)
  const normalizedPath = clean.startsWith("/") ? clean : `/${clean}`;
  return `${getSiteUrl()}${normalizedPath}`;
}
