/* eslint-disable react/jsx-one-expression-per-line */
import Button from "../Button/Button";
import "./Main.css";

function Main() {
  return (
    <section className="main">
      <p className="main__text">Привет,</p>
      <h1 className="main__title">
        Это <span className="main__title_bold">не</span>
        <br />
        коммерческое
        <br />
        задание
      </h1>
      <Button icon="arrowRight" text="Что дальше?" className="main__button" />
    </section>
  );
}

export default Main;
