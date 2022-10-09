import Logo from "../../images/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={Logo} alt="Логотип" />
    </footer>
  );
}

export default Footer;
