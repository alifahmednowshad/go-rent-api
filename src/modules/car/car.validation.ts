import { z } from "zod";

const createCarValidation = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  color: z.string().min(1, "Color is required"),
  isElectric: z.boolean(),
  features: z.array(z.string()).nonempty("Features are required"),
  pricePerHour: z.number().positive("Price per hour must be a positive number"),
});

export const CarValidations = { createCarValidation };
