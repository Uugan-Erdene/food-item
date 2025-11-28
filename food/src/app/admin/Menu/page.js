"use client";
import { useState, useEffect } from "react";
import { CarParking } from "@/app/icons/car-parking";
import { Headerhat } from "@/app/icons/header-hat";
import { SquareFour } from "@/app/icons/square";
import { Appetizers } from "@/app/_component/appetizers";
import Link from "next/link";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export default function Home() {
  const [category, setCategory] = useState([]);
  const [addDishes, setAddDishes] = useState(false);
  const [addCategory, setAddCategory] = useState("");
  const handleAddDishes = () => {
    setAddDishes(!addDishes);
  };
  const getData = async () => {
    const data = await fetch(`http://localhost:8000/category`, options);
    const jsonData = await data.json();
    setCategory(jsonData);
  };
  console.log(category, "hehehee");

  useEffect(() => {
    getData();
  }, []);

  const handleAddFood = async () => {
    if (!addCategory.trim()) {
      alert("category neriig oruulna uu!");
      return;
    }
    try {
      const res = await fetch("http://localhost:8000/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          categoryName: addCategory,
          // user: "djsiaodjosaij89",
        }),
      });
      await getData();
      setAddDishes(false);
      setAddCategory("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="w-[1440px] h-[1024px] m-auto bg-gray-100 flex ">
        <div className="w-[205px] h-[1024px] px-5 bg-white flex flex-col">
          <div className="w-[165px] h-[44] flex items-center gap-2 mt-[36] bg-amber-200">
            <Headerhat />
            <div>
              <h1 className="font-bold text-lg">NomNom</h1>
              <p className="text-[#71717A] text-xs"> Swift delivery</p>
            </div>
          </div>
          <div className="w-[165px] flex flex-col gap-[24] mt-[60] h-[104px]">
            <div className="flex items-center justify-center gap-3 rounded-4xl bg-black text-white w-[160] h-[40] cursor-pointer">
              <SquareFour /> <p className="font-medium bg-black">Food menu</p>
            </div>
            <Link href={`/admin`}>
              <div className="w-[165] h-[40] flex items-center justify-center gap-3  rounded-4xl  cursor-pointer ">
                <CarParking />
                <p className="text-black pr-[35] font-medium ">Orders</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[1171px] flex flex-col  h-[1024px] px-8 mt-3 overflow-scroll">
          <div className="flex justify-end">
            <img src="/cookman.png" />
          </div>
          <div className="w-[1171px] h-44 rounded-lg mt-7 bg-white ">
            <div className="w-[1123px] h-7">
              <h1 className="font-bold text-lg">Dishes category</h1>
            </div>
            <div className="w-[1123px] flex   items-center gap-3 flex-wrap h-21 ">
              <div className="w-[145px] h-9 border-[red] border rounded-3xl flex gap-2 items-center justify-center">
                <p>All Dishes</p>
                <p className="bg-black text-white w-10 h-5 flex items-center justify-center rounded-3xl">
                  11
                </p>
              </div>
              {category.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-[165px] h-9 border-[red] border rounded-3xl flex gap-2 items-center justify-center"
                  >
                    <p className="text-sm">{item.categoryName}</p>
                    <p className="bg-black text-white w-10 h-5 flex items-center justify-center rounded-3xl">
                      11
                    </p>
                  </div>
                );
              })}

              <div>
                <button
                  className="bg-[#EF4444] w-9 h-9 text-white rounded-full cursor-pointer"
                  onClick={handleAddDishes}
                >
                  +
                </button>
              </div>
              {addDishes && (
                <div className="fixed  z-50 top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/20">
                  <div className="w-[460px] h-[272px] bg-white rounded-md  border  flex flex-col justify-center items-center">
                    <div className="w-[412px] h-[52px] flex justify-between">
                      <p className="text-[18px] text-black">Add new category</p>
                      <button
                        className="w-9 h-9 flex justify-center items-center rounded-full bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setAddDishes(false);
                        }}
                      >
                        x
                      </button>
                    </div>

                    <div className="w-[412px] h-[60px] flex gap-2 flex-col">
                      <p className="text-[14px] text-black">Category name</p>
                      <input
                        onChange={(e) => setAddCategory(e.target.value)}
                        placeholder="List ingredients..."
                        className="w-[412px] h-[38px] border rounded-md text-black"
                      />
                    </div>

                    <div className="w-[412px] h-16 flex justify-end items-end">
                      <button
                        className="w-[94px] h-10 bg-black rounded-md flex justify-center items-center text-white text-[14px]"
                        onClick={handleAddFood}
                      >
                        Add category
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {category.map((item, index) => {
            return (
              <Appetizers
                key={index}
                categoryName={item.categoryName}
                categoryId={item._id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
