import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { trackerEntrySchema } from "@/lib/validators";

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
  const parsed = trackerEntrySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid tracker payload", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const entry = await prisma.trackerEntry.create({
    data: {
      userId: session.user.id,
      ...parsed.data,
    },
  });

  return NextResponse.json(entry);
}
