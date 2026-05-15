import prisma from "@/lib/prisma";

export async function getSavedViews(userId: string) {
  return prisma.savedView.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
}

export async function createSavedView(
  userId: string,
  name: string,
  filters: object
) {
  return prisma.savedView.create({
     { userId, name, filters },
  });
}

export async function deleteSavedView(id: string) {
  return prisma.savedView.delete({ where: { id } });
}
