import "./Steps.css"
interface StepsProps {
    stepValue: number;
    currentStep:number;
}


export const Steps = ({stepValue, currentStep}:StepsProps) => {
  return (
    <div className={`step ${currentStep == stepValue? `step-active`: " "}`}>
        <p>{stepValue}</p>
    </div>
  )
}
