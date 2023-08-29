import { Form } from "./components/Form/Form";
import { Steps } from "./components/Steps/Steps";
import "./styles.css"


export const MultiFormApp = () => {
  return (
    <div className="container">
      <div className="card">
        <header className="header">
          <Steps stepValue={1} />
          <Steps stepValue={2} />
          <Steps stepValue={3} />
          <Steps stepValue={4} />
        </header>
        <main className="main">
      <Form/>
         
        </main>
      </div>
    </div>
  );
};
