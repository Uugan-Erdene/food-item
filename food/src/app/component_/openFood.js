"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
export function OpenFood({ foodName, price, ingredients, image, foodId }) {
  const [count, setCount] = useState(1);
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <button className="absolute bottom-4 right-4 bg-white text-red-500 rounded-full p-2 shadow-md text-xl font-bold hover:bg-red-100 transition w-11 h-11">
            +
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px] rounded flex p-5 h-100">
          <DialogTitle />
          <div className="h-full w-[360px]">
            <img
              src={image}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className=" flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <h2 className="text-[#EF4444] font-bold text-3xl">{foodName}</h2>
              <p className="text-xs">{ingredients}</p>
            </div>
            <div className=" flex flex-col gap-6">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm">Total price</p>
                  <p className="text-lg font-bold">${price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="border w-11 h-11 rounded-full cursor-pointer"
                    onClick={() => count > 1 && setCount(count - 1)}
                  >
                    -
                  </button>
                  <p>{count}</p>
                  <button
                    className="border border-black w-11 h-11 rounded-full cursor-pointer"
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <Button
                variant="style"
                onClick={() => {
                  const existingCart =
                    JSON.parse(localStorage.getItem("cart")) || [];

                  const newFood = {
                    foodName,
                    ingredients,
                    price,
                    image,
                    foodId,
                    count,
                  };

                  existingCart.push(newFood);

                  localStorage.setItem("cart", JSON.stringify(existingCart));

                  toast.success("Food added to cart", {
                    position: "top-right",
                  });
                }}
              >
                Add ro card
              </Button>
            </div>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
