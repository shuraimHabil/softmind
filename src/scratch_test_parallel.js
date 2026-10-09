const axios = require('axios');

async function test() {
  const BASE_URL = 'https://devsoftminderp.m.frappe.cloud';
  const start = Date.now();
  const res = await axios.get(BASE_URL + '/api/method/softmind_custom.api.centers_api.get_centres');
  const data = res.data.message?.data || res.data.message || [];
  console.log('List fetched in', Date.now() - start, 'ms. Count:', data.length);
  
  const detailStart = Date.now();
  const details = await Promise.all(
    data.map(async (item) => {
      const slug = item["id/website_slug"] || item.slug || item.id || item.name;
      try {
        const dRes = await axios.get(`${BASE_URL}/api/method/softmind_custom.api.centers_api.get_centre_detail?centre=${encodeURIComponent(slug)}`, { timeout: 5000 });
        return dRes.data.message?.data || dRes.data.message;
      } catch (e) {
        return null;
      }
    })
  );
  console.log('All 4 details fetched in parallel in', Date.now() - detailStart, 'ms');
  console.log('Details preview:', details.map(d => ({ slug: d?.['id/slug'], phone: d?.address?.phone, hours: d?.working_hours, map: d?.google_map_url })));
}

test().catch(console.error);
