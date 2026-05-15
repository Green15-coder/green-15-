import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const entries = await prisma.trackerEntry.findMany({
    where: { userId: session.user.id },
    include: { play: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(entries);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const playId = String(body.playId || "");
  const units = Number(body.units ?? 1);
  const book = body.book ? String(body.book) : undefined;
  const note = body.note ? String(body.note) : undefined;

  if (!playId) {
    return NextResponse.json({ error: "playId is required" }, { status: 400 });
  }

  const entry = await prisma.trackerEntry.create({
     { userId: session.user.id, playId, units, book, note },
  });

  return NextResponse.json(entry);
}
