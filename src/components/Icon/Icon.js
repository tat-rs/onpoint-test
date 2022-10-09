import icons from "./icons";

function Icon({ type, className }) {
  return <span className={className}>{icons[type]}</span>;
}

export default Icon;
