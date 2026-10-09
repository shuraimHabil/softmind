const axios = require('axios');

async function test() {
  const BASE_URL = 'https://devsoftminderp.m.frappe.cloud';
  try {
    const res = await axios.get(`${BASE_URL}/api/method/softmind_custom.api.non_clinicians.get_employee_list`);
    console.log('Employee list response:', JSON.stringify(res.data, null, 2));
  } catch (e) {
    console.error('API error:', e.response?.status, e.response?.data || e.message);
  }
}

test().catch(console.error);
