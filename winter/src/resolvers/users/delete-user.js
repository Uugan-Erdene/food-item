// import { userModel } from "../../model/user-model.js";
import jwt from "jsonwebtoken";
export const deleteUser = async (req, res) => {
  const token = req.headers.authorization;
  try {
    jwt.verify(token, "secret-key");
    const id = req.params.id;
    res.send("User deleted successfully");
  } catch (err) {
    console.log(err);
    res.status(401).send("Unauthorized");
  }

  // await userModel.findByIdAndDelete(deletedUser.id);
};
