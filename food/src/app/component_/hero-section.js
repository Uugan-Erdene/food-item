"use client";
import { Headerhat } from "../icons/header-hat";
import { RigthBullet } from "../icons/rigth-bullet";
import { Pin } from "../icons/pin";
import { ProFile } from "../icons/profile";
import { useState } from "react";
import { Sheetq } from "./sheet";

export const HeroSection = () => {
  const [singIn, setSingIn] = useState();
  const handleSignIn = () => {
    setSingIn(!singIn);
  };
  return (
    <div className="w-full h-17 bg-black flex justify-between">
      <div className="flex items-center gap-4 ml-22 ">
        <div>
          <Headerhat />
        </div>
        <div>
          <p className="text-white">
            Nom<span className="text-[red]">Nom</span>
          </p>
          <p className="text-white">Swift delivery</p>
        </div>
      </div>
      <div className=" w-[348px] h-9 flex items-center justify-center gap-2 mt-4 mr-22">
        <div className="w-[251px] h-9 rounded-full bg-white flex items-center justify-center gap-2">
          <Pin />
          <p className="text-[red] text-xs">Delivery address:</p>
          <p className="text-[gray] text-xs">Add Location</p>
          <button>
            <RigthBullet />
          </button>
        </div>
        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
          <Sheetq />
        </div>
        <div
          className="w-9 h-9 rounded-full bg-[red] flex items-center justify-center"
          onClick={handleSignIn}
        >
          <ProFile />
        </div>
        {singIn && (
          <div className="w-47 h-26 bg-white rounded-3xl fixed mt-40 ml-78">
            <div className="flex flex-col items-center gap-2 mt-3">
              <h1 className="font-medium">Test@gmail.com</h1>
              <button className="bg-[gray]/20 w-20 h-9 rounded-4xl cursor-pointer">
                Sign out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
