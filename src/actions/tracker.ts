"use server";

import { saveTrackerEntry, getTrackerByUser } from "@/lib/tracker";
import { getCurrentUserId } from "@/lib/auth";

export async function addToTracker(
  playId: string,
  units: number,
  book?: string,
  note?: string
) {
  const userId = await getCurrentUserId();
  return saveTrackerEntry({ userId, playId, units, book, note });
}

export async function fetchMyTracker() {
  const userId = await getCurrentUserId();
  return getTrackerByUser(userId);
}
