// Vendors
import * as z from "zod";

export const BeersSchema = z.object({
  alcohol: z
    .number()
    .optional()
    .transform((value) => Number(value)),
  body: z.string().optional(),
  brand: z.string().optional(),
  brewery: z.string().optional(),
  color: z.string().optional(),
  country: z.string().optional(),
  craft: z.string().optional(),
  description: z.string().optional(),
  event: z.string().optional(),
  fermentation: z.string().optional(),
  flavor: z.string().optional(),
  ibus: z
    .number()
    .optional()
    .transform((value) => Number(value)),
  image: z.instanceof(FileList),
  name: z
    .string({ required_error: "El nombre es obligatorio" })
    .min(1, { message: "El nombre es obligatorio" }),
  pairing: z.string().optional(),
  popularity: z.string().optional(),
  province: z.string().optional(),
  recommendation: z.string().optional(),
  reputation: z.string().optional(),
  style: z.string().optional(),
  type: z.string().optional(),
});
