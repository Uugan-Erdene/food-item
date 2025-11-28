import { categoryModel } from "../../model/category-model.js";
export const changeCategory = async (req, res) => {
  const updatedCategory = req.body;
  await categoryModel.findByIdAndUpdate(updatedCategory.id, {
    name: updatedCategory.name,
    phoneNumber: updatedCategory.phoneNumber,
    email: updatedCategory.email,
  });
  res.send("Category updated successfully");
};
