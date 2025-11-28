import { categoryModel } from "../../model/category-model.js";
export const createCategory = async (req, res) => {
  const newCategory = req.body;
  await categoryModel.create({
    categoryName: newCategory.categoryName,
  });
  res.status(200).json("success category");
};
