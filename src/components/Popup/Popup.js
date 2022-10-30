/* eslint-disable react/no-array-index-key */
import { usePagination } from "../../hooks/usePagination";
import Pagination from "../Pagination/Pagination";
import "./Popup.css";

const list = [{
  id: 1,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
},
{
  id: 2,
  text: "Faucibus pulvinar elementum integer enim",
},
{
  id: 3,
  text: "Faucibus pulvinar elementum integer enim",
},
{
  id: 4,
  text: "Mi bibendum neque egestas congue quisque egestas diam",
},
{
  id: 5,
  text: "Venenatis lectus magna fringilla urna",
},
{
  id: 6,
  text: "Venenatis lectus magna fringilla urna",
},
];

function Popup({ onClick }) {
  const {
    page, firstContentIndex, lastContentIndex, totalPages, nextPage, prevPage, setPageSafe,
  } = usePagination({
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
            .map((el) => (
              <li key={el.id} className="popup__item">
                <span className="popup__number">{`0${el.id}`}</span>
                <p className="popup__text">
                  {el.text}
                </p>
              </li>
            ))
        }
        </ul>
        {
        totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            page={page}
            nextPage={nextPage}
            prevPage={prevPage}
            setPage={setPageSafe}
          />
        )
      }
      </div>
    </div>
  );
}

export default Popup;
