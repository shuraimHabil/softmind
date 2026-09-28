import { NextResponse } from "next/server";
import { fetchCentres } from "@/lib/centres";

export async function GET() {
  try {
    const centres = await fetchCentres();
    return NextResponse.json(centres);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
