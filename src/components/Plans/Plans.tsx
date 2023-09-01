
import { CardPlan } from "../CardPlan/CardPlan.tsx";


import "./Plans.css";

export const Plans = () => {
    const fntest = (e:React.ChangeEvent<HTMLInputElement>)=> {
        const target = e.target as HTMLInputElement
        console.log(target.checked);
        
        
    }
  return (
    <div className="plans-container">
      <h1 className="plans-title">Select Your Plan</h1>
      <p className="plans-text">
        You have the option of monthly of yearly billing.
      </p>
      <CardPlan />
      <CardPlan />
      <CardPlan />
      <div className="plan-type-container">
        <p className="monthly-plans active">Monthly</p>
        <div className="inputBox">
          <input type="checkbox" id="mySwitch" onChange={fntest}/>
          <label htmlFor="mySwitch">
            <div className="circle"></div>
          </label>
        </div>
        <p className="yearly-plans">Yearly</p>
      </div>
    </div>
  );
};
