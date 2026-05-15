import { NextRequest, NextResponse } from "next/server";
import { getTop15 } from "@/lib/plays";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const sport = searchParams.get("sport") ?? undefined;
  const market = searchParams.get("market") ?? undefined;
  const grade = searchParams.get("grade") ?? undefined;

  try {
    const plays = await getTop15({ sport, market, grade });
    return NextResponse.json(plays);
  } catch (err) {
    console.error("[api/plays] error:", err);
    return NextResponse.json({ error: "Failed to fetch plays" }, { status: 500 });
  }
}
