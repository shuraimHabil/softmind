import { NextRequest, NextResponse } from "next/server";

const BASE_URL = (
  process.env.ENQUIRY_API_BASE_URL ?? process.env.NEXT_PUBLIC_BASE_URL ?? "https://devsoftminderp.m.frappe.cloud"
).replace(/\/+$/, "");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(body)) {
      if (value !== undefined && value !== null && value !== "") {
        params.set(key, String(value));
      }
    }

    const url = `${BASE_URL}/api/method/softmind_custom.api.patient_enquiry.create_patient_enquiry?${params.toString()}`;

    const res = await fetch(url, {
      method: "GET",
      headers: { "Cache-Control": "no-cache" },
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      console.error("Enquiry API error:", res.status, data);
      return NextResponse.json(
        { error: `API error ${res.status}`, detail: data },
        { status: res.status }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Enquiry proxy error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
