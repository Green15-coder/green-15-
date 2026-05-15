"use server";

import prisma from "@/lib/prisma";
import { getCurrentUserId } from "@/lib/auth";

export async function completeOnboarding( {
  defaultBook: string;
  defaultUnits: number;
}) {
  const userId = await getCurrentUserId();
  await prisma.userSettings.upsert({
    where: { userId },
    update: { ...data, onboardingComplete: true },
    create: { userId, ...data, onboardingComplete: true },
  });
}
