import { Steps } from "./components/Steps/Steps";
import "./sanitize.css";
import "./styles.css";

export const MultiFormApp = () => {
  return (
    <div className="container">
      <div className="card">
        <header>
          <Steps stepValue={1} />
          <Steps stepValue={2} />
          <Steps stepValue={3} />
          <Steps stepValue={4} />
        </header>
        <main>
          <form action="">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button>Check</button>
          </form>
        </main>
      </div>
    </div>
  );
};
