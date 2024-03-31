// Vendors
import * as z from "zod";

export const RegisterSchema = z.object({
  name: z
    .string({ required_error: "El nombre es obligatorio" })
    .min(1, { message: "El nombre es obligatorio" }),
  birthdate: z.string().refine(
    (value) => {
      const now = new Date();
      const date = new Date(value);
      const age = now.getFullYear() - date.getFullYear();
      const month = now.getMonth() - date.getMonth();
      if (month < 0 || (month === 0 && now.getDate() < date.getDate())) {
        return age - 1 >= 18;
      }
      return age >= 18;
    },
    { message: "Tienes que ser mayor de 18 años" }
  ),
  email: z
    .string({ required_error: "El email es obligatorio" })
    .min(1, { message: "El email es obligatorio" })
    .email({ message: "Email inválido" }),
  password: z
    .string({ required_error: "La contraseña es obligatoria" })
    .min(1, { message: "La contraseña es obligatoria" })
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
});
