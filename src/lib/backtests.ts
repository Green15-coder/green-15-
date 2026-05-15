import prisma from "@/lib/prisma";

export async function getBacktestResults(filters?: {
  sport?: string;
  grade?: string;
}) {
  return prisma.play.findMany({
    where: {
      status: "settled",
      ...(filters?.sport ? { sport: filters.sport } : {}),
      ...(filters?.grade ? { grade: filters.grade } : {}),
    },
    orderBy: { gameTime: "desc" },
    take: 200,
  });
}

export function computeBacktestStats(plays: {
  ev: number;
  clv: number;
  result?: string | null;
}[]) {
  const settled = plays.filter((p) => p.result === "win" || p.result === "loss");
  const wins = settled.filter((p) => p.result === "win").length;
  const winRate = settled.length ? wins / settled.length : 0;
  const avgEV = settled.length
    ? settled.reduce((a, b) => a + b.ev, 0) / settled.length
    : 0;
  const avgCLV = settled.length
    ? settled.reduce((a, b) => a + b.clv, 0) / settled.length
    : 0;
  return { total: settled.length, wins, winRate, avgEV, avgCLV };
}
