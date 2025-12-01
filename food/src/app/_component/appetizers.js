"use client";
import { useEffect, useState } from "react";
import { AddFood } from "../fueters/add-food";
import { AppetizersFood } from "../fueters/appetizers-food";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
const backend_url = process.env.PUBLIC_BACKEND_URL;
export const Appetizers = ({ categoryName, categoryId }) => {
  const [foods, setFoods] = useState([]);
  const getfood = async () => {
    const data = await fetch(`${backend_url}/${categoryId}`, options);
    const jsonData = await data.json();
    setFoods(jsonData);
  };
  console.log(categoryId, "lolo");

  useEffect(() => {
    getfood();
  }, []);
  return (
    <div className="w-[1171px] h-[582px] bg-white rounded-2xl px-4 mt-6 ">
      <div className="mt-3">
        <h1>{categoryName} (6)</h1>
      </div>
      <div className="w-[1131px] min-h-[241px] flex gap-4 mt-3 flex-wrap ">
        <AddFood categoryId={categoryId} getfood={getfood} />
        {foods.map((item, index) => (
          <AppetizersFood
            image={item.image}
            getfood={getfood}
            key={index}
            foodId={item._id}
            categoryName={item.categoryName}
            foodName={item.foodName}
            price={item.price}
            ingredients={item.ingredients}
            categoryId={item.categoryId}
          />
        ))}
      </div>
    </div>
  );
};
