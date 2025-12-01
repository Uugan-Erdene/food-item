"use client";
// import { useEffect, useState } from "react";
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
//   },
// };
import { OpenFood } from "../component_/openFood";

export const Fooding = ({ foodName, price, ingredients, image, foodId }) => {
  // const [food, setFood] = useState([]);
  // const getFood = async () => {
  //   const data = await fetch(`https://food-item.onrender.com/food`, options);
  //   const jsonData = await data.json();
  //   setFood(jsonData);
  // };
  // console.log(food, "food");

  // useEffect(() => {
  //   getFood();
  // }, []);
  return (
    <div className="bg-white text-black rounded-3xl shadow-xl overflow-hidden transition hover:scale-[1.02]">
      <div className="relative w-full h-56">
        <img src={image} className="w-full h-full object-cover" />
        <OpenFood
          foodId={foodId}
          foodName={foodName}
          price={price}
          ingredients={ingredients}
          image={image}
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-red-600">{foodName}</h2>
          <p className="font-semibold text-black">${price}</p>
        </div>

        <p className="text-gray-600 text-sm">{ingredients}</p>
      </div>
    </div>
  );
};
