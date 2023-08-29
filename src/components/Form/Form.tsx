import { Input } from "../Input/Input";
import "./Form.css"

export const Form = () => {
 

  return (
   <form className="form-container">
    <fieldset className="fieldset">
      <legend>Personal Info</legend>
      <p>Please provide your name, email, address and phone number.</p>

        <Input text="Email"/>
        <Input text="Email Address"/>
        <Input text="Phone Number"/>
        
    </fieldset>
   </form>
  );
};
