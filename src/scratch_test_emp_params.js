const axios = require('axios');

async function test() {
  const BASE_URL = 'https://devsoftminderp.m.frappe.cloud';
  const tests = [
    '',
    '?status=Active',
    '?status=all',
    '?active=1',
    '?include_all=1'
  ];
  for (const t of tests) {
    try {
      const res = await axios.get(`${BASE_URL}/api/method/softmind_custom.api.non_clinicians.get_employee_list${t}`);
      console.log(`Param "${t}":`, res.data);
    } catch (e) {
      console.log(`Param "${t}" Error:`, e.message);
    }
  }
}

test().catch(console.error);
