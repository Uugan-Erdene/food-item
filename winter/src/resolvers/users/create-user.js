import { userModel } from "../../model/user-model.js";
import bcrypt from "bcrypt";
export const createUser = async (req, res) => {
  const newUser = req.body;
  const password = newUser.password;
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);

  await userModel.create({
    name: newUser.name,
    email: newUser.email,
    password: hashedPassword,
    phoneNumber: newUser.phoneNumber,
  });

  res.status(200).json("success");
};
