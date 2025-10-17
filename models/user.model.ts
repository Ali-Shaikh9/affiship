/* eslint-disable @typescript-eslint/no-unused-vars */
// models/Profile.ts
import mongoose, { Schema, model, models } from "mongoose";

const ProfileSchema = new Schema(
  {
    userId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ["affiliate", "dropshipper"], required: true },
    location: { type: String }, // searchable field
    channelLink: { type: String },
  },
  { timestamps: true }
);

export const Profile = models.Profile || model("Profile", ProfileSchema);
