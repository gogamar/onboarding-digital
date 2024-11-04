export default function StepIndicator({ steps, currentStep }) {
  return (
    <div className="flex items-center justify-center space-x-2">
      {steps.map((_, index) => (
        <div key={index} className={index === currentStep ? "h-2 w-6 bg-gray-600 rounded-lg" : "h-2 w-2 bg-gray-400 rounded-full"} />
      ))}
    </div>
  );
}
