import { NextRequest, NextResponse } from "next/server";
import { getCurrentUserId } from "@/lib/auth";
import { upsertUserSettings, getUserSettings } from "@/lib/settings";

export async function GET() {
  try {
    const userId = await getCurrentUserId();
    const settings = await getUserSettings(userId);
    return NextResponse.json(settings);
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const userId = await getCurrentUserId();
    const body = await req.json();
    const settings = await upsertUserSettings(userId, body);
    return NextResponse.json(settings);
  } catch {
    return NextResponse.json({ error: "Failed to save settings" }, { status: 500 });
  }
}
