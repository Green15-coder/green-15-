import { z } from "zod";

export const settingsSchema = z.object({
  defaultBook: z.string().optional(),
  defaultUnits: z.coerce.number().positive().optional(),
  notificationsEnabled: z.coerce.boolean().optional(),
});

export const savedViewSchema = z.object({
  name: z.string().min(1).max(100),
  filters: z.record(z.unknown()).default({}),
});

export const trackerEntrySchema = z.object({
  playId: z.string().min(1),
  units: z.coerce.number().positive().default(1),
  book: z.string().optional(),
  note: z.string().max(500).optional(),
});
