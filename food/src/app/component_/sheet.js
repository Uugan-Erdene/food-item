"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TurdegTereg } from "../icons/turdegTereg";
import { TurdegTeregTsagaan } from "../icons/turdegTeregTsagaan";
import { Card } from "../_component/card";
import { Order } from "../_component/order";

export function Sheetq() {
  const [page, setPage] = useState("card");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // window болон localStorage client дээр байгааг шалгана
    if (typeof window !== "undefined") {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(savedCart);
    }
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <TurdegTereg />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="flex items-center gap-3 ">
            <TurdegTeregTsagaan />
            <SheetTitle>
              <p className="text-white">Edit profile</p>
            </SheetTitle>
          </div>
        </SheetHeader>
        <div className="h-11 w-[391px] flex gap-1 bg-white items-center rounded-full justify-center">
          <button
            className={`h-9 w-[190px]  rounded-full text-white cursor-pointer ${
              page === "card"
                ? "bg-[#EF4444] text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setPage("card")}
          >
            Cart
          </button>
          <button
            className={`h-9 w-[190px] rounded-full text-white cursor-pointer ${
              page === "order"
                ? "bg-[#EF4444] text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setPage("order")}
          >
            Order
          </button>
        </div>
        {page === "card" && <Card cart={cart} setCart={setCart} />}
        {page === "order" && <Order />}
      </SheetContent>
    </Sheet>
  );
}

// 1. cart nii medeelluudiig zuv haruulna
