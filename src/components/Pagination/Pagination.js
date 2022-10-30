/* eslint-disable react/no-array-index-key */
import "./Pagination.css";

function Pagination({
  page, totalPages, nextPage, prevPage, setPage,
}) {
  return (
    <div className="pagination">
      <button
        className="pagination__change-page pagination__change-page_prev"
        type="button"
        onClick={prevPage}
        aria-label="Previous page"
      />
      <div className="pagination__container">
        {
        [...Array(totalPages)].map((el, i) => (
          <button
            className={`pagination__current-page ${page === i + 1 ? "pagination__current-page_active" : ""}`}
            key={i}
            type="button"
            onClick={() => setPage(i + 1)}
            aria-label="Current page"
          />
        ))
      }
      </div>
      <button
        className="pagination__change-page pagination__change-page_next"
        type="button"
        onClick={nextPage}
        aria-label="Next page"
      />
    </div>
  );
}

export default Pagination;
