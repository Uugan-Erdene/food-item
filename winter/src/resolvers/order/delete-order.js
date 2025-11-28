import { orderModel } from "../../model/order-model.js";
export const deleteOrder = async (req, res) => {
  const deletedOrder = req.body;

  await orderModel.findByIdAndDelete(deletedOrder.id);
  res.send("Order deleted successfully");
};
