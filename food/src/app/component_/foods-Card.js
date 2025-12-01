"use client";
import { useState, useEffect } from "react";
import { Fooding } from "../fueters/fooding";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
const backend_url = process.env.PUBLIC_BACKEND_URL;
export const FoodCard = ({ categoryName, categoryId }) => {
  const [foods, setFoods] = useState([]);
  const getfoods = async () => {
    const data = await fetch(
      `${backend_url}/food/byCategory/${categoryId}`,
      options
    );
    const jsonData = await data.json();
    setFoods(jsonData);
  };

  useEffect(() => {
    getfoods();
  }, []);
  return (
    <div className="min-h-screen text-white p-6">
      <h1 className="text-4xl font-bold mb-6 ">{categoryName}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {foods.map((item, index) => (
          <Fooding
            key={index}
            foodId={item._id}
            foodName={item.foodName}
            price={item.price}
            ingredients={item.ingredients}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};
