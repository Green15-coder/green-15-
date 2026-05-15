"use server";

import { upsertUserSettings } from "@/lib/settings";
import { getCurrentUserId } from "@/lib/auth";

export async function updateSettings( {
  defaultBook?: string;
  defaultUnits?: number;
  notificationsEnabled?: boolean;
}) {
  const userId = await getCurrentUserId();
  return upsertUserSettings(userId, data);
}
