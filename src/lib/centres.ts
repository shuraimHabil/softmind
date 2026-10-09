import axios from "axios";
import { Clinician, stripHtml, toTitleCase } from "./clinicians";

export interface Centre {
  id: string;
  slug: string;
  name: string;
  erpName: string;  // Original Service_unit_name from Frappe — used for enquiry submissions
  shortName: string;
  city: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  fullAddress: string;
  hours: string;
  thumbnail: string;
  gallery: {
    main: string;
    sub1: string;
    sub2: string;
  };
  facilities: string[];
  clinicianIds: (number | string)[];
  clinicians?: Clinician[];
  googleMapUrl?: string;
  googleReviewUrl?: string;
  mapQuery: string;
}

export const centres: Centre[] = [];

const BASE_URL = (process.env.NEXT_PUBLIC_BASE_URL || "https://devsoftminderp.m.frappe.cloud").replace(/\/+$/, "");

function cleanPhone(raw?: string): string {
  if (!raw) return "";
  return String(raw).replace(/[,\s]+$/, "").trim();
}

function formatWorkingHours(raw?: string): string {
  if (!raw) return "";
  const trimmed = String(raw).trim();
  const m = trimmed.match(/^(\d{1,2})\s*-\s*(\d{1,2})$/);
  if (m) {
    const s = parseInt(m[1], 10);
    const e = parseInt(m[2], 10);
    const sp = s < 8 ? "PM" : "AM";
    const ep = e < 12 ? "PM" : "AM";
    return `${s}:00 ${sp} – ${e}:00 ${ep}`;
  }
  return trimmed;
}

function parseAddressObj(addr: any, fallbackCity: string, cleanName: string): { address: string; fullAddress: string; phone?: string; email?: string } {
  if (addr && typeof addr === "object") {
    const parts = [
      addr.address_line1,
      addr.address_line2,
      addr.city,
      addr.state,
      addr.country
    ].filter(Boolean);
    const full = parts.join(", ") || `${cleanName}, ${fallbackCity}`;
    return {
      address: full,
      fullAddress: full,
      phone: addr.phone ? cleanPhone(addr.phone) : undefined,
      email: addr.email || undefined
    };
  }
  const cleanStr = typeof addr === "string" ? stripHtml(addr) : "";
  return {
    address: cleanStr || `${cleanName}, ${fallbackCity}`,
    fullAddress: cleanStr || `${cleanName}, ${fallbackCity}`
  };
}

export async function fetchCentres(): Promise<Centre[]> {
  try {
    const res = await axios.get(
      `${BASE_URL}/api/method/softmind_custom.api.centers_api.get_centres`,
      { headers: { "Cache-Control": "no-cache" }, timeout: 10000 }
    );
    const json = res.data;
    const data = json.message?.data || json.message || [];
    
    if (!Array.isArray(data) || data.length === 0) {
      return [];
    }

    const apiCentres = await Promise.all(
      data.map(async (item: any) => {
        const rawName = item["Service_unit_name"] || item.Service_unit_name || item.service_unit_name || item.centre_name || item.title || item.name || "Softmind Centre";
        const cleanName = stripHtml(rawName);
        const erpName = String(item.name || rawName).trim();
        const rawSlug = item["id/slug"] || item["id/website_slug"] || item.slug || item.id || cleanName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        const slug = String(rawSlug).trim();

        // Fetch detail in parallel to get full address, working hours, phone, images, maps
        let detail: any = null;
        try {
          const dRes = await axios.get(
            `${BASE_URL}/api/method/softmind_custom.api.centers_api.get_centre_detail?centre=${encodeURIComponent(slug)}`,
            { headers: { "Cache-Control": "no-cache" }, timeout: 5000 }
          );
          detail = dRes.data.message?.data || dRes.data.message;
        } catch {
          // fallback to summary
        }

        const cityState = (detail?.city || item.city)
          ? `${stripHtml(detail?.city || item.city)}${(detail?.state || item.state) ? ", " + stripHtml(detail?.state || item.state) : ""}`
          : "Kerala";

        const cleanTagline = stripHtml(detail?.tagline || detail?.description || item.tagline || item.description || item.about || "");
        
        const parsedAddr = parseAddressObj(detail?.address || item.address, cityState, cleanName);

        const phone = cleanPhone(parsedAddr.phone || detail?.phone || item.phone || item.mobile || "");
        const email = parsedAddr.email || detail?.email || item.email || "";
        const hours = formatWorkingHours(detail?.working_hours || detail?.hours || item.working_hours || item.hours || "");

        const imagePath = detail?.images?.[0] || detail?.image || item.image || item.thumbnail || item.main_image;
        const encodedImg = imagePath ? encodeURI(imagePath) : "/invalid-image.jpg";
        const images = Array.isArray(detail?.images) ? detail.images.map((img: string) => encodeURI(img)) : [];

        const facilities = Array.isArray(detail?.facilities && detail.facilities.length > 0 ? detail.facilities : item.facilities)
          ? (detail?.facilities?.length ? detail.facilities : item.facilities).map((f: any) => typeof f === "string" ? stripHtml(f) : stripHtml(f.title || f.name || "")).filter(Boolean)
          : [];

        const clinicians = Array.isArray(detail?.clinicians)
          ? detail.clinicians.map((c: any) => ({
              id: String(c.id || c.slug || c.name).toLowerCase().replace(/[^a-z0-9]+/g, "-"),
              slug: String(c.id || c.slug || c.name).toLowerCase().replace(/[^a-z0-9]+/g, "-"),
              name: toTitleCase(stripHtml(c.name || "")),
              role: stripHtml(c.title || c.role || "Consultant"),
              eyebrow: stripHtml(c.title || c.role || "Consultant"),
              tagline: "",
              desc: "",
              img: c.image ? encodeURI(c.image) : "/invalid-image.jpg",
              categories: ["All"],
              experience: "",
              experienceSub: "",
              sessions: "",
              sessionsSub: "",
              license: "",
              licenseSub: "",
              aboutParagraphs: [],
              socialLinks: {},
              languages: ["English", "Malayalam"],
              quote: "",
              quoteAuthor: "",
              expertise: [],
              articles: []
            } as Clinician))
          : undefined;

        const googleMapUrl = detail?.google_map_url || item.google_map_url || undefined;
        const googleReviewUrl = detail?.google_review_url || item.google_review_url || undefined;
        const mapQuery = detail?.map_query || item.map_query || `${encodeURIComponent(cleanName)},+${encodeURIComponent(detail?.city || item.city || "Kerala")}`;

        return {
          id: slug,
          slug,
          name: cleanName,
          erpName,
          shortName: stripHtml(detail?.short_name || item.short_name || item.shortName || cleanName.replace(/^Softmind\s*/i, "")),
          city: cityState,
          tagline: cleanTagline,
          phone,
          email,
          address: parsedAddr.address,
          fullAddress: parsedAddr.fullAddress,
          hours,
          thumbnail: encodedImg,
          gallery: {
            main: images[0] || encodedImg,
            sub1: images[1] || encodedImg,
            sub2: images[2] || encodedImg,
          },
          facilities,
          clinicianIds: [],
          clinicians,
          googleMapUrl,
          googleReviewUrl,
          mapQuery
        } as Centre;
      })
    );

    return apiCentres;
  } catch (err) {
    console.error("fetchCentres error:", err);
    return [];
  }
}

export async function fetchCentreBySlug(slug: string): Promise<Centre | undefined> {
  const allCentres = await fetchCentres();
  const normalized = slug.toLowerCase().trim();
  
  let summaryItem = allCentres.find((c) => c.slug === normalized || c.id === normalized);
  const targetSlug = summaryItem ? summaryItem.slug : normalized;

  try {
    const res = await axios.get(
      `${BASE_URL}/api/method/softmind_custom.api.centers_api.get_centre_detail?centre=${encodeURIComponent(targetSlug)}`,
      { headers: { "Cache-Control": "no-cache" }, timeout: 10000 }
    );
    const json = res.data;
    const detail = json.message?.data || json.message;
    if (detail && (detail.id || detail.name || detail.service_unit_name)) {
        const rawName = detail["Service_unit_name"] || detail.Service_unit_name || detail.service_unit_name || detail.centre_name || summaryItem?.name || "Softmind Centre";
        const cleanName = stripHtml(rawName);
        const cleanTagline = stripHtml(detail.tagline || detail.description || summaryItem?.tagline || "");
        
        const cityState = detail.city
          ? `${stripHtml(detail.city)}${detail.state ? ", " + stripHtml(detail.state) : ""}`
          : summaryItem?.city || "Kerala";

        const parsedAddr = parseAddressObj(detail.address, cityState, cleanName);

        const phone = cleanPhone(parsedAddr.phone || detail.phone || summaryItem?.phone || "");
        const email = parsedAddr.email || detail.email || summaryItem?.email || "";
        const hours = formatWorkingHours(detail.working_hours || detail.hours || summaryItem?.hours || "");

        const images = Array.isArray(detail.images) ? detail.images.map((img: string) => encodeURI(img)) : [];
        const mainImg = images[0] || detail.image || summaryItem?.thumbnail || "/invalid-image.jpg";

        const mappedFacilities: string[] = Array.isArray(detail.facilities)
          ? detail.facilities.map((f: any) => typeof f === "string" ? stripHtml(f) : stripHtml(f.title || f.name || "")).filter(Boolean)
          : summaryItem?.facilities || [];

        const mappedClinicians: Clinician[] | undefined = Array.isArray(detail.clinicians)
          ? detail.clinicians.map((c: any) => ({
              id: String(c.id || c.slug || c.name).toLowerCase().replace(/[^a-z0-9]+/g, "-"),
              slug: String(c.id || c.slug || c.name).toLowerCase().replace(/[^a-z0-9]+/g, "-"),
              name: toTitleCase(stripHtml(c.name || "")),
              role: stripHtml(c.title || c.role || "Consultant"),
              eyebrow: stripHtml(c.title || c.role || "Consultant"),
              tagline: "",
              desc: "",
              img: c.image ? encodeURI(c.image) : "/invalid-image.jpg",
              categories: ["All"],
              experience: "",
              experienceSub: "",
              sessions: "",
              sessionsSub: "",
              license: "",
              licenseSub: "",
              aboutParagraphs: [],
              socialLinks: {},
              languages: ["English", "Malayalam"],
              quote: "",
              quoteAuthor: "",
              expertise: [],
              articles: []
            } as Clinician))
          : summaryItem?.clinicians;

        const detailCentre = {
          id: detail.id || summaryItem?.id || targetSlug,
          slug: detail.id || summaryItem?.slug || targetSlug,
          name: cleanName,
          erpName: summaryItem?.erpName || cleanName,
          shortName: stripHtml(detail.short_name || summaryItem?.shortName || cleanName.replace(/^Softmind\s*/i, "")),
          city: cityState,
          tagline: cleanTagline,
          phone,
          email,
          address: parsedAddr.address || summaryItem?.address || `${cleanName}, ${cityState}`,
          fullAddress: parsedAddr.fullAddress || summaryItem?.fullAddress || `${cleanName}, ${cityState}`,
          hours,
          thumbnail: mainImg,
          gallery: {
            main: mainImg,
            sub1: images[1] || summaryItem?.gallery?.sub1 || mainImg,
            sub2: images[2] || summaryItem?.gallery?.sub2 || mainImg,
          },
          facilities: mappedFacilities,
          clinicianIds: summaryItem?.clinicianIds || [],
          clinicians: mappedClinicians,
          googleMapUrl: detail.google_map_url || summaryItem?.googleMapUrl || undefined,
          googleReviewUrl: detail.google_review_url || summaryItem?.googleReviewUrl || undefined,
          mapQuery: detail.map_query || `${encodeURIComponent(cleanName)},+${encodeURIComponent(detail.city || "Kerala")}`
        } as Centre;

        if (detailCentre.googleMapUrl && detailCentre.googleMapUrl.includes("maps.app.goo.gl")) {
          try {
            const redirectRes = await axios.get(detailCentre.googleMapUrl, { maxRedirects: 5, validateStatus: () => true });
            const finalUrl = redirectRes.request?.res?.responseUrl || redirectRes.request?.res?.url || redirectRes.request?._currentUrl || detailCentre.googleMapUrl;
            const coordsMatch = finalUrl.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
            if (coordsMatch) {
              detailCentre.mapQuery = `${coordsMatch[1]},${coordsMatch[2]}`;
            } else {
              const placeMatch = finalUrl.match(/place\/([^\/]+)\//);
              if (placeMatch) {
                detailCentre.mapQuery = placeMatch[1];
              }
            }
          } catch (err) {
            console.error("Failed to resolve short map URL", err);
          }
        }

        return detailCentre;
      }
  } catch (err) {
    console.error("fetchCentreBySlug error:", err);
  }

  return summaryItem;
}

export function getCentreBySlug(slug: string): Centre | undefined {
  const normalized = slug.toLowerCase().trim();
  return centres.find((c) => c.slug === normalized || c.id === normalized);
}

export function getAllCentres(): Centre[] {
  return centres;
}
