import express from "express";
import { authControllers } from "./auth.controller";
import validateRequest from "../../middlewares/validateRequest";
import { userLoginValidations } from "./auth.validation";

const router = express.Router();

router.post("/signup", authControllers.register);
router.post(
  "/signin",
  validateRequest(userLoginValidations.userLoginValidationSchema),
  authControllers.login
);

export const AuthRoutes = router;
