import express from "express";
import { getUser } from "../resolvers/users/get-users.js";
import { createUser } from "../resolvers/users/create-user.js";
import { changeUser } from "../resolvers/users/change-user.js";
import { deleteUser } from "../resolvers/users/delete-user.js";
import { login } from "../resolvers/users/login/login.js";
export const router = express.Router();
router.get("/", getUser);
router.post("/", createUser);
router.put("/", changeUser);
router.post("/login", login);

router.delete("/:id", deleteUser);
