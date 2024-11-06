import { useState } from "react";
import ButtonBack from "./ButtonBack.js";
import ButtonForward from "./ButtonForward.js";
import StepIndicator from "./StepIndicator.js";

export default function Card({ steps, currentStep, prevStep, nextStep, onDotClick }) {
  const [isExiting, setIsExiting] = useState(false);

  const handleNextStep = () => {
    setIsExiting(true);
    setTimeout(() => {
      nextStep();
      setIsExiting(false);
    }, 500);
  };

  const handlePrevStep = () => {
    setIsExiting(true);
    setTimeout(() => {
      prevStep();
      setIsExiting(false);
    }, 500);
  };

  return (
    <div className="md:max-w-sm h-screen md:h-fit md:my-5 bg-white rounded-3xl shadow flex flex-col">
      <div className={`${steps[currentStep].bgColor} p-8 rounded-t-3xl h-3/5 md:h-72 overflow-hidden flex justify-center items-center`}>
        <img src={steps[currentStep].image} alt={steps[currentStep].title} className={`${isExiting ? "animate-roll-out" : "animate-roll-in"}`} />
      </div>

      <div className="flex-grow px-6 pt-6 overflow-y-auto">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">{steps[currentStep].title}</h5>
        <p className="mb-3 text-gray-700 text-lg">{steps[currentStep].description}</p>
      </div>

      <div className="px-6 py-6 flex justify-between items-center border-t border-gray-300">
        <StepIndicator steps={steps} currentStep={currentStep} onDotClick={onDotClick} />
        <div className="flex gap-2">
          {currentStep > 0 && <ButtonBack onClick={handlePrevStep} />}
          {currentStep < steps.length - 1 && <ButtonForward onClick={handleNextStep} />}
        </div>
      </div>
    </div>
  );
}
