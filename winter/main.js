import express from "express";
import { router } from "./src/routes/users.js";
import mongoose from "mongoose";
import { foodRouter } from "./src/routes/foods.js";
import { orderRouter } from "./src/routes/order.js";
import { categoryRouter } from "./src/routes/category.js";
import cors from "cors";
const app = express();

const PORT = 8000;
app.use(express.json());
app.use(cors());
app.use("/users", router);
app.use("/food", foodRouter);
app.use("/order", orderRouter);
app.use("/category", categoryRouter);
mongoose
  .connect("mongodb+srv://Uugan-Erdene:80145492@food.agvzxj3.mongodb.net/")
  .then(() => console.log("connected!"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
