/* eslint-disable react/jsx-one-expression-per-line */
import Button from "../Button/Button";
import SpermImage from "../../images/pink-sperm.png";
import ShereBig1 from "../../images/shere-big-1.png";
import ShereBig2 from "../../images/shere-big-2.png";
import ShereSmall1 from "../../images/shere-small-1.png";
import ShereSmall2 from "../../images/shere-small-2.png";
import "./Main.css";

function Main({ offset, setOffset, PAGE_WIDTH }) {
  function nextSlide() {
    setOffset(offset - PAGE_WIDTH);
  }
  return (
    <section className="main">
      <div className="main__container">
        <p className="main__text">Привет,</p>
        <h1 className="main__title">
          Это <span className="main__title_bold">не</span>
          <br />
          коммерческое
          <br />
          задание
        </h1>
        <Button icon="arrowRight" text="Что дальше?" className="main__button" onClick={() => nextSlide()} />
      </div>
      <img className="sperm" src={SpermImage} alt="sperm" />
      <img className="shere-big-1" src={ShereBig1} alt="shere big" />
      <img className="shere-big-2" src={ShereBig2} alt="shere big" />
      <img className="shere-small-1" src={ShereSmall1} alt="shere small" />
      <img className="shere-small-2" src={ShereSmall2} alt="shere small" />
    </section>
  );
}

export default Main;
