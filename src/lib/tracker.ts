import prisma from "@/lib/prisma";

export async function saveTrackerEntry({
  userId,
  playId,
  units = 1.0,
  book,
  note,
}: {
  userId: string;
  playId: string;
  units?: number;
  book?: string;
  note?: string;
}) {
  return prisma.trackerEntry.create({
     { userId, playId, units, book, note },
  });
}

export async function getTrackerByUser(userId: string) {
  return prisma.trackerEntry.findMany({
    where: { userId },
    include: { play: true },
    orderBy: { createdAt: "desc" },
  });
}
