import { userModel } from "../../model/user-model.js";

export const changeUser = async (req, res) => {
  const updatedUser = req.body;

  await userModel.findByIdAndUpdate(updatedUser.id, {
    name: updatedUser.name,
    phoneNumber: updatedUser.phoneNumber,
    email: updatedUser.email,
  });
  res.send("User updated successfully");
};
