"use client";
import { Headerhat } from "../icons/header-hat";
import { SquareFour } from "../icons/square";
import { CarParking } from "../icons/car-parking";
import { Calendar } from "../icons/calendar";
import { Bullet } from "../icons/bullet";
import { DownBullet } from "../icons/down-bullet";
import { LeftBullet } from "../icons/left-bullet";
import { RigthBullet } from "../icons/rigth-bullet";
import Link from "next/link";
import { useState } from "react";
import { Ex } from "../icons/ex";
export default function Home() {
  const [checked, setChecked] = useState(false);
  const [deliveryState, setDeliveryState] = useState(false);
  const handleDeliveryState = () => {
    setDeliveryState(!deliveryState);
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
            <Link href={`/admin/Menu`}>
              <div className="flex items-center justify-center gap-3 a  rounded-4xl  w-[160] h-[40] cursor-pointer ">
                <SquareFour /> <p className="font-medium">Food menu</p>
              </div>
            </Link>
            <div className="w-[165] h-[40] flex items-center justify-center gap-3  rounded-4xl bg-black  cursor-pointer">
              <CarParking />
              <p className="text-white pr-[35] font-medium">Orders</p>
            </div>
          </div>
        </div>
        <div className="w-[1171px] flex flex-col  h-[1024px] px-8 mt-3">
          <div className="flex justify-end">
            <img src="cookman.png" />
          </div>
          <div className="w-[1171px] flex items-center justify-around h-[76px] rounded-t-lg mt-7 bg-white">
            <div className="w-[485px] flex flex-col  justify-center h-[11]">
              <h1 className="font-bold text-lg">Orders</h1>{" "}
              <p className="text-[#71717A] text-xs">32 items</p>
            </div>
            <div className="w-[491px] flex ml-30  items-center gap-3 justify-center h-9 ">
              <div className="w-[300px] h-[36] gap-2 flex items-center border-[#0000ff51] rounded-4xl ">
                <Calendar />
                <p>13 June 2023 - 14 July 2023</p>
              </div>
              <div
                className={`w-[179px] bg-[#18181b55] rounded-4xl justify-center flex items-center h-9 ${
                  checked ? "bg-black" : "bg-[#80808047]"
                }`}
              >
                <p className="text-white">Change delivery state</p>
              </div>
            </div>
          </div>
          <div className="w-[1171px] border-[gray] h-13 bg-[#E4E4E7] flex">
            <div className="w-12 flex items-center justify-center h-13">
              <input
                type="checkbox"
                className="border-black color-black w-4 h-4"
              />
            </div>
            <div className="w-13 h-12 flex items-center justify-center">
              <p>№</p>
            </div>
            <div className="w-[213.5px] h-12 flex items-center pl-4">
              <p className="text-[#71717A]">Customer</p>
            </div>
            <div className="w-40 h-12 flex items-center pl-4">
              <p className="text-[#71717A]">Food</p>
            </div>
            <div className="w-40 h-12 flex items-center justify-between pl-4">
              <p className="text-[#71717A]">Date</p>
              <p className="pr-4">
                <Bullet />
              </p>
            </div>
            <div className="w-40 h-12 flex items-center pl-4">
              <p className="text-[#71717A]">Total</p>
            </div>
            <div className="w-[213.5px] h-12 flex items-center pl-4">
              <p className="text-[#71717A]">Delivery Address</p>
            </div>
            <div
              className="w-40 h-12 flex items-center justify-between pl-4"
              onClick={handleDeliveryState}
            >
              <p className="text-[#71717A]">Delivery state</p>
              <p className="pr-4">
                <Bullet />
              </p>
            </div>
            {deliveryState && (
              <div className="absolute w-full h-full left-0 top-0 flex justify-center items-center bg-black/20">
                <div className="w-91 h-50 rounded-2xl bg-white">
                  <div className="px-6 mt-6 flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <h1>Change delivery state</h1>
                      <button
                        className="w-9 h-9 rounded-full bg-[#8080802f] flex items-center justify-center"
                        onClick={() => {
                          setDeliveryState(false);
                        }}
                      >
                        <Ex />
                      </button>
                    </div>
                    <div className="w-79 h-8 flex gap-4">
                      <button className="w-[94px] h-8 border rounded-full">
                        Delivered
                      </button>
                      <button className="w-[94px] h-8 border rounded-full">
                        Pending
                      </button>
                      <button className="w-[94px] h-8 border rounded-full">
                        Cancelled
                      </button>
                    </div>
                    <div>
                      <button className="w-full h-9 bg-black text-white rounded-full">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="w-[1171px] h-13 bg-[#E4E4E7] flex">
            <div className="w-12 flex items-center justify-center h-13">
              <input
                type="checkbox"
                checked={checked}
                className="border-black color-black w-4 h-4 "
                onChange={() => {
                  setChecked(!checked);
                }}
              />
            </div>
            <div className="w-13 h-12 flex items-center justify-center">
              <p>1</p>
            </div>
            <div className="w-[213.5px] h-12 flex items-center pl-4">
              <p className="text-[#71717A]">Test@gmail.com</p>
            </div>
            <div className="w-40 h-12 flex justify-between items-center pl-4">
              <p className="text-[#71717A]">2 foos</p>
              <p className="pr-5 cursor-pointer ">
                <DownBullet />
              </p>
            </div>
            <div className="w-40 h-12 flex items-center pl-4">
              <p className="text-[#71717A]">2025/11/09</p>
            </div>
            <div className="w-40 h-12 flex items-center pl-4">
              <p className="text-[#71717A]">$27.47</p>
            </div>
            <div className="w-[213.5px] h-12 flex items-center pl-4">
              <p className="text-[#71717A] font-medium w-[181.5px] h-8 text-xs">
                2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen...{" "}
              </p>
            </div>
            <div className="w-40 h-12 flex items-center pl-4">
              <button className="text-[#71717A] flex items-center justify-center gap-4 text-sm w-[94px] h-8 border rounded-4xl border-[#EF4444]">
                Pending
                <Bullet />
              </button>
            </div>
          </div>
          <div className="w-[1171px] h-16 flex flex-col justify-end items-end ">
            <div className="w-88 h-8 flex gap-2.5">
              {" "}
              <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
                <LeftBullet />
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-black rounded-full">
                {" "}
                <p className="text-white">1</p>
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
                2{" "}
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
                3{" "}
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
                4{" "}
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
                5{" "}
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
                ...{" "}
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
                10{" "}
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
                <RigthBullet />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
