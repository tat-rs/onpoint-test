/* eslint-disable import/prefer-default-export */
import { useState } from "react";

export function usePagination({ contentPerPage, count }) {
  const [page, setPage] = useState(1); // текущая страница
  const totalPages = Math.ceil(count / contentPerPage); // общее кол-во страниц
  const lastContentIndex = page * contentPerPage; // последний индекс массива на текущей страницы

  // первый индекс массива на текущей странице
  const firstContentIndex = lastContentIndex - contentPerPage;

  function changePage(direction) {
    setPage((state) => {
      if (direction) {
        if (state === totalPages) {
          return state;
        }
        return state + 1;
      }
      if (state === 1) {
        return state;
      }
      return state - 1;
    });
  }

  function setPageSafe(num) {
    if (num > totalPages) {
      setPage(totalPages);
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  }

  return {
    page,
    totalPages,
    lastContentIndex,
    firstContentIndex,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPageSafe,
  };
}
