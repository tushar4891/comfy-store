import React from "react";
import { Link } from "react-router-dom";

function Pagination({ postPerPage, totalPost, paginate, currentPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++)
    pageNumbers.push(i);

  return (
    <nav>
      <ul className="pagination mt-5 justify-content-end me-5 mb-5">
        <button
          onClick={() => paginate(currentPage - 1)}
          className={`fs-6 page-link ${currentPage === 1 ? "disabled" : ""}`}
          style={{ background: "#f0f6ff" }}
        >
          PREV
        </button>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="page-item "
            style={{ background: "#f0f6ff" }}
          >
            <Link
              onClick={() => paginate(number)}
              to={`/products?page=${number}`}
              className="page-link fs-6"
            >
              {number}
            </Link>
          </li>
        ))}
        <li className="page-item">
          {/* Next button */}
          <button
            onClick={() => paginate(currentPage + 1)}
            className={`fs-6 page-link ${
              currentPage === Math.ceil(totalPost / postPerPage)
                ? "disabled"
                : ""
            }`}
            style={{ background: "#f0f6ff" }}
          >
            NEXT
          </button>
        </li>
      </ul>
    </nav>
  );
}
export default Pagination;
