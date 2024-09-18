import { USER_ROLE, USER_STATUS } from "./user.constant";

export type TUser = {
  name: string;
  email: string;
  role: keyof typeof USER_ROLE;
  password: string;
  phone: string;
  address: string;
  status: keyof typeof USER_STATUS;
  passwordChangedAt?: Date;
};

