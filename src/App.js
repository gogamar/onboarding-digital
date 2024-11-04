import { useState } from "react";
import Card from "./components/Card";

import "./App.css";

const App = () => {
  const tutorialData = [
    {
      title: "Dedica moltes hores",
      description: "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-hi més hores. Al principi sembla impossible, però notaràs una millor ràpidament.",
    },
    {
      title: "Programa projectes propis",
      description: "Més val 10 hores treballant en projectes propis que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
    },
    {
      title: "Procura descansar",
      description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Millorarà la teva concentració i consolidaràs el teu aprenentatge.",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < tutorialData.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <div className="app">
      <Card data={tutorialData[currentStep]} nextStep={nextStep} />
    </div>
  );
};

export default App;
