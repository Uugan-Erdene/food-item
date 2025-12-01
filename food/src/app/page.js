"use client";
import { useState, useEffect } from "react";
import { HeroSection } from "./component_/hero-section";
import { HeaderSection } from "./component_/header-section";
import { FoodCard } from "./component_/foods-Card";
import { EndBox } from "./component_/blackBox";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
const backend_url = process.env.PUBLIC_BACKEND_URL;
console.log(backend_url, "hehe");

export default function Home() {
  const [category, setCategory] = useState([]);
  const getCategory = async () => {
    const data = await fetch(`${backend_url}/category`, options);
    const jsonData = await data.json();
    setCategory(jsonData);
  };

  useEffect(() => {
    getCategory();
  }, []);
  return (
    <div className="w-full h-full bg-[gray]">
      <HeroSection />

      <HeaderSection />
      {category.map((item, index) => {
        return (
          <FoodCard
            key={index}
            categoryName={item.categoryName}
            categoryId={item._id}
          />
        );
      })}
      <EndBox />
    </div>
  );
}
