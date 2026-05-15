import { NextRequest, NextResponse } from "next/server";
import { saveTrackerEntry, getTrackerByUser } from "@/lib/tracker";
import { getCurrentUserId } from "@/lib/auth";

export async function GET() {
  try {
    const userId = await getCurrentUserId();
    const entries = await getTrackerByUser(userId);
    return NextResponse.json(entries);
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const userId = await getCurrentUserId();
    const body = await req.json();
    const entry = await saveTrackerEntry({ userId, ...body });
    return NextResponse.json(entry);
  } catch {
    return NextResponse.json({ error: "Failed to save entry" }, { status: 500 });
  }
}
