// Vendors
import * as z from "zod";

export const FinderSchema = z.object({
  flavor: z.string().optional(),
  body: z.string().optional(),
  color: z.string().optional(),
  ibus: z.string().optional(),
  alcohol: z.string().optional(),
  craft: z.string().optional(),
  country: z.string().optional(),
  pairing: z.string().optional(),
  class: z.string().optional(),
  event: z.string().optional(),
});
