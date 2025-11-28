import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const FoodSchema = new Schema({
  foodName: String,
  price: Number,
  image: String,
  ingredients: String,
  category: { type: ObjectId, ref: "category" },
  createdAt: { type: Date, default: new Date() },
  updated: { type: Date, default: new Date() },
});
export const foodModel = mongoose.model("food", FoodSchema);
