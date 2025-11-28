import { foodModel } from "../../model/food-model.js";
import jwt from "jsonwebtoken";
export const deleteFood = async (req, res) => {
  // const token = req.headars.authorization;
  // try {
  //   jwt.verify(token, "secret-key");
  //   const id = req.params.id;
  //   res.send("Food deleted successfully");
  // } catch (err) {
  //   console.log(err);
  //   res.status(401).send("Food deleted successfully");
  // }
  const deleteFood = req.body;
  try {
    await foodModel.findByIdAndDelete(deleteFood.id);
    res.send("Food deleted successfully");
  } catch (error) {
    console.log(error);
  }
};
