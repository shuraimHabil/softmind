import axios from "axios";
import { Clinician, stripHtml } from "./clinicians";

export interface Centre {
  id: string;
  slug: string;
  name: string;
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
  mapQuery: string;
}

export const centres: Centre[] = [];

export async function fetchCentres(): Promise<Centre[]> {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/method/softmind_custom.api.centers_api.get_centres`
    );
    const json = res.data;
    const data = json.message?.data || json.message || [];
    
    if (!Array.isArray(data) || data.length === 0) {
      return [];
    }

    const apiCentres = data.map((item: any) => {
      const rawName = item.name || item.centre_name || item.title || "Softmind Centre";
      const cleanName = stripHtml(rawName);
      const cleanTagline = stripHtml(item.tagline || item.description || item.about || "");
      const cleanAddress = stripHtml(item.address || "");
      const cleanFullAddress = stripHtml(item.full_address || item.address || "");
      
      const rawSlug = item["id/slug"] || item.slug || item.id || cleanName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      const slug = String(rawSlug).trim();

      const imagePath = item.image || item.thumbnail || item.main_image;
      const encodedImg = imagePath ? encodeURI(imagePath) : "/invalid-image.jpg";

      const cityState = item.city 
        ? `${stripHtml(item.city)}${item.state ? ", " + stripHtml(item.state) : ""}`
        : "Kerala";

      return {
        id: slug,
        slug: slug,
        name: cleanName,
        shortName: stripHtml(item.short_name || item.shortName || cleanName.replace(/^Softmind\s*/i, "")),
        city: cityState,
        tagline: cleanTagline,
        phone: item.phone || item.mobile || "",
        email: item.email || "",
        address: cleanAddress || `${cleanName}, ${cityState}`,
        fullAddress: cleanFullAddress || cleanAddress || `${cleanName}, ${cityState}`,
        hours: item.hours || "",
        thumbnail: encodedImg,
        gallery: {
          main: item.gallery?.main ? encodeURI(item.gallery.main) : encodedImg,
          sub1: item.gallery?.sub1 ? encodeURI(item.gallery.sub1) : encodedImg,
          sub2: item.gallery?.sub2 ? encodeURI(item.gallery.sub2) : encodedImg,
        },
        facilities: Array.isArray(item.facilities)
          ? item.facilities.map((f: any) => typeof f === "string" ? stripHtml(f) : stripHtml(f.title || f.name || "")).filter(Boolean)
          : Array.isArray(item.services)
          ? item.services.map((f: any) => typeof f === "string" ? stripHtml(f) : stripHtml(f.title || f.name || "")).filter(Boolean)
          : typeof item.facilities === "string"
          ? item.facilities.split(/,|\n/).map((f: string) => stripHtml(f.trim())).filter(Boolean)
          : [],
        clinicianIds: Array.isArray(item.clinician_ids)
          ? item.clinician_ids
          : Array.isArray(item.clinicians)
          ? item.clinicians.map((c: any) => c.id || c.slug || c)
          : [],
        mapQuery: item.map_query || `${encodeURIComponent(cleanName)},+${encodeURIComponent(item.city || "Kerala")}`
      } as Centre;
    });

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
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/method/softmind_custom.api.centers_api.get_centre_detail?centre=${encodeURIComponent(targetSlug)}`
    );
    const json = res.data;
    const detail = json.message?.data || json.message;
    if (detail && (detail.id || detail.name)) {
        const rawName = detail.name || detail.centre_name || summaryItem?.name || "Softmind Centre";
        const cleanName = stripHtml(rawName);
        const cleanTagline = stripHtml(detail.tagline || detail.description || summaryItem?.tagline || "");
        const cleanAddress = stripHtml(detail.address || summaryItem?.address || "");
        const cleanFullAddress = stripHtml(detail.full_address || detail.address || summaryItem?.fullAddress || "");
        
        const cityState = detail.city
          ? `${stripHtml(detail.city)}${detail.state ? ", " + stripHtml(detail.state) : ""}`
          : summaryItem?.city || "Kerala";

        const images = Array.isArray(detail.images) ? detail.images.map((img: string) => encodeURI(img)) : [];
        const mainImg = images[0] || detail.image || summaryItem?.thumbnail || "/invalid-image.jpg";

        const mappedFacilities: string[] = Array.isArray(detail.facilities)
          ? detail.facilities.map((f: any) => typeof f === "string" ? stripHtml(f) : stripHtml(f.title || f.name || "")).filter(Boolean)
          : summaryItem?.facilities || [];

        const mappedClinicians: Clinician[] | undefined = Array.isArray(detail.clinicians)
          ? detail.clinicians.map((c: any) => ({
              id: String(c.id || c.slug || c.name).toLowerCase().replace(/[^a-z0-9]+/g, "-"),
              slug: String(c.id || c.slug || c.name).toLowerCase().replace(/[^a-z0-9]+/g, "-"),
              name: stripHtml(c.name || ""),
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

        return {
          id: detail.id || summaryItem?.id || targetSlug,
          slug: detail.id || summaryItem?.slug || targetSlug,
          name: cleanName,
          shortName: stripHtml(detail.short_name || cleanName.replace(/^Softmind\s*/i, "")),
          city: cityState,
          tagline: cleanTagline,
          phone: detail.phone || summaryItem?.phone || "",
          email: detail.email || summaryItem?.email || "",
          address: cleanAddress || `${cleanName}, ${cityState}`,
          fullAddress: cleanFullAddress || cleanAddress || `${cleanName}, ${cityState}`,
          hours: detail.hours || summaryItem?.hours || "",
          thumbnail: mainImg,
          gallery: {
            main: mainImg,
            sub1: images[1] || summaryItem?.gallery?.sub1 || mainImg,
            sub2: images[2] || summaryItem?.gallery?.sub2 || mainImg,
          },
          facilities: mappedFacilities,
          clinicianIds: summaryItem?.clinicianIds || [],
          clinicians: mappedClinicians,
          googleMapUrl: detail.google_map_url || undefined,
          mapQuery: detail.map_query || `${encodeURIComponent(cleanName)},+${encodeURIComponent(detail.city || "Kerala")}`
        } as Centre;
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
