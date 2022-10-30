import Icon from "../Icon/Icon";
import "./Header.css";

function Header({ setOffset }) {
  function backToHome() {
    setOffset(0);
  }
  return (
    <header className="header">
      <Icon type="home" className="header__icon" onClick={() => backToHome()} />
      <span className="header__line" />
      <p className="header__text">Project</p>
    </header>
  );
}

export default Header;
