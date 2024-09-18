import express from "express";
import { userControllers } from "./user.controller";
import { UserValidations } from "./user.validation";
import validateRequest from "../../middlewares/validateRequest";
import { USER_ROLE } from "./user.constant";
import { auth } from "../../middlewares/auth";


const router = express.Router();

router.post(
  "/create-admin",
  validateRequest(UserValidations.createAdminValidations),
  auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN),
  userControllers.createAdmin
);

//update
router.put(
  "/:userId",
  validateRequest(UserValidations.updateUserValidations),
  auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN),
  userControllers.updateUser
);

export const UserRoutes = router;


