import Icon from "../Icon/Icon";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Icon type="home" className="header__icon" />
      <span className="header__line" />
      <p className="header__text">Project</p>
    </header>
  );
}

export default Header;
