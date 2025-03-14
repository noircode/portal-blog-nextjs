import { z } from "zod";

export const formSchema = z.object({
    email: z.string({
        required_error: "Email is required",
    }).email({
        message: 'Email tidak valid'
    }),
    password: z.string({
        required_error: 'Password harus di isi minimal 8 karakter'
    }).min(8),
    });