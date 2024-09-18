import { Car } from "./car.model"; // Assuming Car model is already defined
import { ICar } from "./car.interface"; // Define an interface for the car data
import AppError from "../../errors/AppError";

// Service to create a car
const createCarIntoDB = async (payload: ICar) => {
  const car = await Car.create(payload);
  return car;
};


// // Service to get all cars
// const getCars = async (): Promise<ICar[]> => {
//   const cars = await Car.find({ isDeleted: false });
//   return cars;
// };

// // Service to get a single car by ID
// const getCarById = async (id: string): Promise<ICar | null> => {
//   const car = await Car.findById(id);
//   if (!car || car.isDeleted) {
//     throw new AppError(404, "Car not found");
//   }
//   return car;
// };

// // Service to update a car by ID
// const updateCar = async (
//   id: string,
//   updateData: Partial<ICar>
// ): Promise<ICar | null> => {
//   const car = await Car.findByIdAndUpdate(id, updateData, { new: true });
//   if (!car || car.isDeleted) {
//     throw new AppError(404, "Car not found");
//   }
//   return car;
// };

// // Service to delete (soft delete) a car by ID
// const deleteCar = async (id: string): Promise<ICar | null> => {
//   const car = await Car.findByIdAndUpdate(
//     id,
//     { isDeleted: true },
//     { new: true }
//   );
//   if (!car) {
//     throw new AppError(404, "Car not found");
//   }
//   return car;
// };

export const CarServices = { createCarIntoDB };
