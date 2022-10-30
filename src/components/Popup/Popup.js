/* eslint-disable react/no-array-index-key */
import { usePagination } from "../../hooks/usePagination";
import "./Popup.css";

const list = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "Faucibus pulvinar elementum integer enim",
  "Faucibus pulvinar elementum integer enim",
  "Mi bibendum neque egestas congue quisque egestas diam",
  "Venenatis lectus magna fringilla urna",
  "Venenatis lectus magna fringilla urna",
];

function Popup({ onClick }) {
  const { firstContentIndex, lastContentIndex } = usePagination({
    contentPerPage: 3,
    count: list.length,
  });

  return (
    <div className="popup">
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          aria-label="Close popup"
          onClick={onClick}
        />
        <p className="popup__subtitle">Преимущества</p>
        <h2 className="popup__title">
          Brend
          <span className="popup__title_bold">xy</span>
        </h2>
        <ul className="popup__list">
          {
          list
            .slice(firstContentIndex, lastContentIndex)
            .map((text, i) => (
              <li key={i} className="popup__item">
                <span className="popup__number">{`0${i + 1}`}</span>
                <p className="popup__text">
                  {text}
                </p>
              </li>
            ))
        }
        </ul>
      </div>
    </div>
  );
}

export default Popup;
