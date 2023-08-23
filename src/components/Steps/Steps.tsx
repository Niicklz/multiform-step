import "./Steps.css"
interface StepsProps {
    stepValue: number;
}


export const Steps = ({stepValue}:StepsProps) => {
  return (
    <div className="step">
        <p>{stepValue}</p>
    </div>
  )
}
