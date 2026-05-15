import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { getUserSettings, upsertUserSettings } from "@/lib/settings";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const settings = await getUserSettings(session.user.id);
  return NextResponse.json(settings);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const settings = await upsertUserSettings(session.user.id, body);
  return NextResponse.json(settings);
}
