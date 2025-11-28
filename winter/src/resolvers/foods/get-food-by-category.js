import { foodModel } from "../../model/food-model.js";
export const getFoodByCategoryId = async (req, res) => {
  const dbFood = await foodModel.find({ category: req.params.categoryId });
  res.status(200).json(dbFood);
};
