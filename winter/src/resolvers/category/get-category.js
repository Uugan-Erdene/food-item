import { categoryModel } from "../../model/category-model.js";
export const getCategory = async (req, res) => {
  const dbCategory = await categoryModel.find();
  console.log(dbCategory);

  res.status(200).json(dbCategory);
};
