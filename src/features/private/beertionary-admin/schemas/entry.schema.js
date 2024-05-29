// Vendors
import * as z from "zod";

export const EntrySchema = z.object({
  word: z
    .string({ required_error: "La palabra es obligatoria" })
    .min(1, { message: "La palabra debe tener al menos 1 carácter" }),
  description: z
    .string({ required_error: "La descripción es obligatoria" })
    .min(1, { message: "La descripción debe tener al menos 1 carácter" }),
});
