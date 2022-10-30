import icons from "./icons";

function Icon({ type, className, onClick }) {
  if (onClick) {
    return (
      <button className={`icon-btn ${className}`} type="button" onClick={onClick}>
        {icons[type]}
      </button>
    );
  }
  return <span className={className}>{icons[type]}</span>;
}

export default Icon;
