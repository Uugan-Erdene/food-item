import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  id: ObjectId,
  email: String,
  password: String,
  phoneNumber: String,
  address: String,
  status: { type: String, enum: ["USER", "ADMIN"] },
});

export const userModel = mongoose.model("user", UserSchema);
