import { foodModel } from "../../model/food-model.js";
export const createFood = async (req, res) => {
  const newfood = req.body;
  await foodModel.create(newfood);
  res.status(200).json("success");
};
