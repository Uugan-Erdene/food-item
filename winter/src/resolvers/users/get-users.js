import { userModel } from "../../model/user-model.js";

export const getUser = async (req, res) => {
  const dbUsers = await userModel.find();
  console.log(dbUsers);

  res.status(200).json(dbUsers);
};
