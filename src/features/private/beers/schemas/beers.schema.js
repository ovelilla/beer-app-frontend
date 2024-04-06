// Vendors
import * as z from "zod";

export const BeersSchema = z.object({
  name: z
    .string({ required_error: "El nombre es obligatorio" })
    .min(1, { message: "El nombre es obligatorio" }),
  color: z.string().optional(),
  body: z.string().optional(),
  flavor: z.string().optional(),
  alcohol: z.number().optional().transform((value) => Number(value)),
  country: z.string().optional(),
  province: z.string().optional(),
  pairing: z.string().optional(),
  brand: z.string().optional(),
  class: z.string().optional(),
  style: z.string().optional(),
  craft: z.string().optional(),
  fermentation: z.string().optional(),
  ibus: z.number().optional().transform((value) => Number(value)),
  description: z.string().optional(),
  popularity: z.string().optional(),
  recommendation: z.string().optional(),
  brewery: z.string().optional(),
  reputation: z.string().optional(),
});
