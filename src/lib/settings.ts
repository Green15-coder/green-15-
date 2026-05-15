import prisma from "@/lib/prisma";

export async function getUserSettings(userId: string) {
  return prisma.userSettings.findUnique({ where: { userId } });
}

export async function upsertUserSettings(
  userId: string,
   {
    defaultBook?: string;
    defaultUnits?: number;
    notificationsEnabled?: boolean;
  }
) {
  return prisma.userSettings.upsert({
    where: { userId },
    update: data,
    create: { userId, ...data },
  });
}
