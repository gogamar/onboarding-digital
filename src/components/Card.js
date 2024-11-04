import RoundButton from "./RoundButton.js";
import StepIndicator from "./StepIndicator.js";

export default function Card({ steps, currentStep, nextStep }) {
  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      nextStep();
    }
  };
  return (
    <div class="lg:max-w-sm h-screen lg:h-full lg:my-5 bg-white rounded-3xl shadow">
      <div className={`${steps[currentStep].bgColor} p-6 rounded-t-3xl h-96 lg:h-fit overflow-hidden `}>
        <img src={steps[currentStep].image} alt={steps[currentStep].title} className="p-10" />
      </div>

      <div class="px-6 pt-6">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">{steps[currentStep].title}</h5>

        <p class="mb-3 text-gray-700">{steps[currentStep].description}</p>
        <div className="flex justify-between my-6 text-sm/6 text-gray-600 xl:mt-10">
          <StepIndicator steps={steps} currentStep={currentStep} />
          <RoundButton onClick={handleNextStep} />
        </div>
      </div>
    </div>
  );
}
