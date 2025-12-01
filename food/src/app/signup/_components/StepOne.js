"use client";
import Link from "next/link";
import { LeftBullet } from "../../icons/left-bullet";
export const StepOne = ({ nextStep }) => {
  const handleSubmit = () => {
    nextStep();
  };
  return (
    <div className="w-full h-full flex items-center justify-center gap-4">
      <div className="w-104 h-72 flex flex-col gap-3">
        <div>
          <Link href={"/login"}>
            <button className="w-9 h-9 border-[gray] border flex items-center justify-center rounded-sm">
              <LeftBullet />
            </button>
          </Link>
        </div>
        <div className="w-104 h-15">
          <h1 className="font-bold text-2xl">Create your account</h1>
          <p className="text-[gray]">
            Sign up to explore your favorite dishes.
          </p>
        </div>
        <div>
          <input
            className={`w-104 h-9 rounded-sm pl-3 border`}
            placeholder="Enter your email address"
          />
        </div>
        <div>
          <button
            className={`w-104 h-9 border rounded-lg cursor-pointer bg-[gray]/40`}
            onClick={handleSubmit}
          >
            Let's Go
          </button>
        </div>
        <div className="flex justify-center">
          <p className="text-[gray]">Already have an account?</p>
          <Link href={"/login"}>
            <p className="text-blue-400">Log in </p>
          </Link>
        </div>
      </div>
      <div className="w-214 h-126 ">
        <img src="tugeegch.jpg" className="rounded-lg" />
      </div>
    </div>
  );
};
