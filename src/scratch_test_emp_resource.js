const axios = require('axios');

async function test() {
  const BASE_URL = 'https://devsoftminderp.m.frappe.cloud';
  try {
    const res = await axios.get(`${BASE_URL}/api/resource/Employee?fields=["name","employee_name","designation","status","image"]`, {
      headers: { 'Cache-Control': 'no-cache' }
    });
    console.log('Employees:', JSON.stringify(res.data, null, 2));
  } catch (e) {
    console.error('Resource error:', e.response?.status, e.response?.data || e.message);
  }
}

test().catch(console.error);
