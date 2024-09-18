import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CarValidations } from './car.validation';
import { carControllers } from './car.controller';
import { USER_ROLE } from '../user/user.constant';
import { auth } from '../../middlewares/auth';


const router = express.Router();

// Create a car (Admin only)
router.post(
  "/cars",
  validateRequest(CarValidations.createCarValidation),
  auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN),
  carControllers.createCar
);

// // Get all cars
// router.get("/cars", getCars);

// // Get a specific car
// router.get("/cars/:id", getCar);

// // Update a car (Admin only)
// router.put("/cars/:id", auth("admin"), validateUpdateCar, updateCar);

// // Delete a car (Admin only)
// router.delete("/cars/:id", auth("admin"), deleteCar);


export const CarRoutes = router;
