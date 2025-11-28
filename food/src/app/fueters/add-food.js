"use client";
import { useEffect, useState } from "react";
import { Gallery } from "../icons/gallrey";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
const UPLOAD_PRESET = "delivery";
const CLOUD_NAME = "dpofcy13v";
export const AddFood = ({ categoryId, getfood }) => {
  const [logoUrl, setLogoUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();

    formData.append("file", file);

    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,

        {
          method: "POST",

          body: formData,
        }
      );

      const data = await response.json();

      return data.secure_url;
    } catch (error) {
      console.error("Cloudinary upload failed:", error);
    }
  };
  const handleLogoUpload = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    setUploading(true);

    try {
      const url = await uploadToCloudinary(file);

      setLogoUrl(url);
    } catch (err) {
      console.log("Failed to upload logo: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  const [cookFood, setCookFood] = useState("");
  const [foodPrice, setFoodPrice] = useState("");
  const [foodOrts, setFoodOrts] = useState("");
  const [addFood, setAddFood] = useState(false);
  const handleAddFood = () => {
    setAddFood(!addFood);
  };

  const handleAddFoods = async () => {
    if (!foodOrts.trim()) {
      alert("nersiig uniin duntei bichne uu!");
      return;
    } else if (!cookFood.trim()) {
      alert("nersiig uniin duntei bichne uu!");
    }
    try {
      const response = await fetch("http://localhost:8000/food", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          foodName: cookFood,
          price: foodPrice,
          ingredients: foodOrts,
          category: categoryId,
          image: logoUrl,
        }),
      });
      // const jsonData = await response.json();
      // setFoods(jsonData);
      getfood();
      setAddFood(false);
      setCookFood("");
      setFoodPrice("");
      setFoodOrts("");
      await getData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-[270px] h-[241]px border-[red] border-dashed border rounded-2xl">
      <div className="flex flex-col gap-7 justify-center items-center pt-18">
        <button
          className="bg-[#EF4444] w-9 h-9 text-white rounded-full cursor-pointer"
          onClick={handleAddFood}
        >
          +
        </button>
        {addFood && (
          <div className="absolute z-50 top-0 left-0 w-screen h-full bg-black/20 flex justify-center items-center">
            <div className="w-115 h-[592px] bg-white rounded-2xl">
              <div className="px-4 mt-6 flex flex-col gap-6">
                <div className="w-[412px] h-[52px] flex justify-between items-center">
                  <h1 className="font-semibold">Add new Dish to Appetizers</h1>
                  <button
                    className="w-9 h-9 bg-[#80808031] rounded-full cursor-pointer"
                    onClick={() => {
                      setAddFood(false);
                    }}
                  >
                    x
                  </button>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="text-xs">Food name</p>
                    <input
                      onChange={(e) => setCookFood(e.target.value)}
                      placeholder="Type food name"
                      className="w-[194px] h-[38px] pl-3 text-sm border rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs">Food price</p>
                    <input
                      onChange={(e) => setFoodPrice(e.target.value)}
                      placeholder="Enter price..."
                      className="w-[194px] h-[38px] pl-3 text-sm border rounded-sm"
                    />
                  </div>
                </div>
                <div className="w-[412px] h-28 flex flex-col gap-2 ">
                  <div>
                    <p className="text-xs">Ingredients</p>
                  </div>
                  <div>
                    <input
                      onChange={(e) => setFoodOrts(e.target.value)}
                      placeholder="List ingredients..."
                      className="w-[412px] h-[90px] text-sm border rounded-sm pl-3  "
                    />
                  </div>
                </div>
                <div className="w-[412px] h-40 flex flex-col gap-2">
                  <div>
                    <p className="text-xs">Food image</p>
                  </div>
                  <div className="w-[412px] h-[238px] border border-dashed rounded-sm bg-[#2563EB0D]">
                    {!logoUrl ? (
                      <Label htmlFor="input-file">
                        {!uploading ? (
                          <div className="w-95 h-15 flex flex-col items-center justify-center mt-9.5 gap-2">
                            <button className="w-8 h-8 rounded-full bg-white flex justify-center items-center cursor-pointer">
                              <Gallery />
                            </button>
                            <p className="text-xs">
                              Choose a file or drag & drop it here
                            </p>
                          </div>
                        ) : (
                          <p className="text-blue-600">Uploading...</p>
                        )}

                        <input
                          type="file"
                          id="input-file"
                          accept="image/*"
                          onChange={handleLogoUpload}
                          disabled={uploading}
                          className="hidden"
                        />
                      </Label>
                    ) : (
                      <div className="relative w-64 h-40">
                        <Image
                          src={logoUrl}
                          alt="Uploaded logo"
                          fill
                          className="object-contain rounded border border-gray-300"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-103 h-16 flex justify-end items-end ">
                  <button
                    className="bg-black text-white w-[93px] h-10 rounded-sm cursor-pointer"
                    onClick={handleAddFoods}
                  >
                    Add Dish
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <h1 className="">
          Add new Dish to
          <br /> Appetizers
        </h1>
      </div>
    </div>
  );
};
