
import { catchAsync } from "../../utils/catchAsync";
import { TUser } from "./user.interface";
import { UserServices } from "./user.services";
import { UserValidations } from "./user.validation";

const createAdmin = catchAsync(async (req, res) => {
      const validatedData = UserValidations.createAdminValidations.parse(
        req.body
      );
  const result = await UserServices.createAdminIntoDB(validatedData);

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Admin is created successfully!",
    data: result,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await UserServices.updateUser(userId, req.body);

  res.status(200).json({
    success: true,
    message: "User updated successfully!",
    data: result,
  });
});

export const userControllers = {
  createAdmin,
  updateUser,
};
