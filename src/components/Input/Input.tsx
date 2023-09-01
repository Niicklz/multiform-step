import "./Input.css";
import { useEffect, useState } from "react";
interface InputProps {
  text: string;
}
export const Input = ({ text }: InputProps) => {
  const [labelText, setLabelText] = useState<string[]>([]);

  const letterSplitter = (text: string) => {
    const newValue: string[] = text.split("");

    setLabelText(newValue);
  };
  useEffect(() => {
    letterSplitter(text);
  }, []);

  return (
    <div className="input-container">
      <input type="email" id="email" required />
      <label id="emailLabel" htmlFor="email">
        {labelText.map((letter, index) =>
          letter !== " " ? (
            <span key={index} style={{ transitionDelay: `${index * 30}ms` }}>
              {letter}
            </span>
          ) : (
            " "
          )
        )}
      </label>
    </div>
  );
};
