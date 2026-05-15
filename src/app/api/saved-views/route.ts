import { NextRequest, NextResponse } from "next/server";
import { getCurrentUserId } from "@/lib/auth";
import { getSavedViews, createSavedView } from "@/lib/saved-views";

export async function GET() {
  try {
    const userId = await getCurrentUserId();
    const views = await getSavedViews(userId);
    return NextResponse.json(views);
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const userId = await getCurrentUserId();
    const body = await req.json();
    const view = await createSavedView(userId, body.name, body.filters ?? {});
    return NextResponse.json(view);
  } catch {
    return NextResponse.json({ error: "Failed to save view" }, { status: 500 });
  }
}
