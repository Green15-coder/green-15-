"use server";

import { createSavedView, deleteSavedView } from "@/lib/saved-views";
import { getCurrentUserId } from "@/lib/auth";

export async function saveView(name: string, filters: object) {
  const userId = await getCurrentUserId();
  return createSavedView(userId, name, filters);
}

export async function removeView(id: string) {
  return deleteSavedView(id);
}
