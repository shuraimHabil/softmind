const axios = require('axios');

const BASE_URL = 'https://devsoftminderp.m.frappe.cloud';

function cleanPhone(raw) {
  if (!raw) return "";
  return String(raw).replace(/[,\s]+$/, "").trim();
}

function formatHours(raw) {
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

function parseAddress(addr, fallback) {
  if (!addr) return fallback || "";
  if (typeof addr === "string") return addr.trim();
  if (typeof addr === "object") {
    const parts = [
      addr.address_line1,
      addr.address_line2,
      addr.city,
      addr.state,
      addr.country
    ].filter(Boolean);
    return parts.join(", ") || fallback || "";
  }
  return fallback || "";
}

async function test() {
  const res = await axios.get(`${BASE_URL}/api/method/softmind_custom.api.centers_api.get_centres`);
  const data = res.data.message?.data || res.data.message || [];
  
  const centres = await Promise.all(
    data.map(async (item) => {
      const slug = String(item["id/website_slug"] || item.slug || item.id || item.name).trim();
      let detail = null;
      try {
        const dRes = await axios.get(`${BASE_URL}/api/method/softmind_custom.api.centers_api.get_centre_detail?centre=${encodeURIComponent(slug)}`, { timeout: 5000 });
        detail = dRes.data.message?.data || dRes.data.message;
      } catch (e) {}

      const addrObj = (detail && typeof detail.address === "object" ? detail.address : null);
      const rawPhone = addrObj?.phone || detail?.phone || item.phone || item.mobile || "";
      const rawEmail = addrObj?.email || detail?.email || item.email || "";
      const rawHours = detail?.working_hours || detail?.hours || item.working_hours || item.hours || "";
      const address = parseAddress(detail?.address || item.address, item.city);

      return {
        slug,
        name: item.Service_unit_name,
        phone: cleanPhone(rawPhone),
        email: rawEmail,
        hours: formatHours(rawHours),
        address,
        googleMapUrl: detail?.google_map_url || item.google_map_url,
        googleReviewUrl: detail?.google_review_url || item.google_review_url
      };
    })
  );

  console.log('Centres enriched:', JSON.stringify(centres, null, 2));
}

test().catch(console.error);
