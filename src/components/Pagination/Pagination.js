import "./index.scss";

import React from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import uid from "uid";

const Pagination = ({ users, currentPage, setCurrentPage }) => {
  const times = Math.ceil(users.length / 5);
  const pages = Array.from(Array(times).keys()).map((item) => item + 1);

  const setPage = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  };
  const items = pages.map((item) => (
    <li
      key={uid()}
      className={currentPage === item ? "active pagination__arrow--disable" : "waves-effect"}
      onClick={(event) => setPage(event, item)}
    >
      <a href="/">{item}</a>
    </li>
  ));

  return (
    <ul className="pagination">
      <li
        className={currentPage === 1 ? "disabled pagination__arrow--disable" : "waves-effect"}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <RiArrowLeftSLine size={30} />
      </li>
      {items}
      <li className={currentPage === times ? "disabled pagination__arrow--disable" : "waves-effect"}>
        <RiArrowRightSLine
          size={30}
          onClick={() => setCurrentPage(currentPage + 1)}
        />
      </li>
    </ul>
  );
};

export default Pagination;
