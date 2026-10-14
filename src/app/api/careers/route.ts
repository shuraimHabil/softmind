import { NextRequest, NextResponse } from "next/server";

const BASE_URL = (
  process.env.ENQUIRY_API_BASE_URL ?? process.env.NEXT_PUBLIC_BASE_URL ?? "https://devsoftminderp.m.frappe.cloud"
).replace(/\/+$/, "");

export async function POST(req: NextRequest) {
  try {
    // The client sends multipart/form-data (to include the CV file)
    const formData = await req.formData();

    // Forward the multipart payload directly to Frappe
    const url = `${BASE_URL}/api/method/softmind_custom.api.career.submit_career_application`;

    const res = await fetch(url, {
      method: "POST",
      body: formData,
      // Do NOT set Content-Type manually — fetch sets the correct
      // multipart/form-data boundary automatically when body is FormData
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      console.error("Career API error:", res.status, JSON.stringify(data));
      return NextResponse.json(
        { error: `API error ${res.status}`, detail: data },
        { status: res.status }
      );
    }

    // Frappe returns { message: { success, status_code, message, data } }
    const payload = data?.message ?? data;
    if (payload?.success === false) {
      console.error("Career API rejected:", JSON.stringify(payload));
      return NextResponse.json(
        { error: payload?.message ?? "Submission failed" },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, data: payload });
  } catch (err) {
    console.error("Career proxy error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
