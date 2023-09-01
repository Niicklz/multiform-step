import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import "./Form.css"
interface FormProps {
  nextStep: ()=> void;
}

export const Form = ({nextStep}:FormProps) => {
 

  return (
   <form className="form-container">
    <fieldset className="fieldset">
      <legend>Personal Info</legend>
      <p>Please provide your name, email, address and phone number.</p>

        <Input text="Email"/>
        <Input text="Email Address"/>
        <Input text="Phone Number"/>
        <Button onClick={nextStep} buttonText="Next Step"/>
    </fieldset>
   </form>
  );
};
