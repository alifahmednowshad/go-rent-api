import { model, Schema } from "mongoose";
import { ICar } from "./car.interface";

const carSchema = new Schema<ICar>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    color: { type: String, required: true },
    isElectric: { type: Boolean, required: true },
    features: [{ type: String }],
    pricePerHour: { type: Number, required: true },
    status: {
      type: String,
      enum: ["available", "unavailable"],
      default: "available",
    },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true, 
  }
);

export const Car = model<ICar>("Car", carSchema);
