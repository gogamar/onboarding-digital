import { useState } from "react";
import Card from "./components/Card";

import "./App.css";

// assets
import timeIcon from "./assets/time.svg";
import programmingIcon from "./assets/programming.svg";
import meditationIcon from "./assets/meditation.svg";

const App = () => {
  const steps = [
    {
      title: "Dedica moltes hores",
      description: "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-hi més hores. Al principi sembla impossible, però notaràs una millora ràpidament.",
      image: timeIcon,
      bgColor: "bg-custom-teal",
      bgHex: "#4DA2A9",
    },
    {
      title: "Programa projectes propis",
      description: "Més val 10 hores treballant en projectes propis que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
      image: programmingIcon,
      bgColor: "bg-slate-300",
      bgHex: "#CBD5E1",
    },
    {
      title: "Procura descansar",
      description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Millorarà la teva concentració i consolidaràs el teu aprenentatge.",
      image: meditationIcon,
      bgColor: "bg-amber-300",
      bgHex: "#FCD34E",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <Card steps={steps} currentStep={currentStep} prevStep={prevStep} nextStep={nextStep} onDotClick={handleStepClick} />
    </div>
  );
};

export default App;
