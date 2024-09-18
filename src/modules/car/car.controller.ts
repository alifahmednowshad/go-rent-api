// const createCar = catchAsync(async (req, res, next) => {
//   try {
//     // Validate the request body using the Zod schema
//     const validatedData = CarValidations.createCarValidation.parse(req.body);

import { ZodError } from "zod";
import { catchAsync } from "../../utils/catchAsync";
import { ICar } from "./car.interface";
import { CarServices } from "./car.service";
import { CarValidations } from "./car.validation";
import AppError from "../../errors/AppError";

//     const carData: ICar = {
//       ...validatedData,
//       status: "available", // default value or from req.body
//       isDeleted: false, // default value
//       createdAt: new Date(), // automatically setting the current date
//       updatedAt: new Date(), // automatically setting the current date
//     };

//     const result = await CarServices.createCarIntoDB(carData);

//     res.status(201).json({
//       success: true,
//       statusCode: 201,
//       message: "Car created successfully",
//       data: result,
//     });
//   } catch (error) {
//       // Handle Zod validation errors
//       if (error instanceof z.ZodError) {
//         return res.status(400).json({
//           success: false,
//           statusCode: 400,
//           message: "Validation failed",
//           errors: error.errors, // Return detailed validation errors
//         });
//       }

//       // Handle other errors using AppError
//       next(
//         new AppError(
//           500,
//           error instanceof Error ? error.message : "An unknown error occurred"
//         )
//       );
    
//   }
// });

const createCar = catchAsync(async (req, res, next) => {
  console.log("Incoming Request Body:", req.body); // Debug log

  try {
    const validatedData = CarValidations.createCarValidation.parse(req.body);

    const carData: ICar = {
      ...validatedData,
      status: "available", // or from req.body
      isDeleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await CarServices.createCarIntoDB(carData);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Car created successfully",
      data: result,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        errors: error.errors,
      });
    }
    // Handle other errors using AppError
    next(
      new AppError(
        500,
        error instanceof Error ? error.message : "An unknown error occurred"
      )
    );
  }
});



// const getAllCars = async (req: Request, res: Response) => {
//   try {
//     const cars = await Car.find({ isDeleted: false });

//     res.status(200).json({
//       success: true,
//       statusCode: 200,
//       message: "Cars retrieved successfully",
//       data: cars,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const getCarById = async (req: Request, res: Response) => {
//   try {
//     const car = await Car.findById(req.params.id);

//     if (!car || car.isDeleted) {
//       return res.status(404).json({ message: "Car not found" });
//     }

//     res.status(200).json({
//       success: true,
//       statusCode: 200,
//       message: "A Car retrieved successfully",
//       data: car,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const updateCar = async (req: Request, res: Response) => {
//   try {
//     const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });

//     if (!car || car.isDeleted) {
//       return res.status(404).json({ message: "Car not found" });
//     }

//     res.status(200).json({
//       success: true,
//       statusCode: 200,
//       message: "Car updated successfully",
//       data: car,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const deleteCar = async (req: Request, res: Response) => {
//   try {
//     const car = await Car.findByIdAndUpdate(
//       req.params.id,
//       { isDeleted: true },
//       { new: true }
//     );

//     if (!car || car.isDeleted) {
//       return res.status(404).json({ message: "Car not found" });
//     }

//     res.status(200).json({
//       success: true,
//       statusCode: 200,
//       message: "Car Deleted successfully",
//       data: car,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


export const carControllers = {
  createCar,
};