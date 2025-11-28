import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const FoodOrderItem = new Schema({
  foodId: { type: Schema.ObjectId, require: true, ref: "food" },
  count: { type: Number, require: true },
});
const OrderSchema = new Schema({
  id: ObjectId,
  // name: { type: String, require: true },
  user: { type: Schema.ObjectId, require: true, ref: "user" },
  foodOrderItems: [FoodOrderItem],
  status: {
    type: String,
    enum: ["PENDING", "CANCELED", "DELIVERED"],
  },
  totalPrice: { type: Number, require: true },
  createdAt: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});
export const orderModel = mongoose.model("order", OrderSchema);
