"use client";

import { useState } from "react";
import { StepOne } from "./_components/StepOne";
import { StepTwo } from "./_components/StepTwo";

export default function Home() {
  const [step, setStep] = useState(1);
  return (
    <div>
      {step === 1 && <StepOne nextStep={() => setStep(2)} />}
      {step === 2 && <StepTwo nextStep={() => setStep(1)} />}
    </div>
  );
}
