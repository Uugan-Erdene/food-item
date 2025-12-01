"use client";
import { useEffect, useState } from "react";
import { Ex } from "../icons/ex";
import { Trash } from "../icons/trash";
import { Pen } from "../icons/pen";
import { Bullet } from "../icons/bullet";
const UPLOAD_PRESET = "photos";
const CLOUD_NAME = "dpofcy13v";
const backend_url = process.env.PUBLIC_BACKEND_URL;
export const AppetizersFood = ({
  image,
  getfood,
  foodName,
  categoryId,
  ingredients,
  price,
  foodId,
}) => {
  // const [food, setFood] = useState([]);
  const [addDishes, setAddDishes] = useState(foodName);
  const [changeIngredients, setChangeIngredients] = useState(ingredients);
  const [changePrice, setChangePrice] = useState(price);
  const [AddDishesInfo, setAddDishesInfo] = useState(false);
  // const [moveTrash,setMoveTrash]=useState(false);
  const handleAddDishesInfo = () => {
    setAddDishesInfo(!AddDishesInfo);
  };

  const handleChangeFood = async () => {
    try {
      const data = await fetch(`${backend_url}/food`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          id: foodId,
          foodName: addDishes,
          price: changePrice,
          ingredients: changeIngredients,
          category: categoryId,
        }),
      });
      getfood();
      setAddDishesInfo(false);
    } catch (err) {
      console.log(err);
    }
  };
  const handleMoveTrash = async () => {
    try {
      const deleteFood = await fetch(`${backend_url}/food`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({ id: foodId }),
      });
      getfood();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[270px] h-[241]px border rounded-2xl ">
      <div className="px-4 flex flex-col gap-4 mt-5">
        <div className="relative">
          <img src={image} className="rounded-2xl h-40 w-full" />
          <button
            className="bg-white w-11 h-11 flex items-center justify-center rounded-full absolute top-16.5 right-5 cursor-pointer"
            onClick={handleAddDishesInfo}
          >
            <Pen />
          </button>
        </div>
        {AddDishesInfo && (
          <div className="absolute w-full h-full bg-black/20 top-0 left-0 flex items-center justify-center inset-0 z-50">
            <div className="w-[472px] h-[596px] bg-white rounded-2xl">
              <div className="px-4 flex flex-col gap-3 mt-6">
                <div className="w-106 h-9 flex justify-between items-center">
                  <h1 className="font-semibold">Dishes info</h1>
                  <button
                    className="w-9 h-9 bg-[#80808034] rounded-full flex items-center justify-center cursor-pointer"
                    onClick={() => {
                      setAddDishesInfo(false);
                    }}
                  >
                    <Ex />
                  </button>
                </div>
                <div className="w-106 h-106">
                  <div className="w-106 h-15 flex justify-between items-center">
                    <p className="text-[gray] text-xs mb-5">Dish name</p>
                    <input
                      className="w-[288px] h-9 border rounded-sm"
                      onChange={(e) => setAddDishes(e.target.value)}
                      value={addDishes}
                    />
                  </div>
                  <div className="w-106 h-15 flex justify-between items-center">
                    <p className="text-[gray] text-xs mb-5">Dish category</p>
                    <div className="w-[288px] h-9 border rounded-sm flex items-center justify-center gap-34">
                      <button className="bg-[#F4F4F5E5] w-29 h-5 rounded-3xl flex items-center pl-4 text-xs">
                        Appetizers
                      </button>
                      <Bullet />
                    </div>
                  </div>
                  <div className="w-106 h-26 flex justify-between items-center">
                    <p className="text-[gray] text-xs mb-15">Ingredients</p>
                    <input
                      className="w-[288px] h-20 border rounded-sm"
                      onChange={(e) => setChangeIngredients(e.target.value)}
                      value={changeIngredients}
                    />
                  </div>
                  <div className="w-106 h-15 flex justify-between items-center">
                    <p className="text-[gray] text-xs mb-5">Price</p>
                    <input
                      className="w-[288px] h-9 border rounded-sm"
                      onChange={(e) => setChangePrice(e.target.value)}
                      value={changePrice}
                    />
                  </div>
                  <div className="w-106 h-35 flex justify-between items-center">
                    <p className="text-[gray] text-xs mb-23">Image</p>
                    <div className="w-[288px] h-29 border rounded-sm relative">
                      <img className="w-full h-full relative" src={image} />
                      <button className="absolute bg-white w-9 h-9 rounded-full top-2 right-2 flex items-center justify-center cursor-pointer">
                        <Ex />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-106 h-16 flex justify-between items-end ">
                  <button
                    className="border border-[red] w-12 h-10 cursor-pointer flex items-center justify-center rounded-sm"
                    onClick={handleMoveTrash}
                  >
                    <Trash />
                  </button>
                  <button
                    className="bg-black text-white w-[126px] h-10 rounded-sm cursor-pointer"
                    onClick={handleChangeFood}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="text-sm">
          <div className="flex justify-between">
            <h1 className="text-[#EF4444]">{foodName}</h1>
            <p>{price}</p>
          </div>
          {ingredients}
        </div>
      </div>
    </div>
  );
};
