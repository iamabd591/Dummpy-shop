import React from "react";
import "./SearchProducts.css";
const Pagination = ({
  totalPosts,
  postPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const pages = [];
  for (let i = 1; i <= Math?.ceil(totalPosts / postPerPage); i++) {
    pages?.push(i);
  }
  return (
    <div className="pagination">
      {pages?.map((page, i) => {
        return (
          <button key={i} onClick={() => setCurrentPage(page)}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
