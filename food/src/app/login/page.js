"use client";
import { useState } from "react";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
export default function Home() {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    // <StepOne />
    // ,
    <StepTwo />
  );
}
