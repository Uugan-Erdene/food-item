"use client";
import { LeftBullet } from "../icons/left-bullet";
import { useState } from "react";
export const StepTwo = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const handleMailInput = (e) => {
    const value = e.target.value;
    setEmail(value);

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    setEmailError(!isValid);
  };

  const handleClickButton = () => {
    if (email.length < 3) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  return (
    <div className="w-full h-full flex items-center justify-center gap-4">
      <div className="w-104 h-72 flex flex-col gap-3">
        <div>
          <button className="w-9 h-9 border-[gray] border flex items-center justify-center rounded-sm">
            <LeftBullet />
          </button>
        </div>
        <div className="w-104 h-15">
          <h1 className="font-bold text-2xl">Create a strong password</h1>
          <p className="text-[gray]">
            Create a strong password with letters, numbers.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <input
            className={`w-104 h-9 rounded-sm pl-3 border
    ${emailError ? "border-red-500" : "border-gray-300"}`}
            placeholder="Password"
            onChange={handleMailInput}
          />

          {emailError && (
            <div className="text-[#EF4444] text-sm mt-1">
              Invalid email. Use a format like example@email.com
            </div>
          )}
          <input
            className={`w-104 h-9 rounded-sm pl-3 border
    ${emailError ? "border-red-500" : "border-gray-300"}`}
            placeholder="Confirm"
            onChange={handleMailInput}
          />
          {emailError && (
            <p className="text-[#EF4444] text-sm mt-1">
              Invalid email. Use a format like example@email.com
            </p>
          )}
          <div className="flex gap-2">
            <input type="checkbox" />
            <p className="text-[#71717A] text-xs">Show password</p>
          </div>
        </div>
        <div>
          <button
            className={`w-104 h-9 border rounded-lg cursor-pointer ${
              emailError || !email ? "bg-[gray]/40" : "bg-black text-white"
            }`}
            onClick={handleClickButton}
            disabled={emailError || !email}
          >
            Let's Go
          </button>
        </div>
        <div className="flex justify-center">
          <p className="text-[gray]">Already have an account?</p>
          <p className="text-blue-400">Log in </p>
        </div>
      </div>
      <div className="w-214 h-126 ">
        <img src="tugeegch.jpg" className="rounded-lg" />
      </div>
    </div>
  );
};
