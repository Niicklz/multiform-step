import { CardPlan } from "../CardPlan/CardPlan"
import "./Plans.css"

export const Plans = () => {
  return (
    <div className="plans-container">
        <h1 className="plans-title">Select Your Plan</h1>
        <p className="plans-text">You have the option of monthly of yearly billing.</p>
        <CardPlan/>
    </div>
  )
}
