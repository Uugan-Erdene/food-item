import { foodModel } from "../../model/food-model.js";

export const changeFood = async (req, res) => {
  const updateFood = req.body;
  await foodModel.findByIdAndUpdate(updateFood.id, {
    foodName: updateFood.foodName,
    price: updateFood.price,
    image: updateFood.price,
    ingredients: updateFood.ingredients,
    category: updateFood._id,
  });
  res.send("Food updated successfully");
};
