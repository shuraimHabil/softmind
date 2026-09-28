import { NextResponse } from "next/server";

const BASE_URL = (
  process.env.ENQUIRY_API_BASE_URL ?? process.env.NEXT_PUBLIC_BASE_URL ?? "https://devsoftminderp.m.frappe.cloud"
).replace(/\/+$/, "");

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const url = `${BASE_URL}/api/method/softmind_custom.api.patient_review.get_testimony`;
    const res = await fetch(url, {
      method: "GET",
      headers: { "Cache-Control": "no-cache" },
    });
    
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return NextResponse.json({ error: `API error ${res.status}`, detail: data }, { status: res.status });
    }
    
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
