"use client";

import Link from "next/link";
import { LeftBullet } from "../icons/left-bullet";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ email: "", passWord: "" });
  const [error, setError] = useState({ email: "", passWord: "" });

  const validateForm = () => {
    const newError = {};
    if (!formData.email) {
      newError.email = "Email is required.";
    } else if (
      !/^[A-Za-z._\-0-9]+\.[A-Za-z]+\.[a-z]{2,4}$/.test(formData.email)
    ) {
      newError.email = "Invalid email. Use a format like example@email.com.";
    }
    if (!formData.passWord) {
      newError.passWord = "PassWord is require";
    } else if (formData.passWord.length < 6) {
      newError.passWord = "Incorrect password. Please try again.";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  };
  // const handleSubmit = async () => {
  //   if (!validateForm()) return;
  //   try {
  //     const res = await fetch("http://localhost:8000/user/login", {
  //       method: "POST",
  //       headers: { "Content-type": "application/json" },
  //       accep: "application/json",
  //       body: JSON.stringify(formData),
  //     });
  //   } catch (err) {
  //     console.log("login failed", err);
  //   }
  // };
  return (
    <div className="w-full h-full flex items-center justify-center gap-4">
      <div className="w-104 h-72 flex flex-col gap-3">
        <div>
          <Link href={"/"}>
            <button className="w-9 h-9 border-[gray] border flex items-center justify-center rounded-sm">
              <LeftBullet />
            </button>
          </Link>
        </div>
        <div className="w-104 h-15">
          <h1 className="font-bold text-2xl">Log in </h1>
          <p className="text-[gray]">Log in to enjoy your favorite dishes.</p>
        </div>
        <div className="flex flex-col gap-3">
          <input
            className={`w-104 h-9 rounded-sm pl-3 border ${
              error.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {error.email && <p className="text-red-500 text-xs">{error.email}</p>}
          <input
            className={`w-104 h-9 rounded-sm pl-3 border ${
              error.passWord ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Password"
            value={formData.passWord}
            onChange={(e) =>
              setFormData({ ...formData, passWord: e.target.value })
            }
          />
          {error.passWord && (
            <p className="text-red-500 text-xs">{error.passWord}</p>
          )}
          <p className="text-[#71717A] text-xs underline">Forgot password ?</p>
        </div>
        <div>
          <button
            onClick={validateForm}
            className={`w-104 h-9 border rounded-lg cursor-pointer bg-[gray]/40`}
          >
            Let's Go
          </button>
        </div>
        <div className="flex justify-center gap-2">
          <p className="text-[gray]">Don’t have an account?</p>
          <Link href={"signup"}>
            <p className="text-blue-400">Sign up </p>
          </Link>
        </div>
      </div>
      <div className="w-214 h-126 ">
        <img src="tugeegch.jpg" className="rounded-lg" />
      </div>
    </div>
  );
}
