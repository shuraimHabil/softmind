const axios = require('axios');

async function test() {
  const BASE_URL = 'https://devsoftminderp.m.frappe.cloud';
  for (const slug of ['aroor', 'Aroor', 'Aroor - SW']) {
    try {
      const res = await axios.get(`${BASE_URL}/api/method/softmind_custom.api.centers_api.get_centre_detail?centre=${encodeURIComponent(slug)}`);
      console.log(`Detail for ${slug}:`, JSON.stringify(res.data, null, 2));
    } catch (e) {
      console.log(`Error for ${slug}:`, e.response?.status, e.response?.data || e.message);
    }
  }
}

test().catch(console.error);
