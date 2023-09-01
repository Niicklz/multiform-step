import { useState } from "react";
import { Form } from "./components/Form/Form";
import { Steps } from "./components/Steps/Steps";
import "./styles.css"


export const MultiFormApp = () => {
  const [currentStep, setCurrentStep] = useState<number>(1)

  const nextStep = ()=> {
    currentStep < 4 &&  setCurrentStep((currentStep)=> currentStep+1)
   
    console.log(currentStep);
    
    console.log("click");
    
  }

  return (
    <div className="container">
      <div className="card">
        <header className="header">
          <Steps stepValue={1} currentStep={currentStep}/>
          <Steps stepValue={2} currentStep={currentStep}/>
          <Steps stepValue={3} currentStep={currentStep}/>
          <Steps stepValue={4} currentStep={currentStep}/>
        </header>
        <main className="main">
      <Form nextStep={nextStep}/>
         
        </main>
      </div>
    </div>
  );
};
