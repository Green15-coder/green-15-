import prisma from "@/lib/prisma";

export async function getLuckyClover() {
  return prisma.play.findFirst({
    where: { status: "active", gameTime: { gte: new Date() } },
    orderBy: { rankScore: "desc" },
  });
}

export async function getTop15(filters?: {
  sport?: string;
  market?: string;
  grade?: string;
}) {
  return prisma.play.findMany({
    where: {
      status: "active",
      gameTime: { gte: new Date() },
      ...(filters?.sport ? { sport: filters.sport } : {}),
      ...(filters?.market ? { market: filters.market } : {}),
      ...(filters?.grade ? { grade: filters.grade } : {}),
    },
    orderBy: { rankScore: "desc" },
    take: 15,
  });
}

export async function getPlayById(id: string) {
  return prisma.play.findUnique({ where: { id } });
}
