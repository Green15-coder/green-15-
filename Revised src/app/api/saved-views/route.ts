import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { savedViewSchema } from "@/lib/validators";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const views = await prisma.savedView.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(views);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const parsed = savedViewSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid saved view payload", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const view = await prisma.savedView.create({
    data: {
      userId: session.user.id,
      name: parsed.data.name,
      filters: parsed.data.filters,
    },
  });

  return NextResponse.json(view);
}
