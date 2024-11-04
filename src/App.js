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
    },
    {
      title: "Programa projectes propis",
      description: "Més val 10 hores treballant en projectes propis que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
      image: programmingIcon,
      bgColor: "bg-slate-300",
    },
    {
      title: "Procura descansar",
      description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Millorarà la teva concentració i consolidaràs el teu aprenentatge.",
      image: meditationIcon,
      bgColor: "bg-amber-300",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <div className="bg-gray-200 flex justify-center items-center">
      <Card steps={steps} currentStep={currentStep} nextStep={nextStep} />
    </div>
  );
};

export default App;
