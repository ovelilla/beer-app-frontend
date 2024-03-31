// Vendors
import * as z from "zod";

export const BeersSchema = z.object({
  name: z
    .string({ required_error: "El nombre es obligatorio" })
    .min(1, { message: "El nombre es obligatorio" }),
});
