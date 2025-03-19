import { z } from "zod";
import { InferSchemaType } from "./type";

export type LoginFormInputs = InferSchemaType<typeof login>;

export const login = z.object({
  username: z.string().min(1, "username is required"),
  password: z
    .string()
    // .min(8, "Password must be at least 8 characters long")
    // .max(32, "Password must be less than 32 characters")
    // .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    // .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    // .regex(/[0-9]/, "Password must contain at least one number")
    // .regex(/[\W_]/, "Password must contain at least one special character"),
});
