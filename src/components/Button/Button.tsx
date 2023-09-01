import "./Button.css";
interface ButtonProps {
  onClick?: () => void;
  buttonText: string;
}

export const Button = ({ onClick, buttonText }: ButtonProps) => {
  return (
    <button className="button-comp" onClick={onClick} type="button">
      {buttonText}
    </button>
  );
};
