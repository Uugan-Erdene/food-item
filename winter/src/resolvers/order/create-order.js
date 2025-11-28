import { orderModel } from "../../model/order-model.js";
export const createOrder = async (req, res) => {
  const newOrder = req.body;
  console.log(newOrder);

  await orderModel.create({
    user: newOrder.user,
    foodOrderItems: newOrder.foodOrderItems,
    totalPrice: newOrder.totalPrice,
  });

  res.status(200).json("success order");
};
