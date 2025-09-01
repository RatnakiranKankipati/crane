import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().min(1, "Company name is required"),
  phone: z.string().optional(),
  projectType: z.enum(["2d-automation", "3d-automation", "both", "consultation"]),
  requirements: z.string().min(10, "Please provide detailed requirements (minimum 10 characters)"),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
