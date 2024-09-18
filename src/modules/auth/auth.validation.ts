import { z } from "zod";

const userLoginValidationSchema = z.object({
  email: z.string({ required_error: "Please enter your email!" }),
  password: z.string({ required_error: "Please enter your password!" }),
});

export const userLoginValidations = {
  userLoginValidationSchema,
};
