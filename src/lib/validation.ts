import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),

  email: z
    .string()
    .trim()
    .email("Please provide a valid email address")
    .max(254, "Email address is too long"),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(3000, "Message is too long"),

  website: z
    .string()
    .max(200)
    .optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;