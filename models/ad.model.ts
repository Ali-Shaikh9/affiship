/* eslint-disable @typescript-eslint/no-unused-vars */
// models/Profile.ts
import mongoose, { Schema, model, models } from "mongoose";

const AdSchema = new Schema(
  {
    userId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const ad = mongoose.model('ad', AdSchema)
