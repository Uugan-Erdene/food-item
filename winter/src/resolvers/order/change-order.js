import { orderModel } from "../../model/order-model.js";
export const changeOrder = async (req, res) => {
  const updateOrder = req.body;
  await orderModel.findByIdAndUpdate(updateOrder.id, {
    user: updateOrder.user,
    totalPrice: updateOrder.totalPrice,
    foodOrderItems: updateOrder.foodOrderItems,
  });
  res.status(200).json("Order updated successfully");
};
