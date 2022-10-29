/* eslint-disable max-len */
import Button from "../Button/Button";
import "./Description.css";

import Bottle from "../../images/bottle.png";
import Bubble1 from "../../images/bubble-1.png";
import Bubble2 from "../../images/bubble-2.png";
import Bubble3 from "../../images/bubble-3.png";
import Bubble4 from "../../images/bubble-4.png";
import Bubble5 from "../../images/bubble-5.png";
import Bubble6 from "../../images/bubble-6.png";
import Bubble7 from "../../images/bubble-7.png";
import Bubble8 from "../../images/bubble-8.png";

function Description() {
  return (
    <>
      <section className="description">
        <p className="description__subtitle">Ключевое сообщение</p>
        <h2 className="description__title">
          Brend
          <span className="description__title_bold">xy</span>
        </h2>
        <div className="description__container">
          <div className="description__card description__card_big">
            <p className="description__text">Ehicula ipsim a&nbsp;arcu cursus vitae. Eu&nbsp;non diam phasellus vestibulum lorem sed risus ultiricies</p>
          </div>
          <div className="description__card description__card_small">
            <p className="description__text">A&nbsp;arcu cursus vitae</p>
          </div>
          <Button
            icon="plus"
            className="description__button"
            text="Подробнее"
          />
        </div>
      </section>
      <img src={Bottle} alt="bottle" className="bottle" />
      <img src={Bubble1} alt="bubble" className="bubble_1" />
      <img src={Bubble2} alt="bubble" className="bubble_2" />
      <img src={Bubble3} alt="bubble" className="bubble_3" />
      <img src={Bubble4} alt="bubble" className="bubble_4" />
      <img src={Bubble5} alt="bubble" className="bubble_5" />
      <img src={Bubble6} alt="bubble" className="bubble_6" />
      <img src={Bubble7} alt="bubble" className="bubble_7" />
      <img src={Bubble8} alt="bubble" className="bubble_8" />
    </>
  );
}

export default Description;
