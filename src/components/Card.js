import ButtonBack from "./ButtonBack.js";
import ButtonForward from "./ButtonForward.js";
import StepIndicator from "./StepIndicator.js";

export default function Card({ steps, currentStep, prevStep, nextStep }) {
  return (
    <div className="lg:max-w-sm h-screen lg:h-fit lg:my-5 bg-white rounded-3xl shadow flex flex-col">
      <div className={`${steps[currentStep].bgColor} p-8 rounded-t-3xl h-72 overflow-hidden`}>
        <img src={steps[currentStep].image} alt={steps[currentStep].title} className="p-8 object-contain" />
      </div>

      <div className="flex-grow px-6 pt-6 overflow-y-auto">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">{steps[currentStep].title}</h5>
        <p className="mb-3 text-gray-700">{steps[currentStep].description}</p>
      </div>

      <div className="px-6 py-4 flex justify-between items-center border-t border-gray-300">
        <StepIndicator steps={steps} currentStep={currentStep} />
        <div className="flex gap-2">
          {currentStep > 0 && <ButtonBack onClick={prevStep} />}
          {currentStep < steps.length - 1 && <ButtonForward onClick={nextStep} />}
        </div>
      </div>
    </div>
  );
}
