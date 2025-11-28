import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const CategorySchema = new Schema({
  id: ObjectId,
  categoryName: String,
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});
export const categoryModel = mongoose.model("category", CategorySchema);

// const OrderSchema = new Schema({
//   id: ObjectId,
//   categoryName: String,
//   name: { type: String, require: true },
//   user: { type: Schema.ObjectId, require: true, ref: "user" },
//   food: { type: Schema.ObjectId, require: true, ref: "food" },
//   updatedAt: { type: Date, default: Date.now },
//   createdAt: { type: Date, default: Date.now },
// });
