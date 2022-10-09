import Icon from "../Icon/Icon";
import "./Button.css";

function Button({ icon, text, className }) {
  return (
    <button
      className={`button ${className ? `${className}` : ""}`}
      type="button"
    >
      <Icon type={icon} className="button__icon" />
      <p className="button__text">{text}</p>
    </button>
  );
}

export default Button;
