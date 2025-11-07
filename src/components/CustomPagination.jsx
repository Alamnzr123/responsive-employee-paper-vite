import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const CustomPagination = ({
  itemsCount,
  itemsPerPage,
  currentPage,
  setCurrentPage,
  alwaysShown = true,
}) => {
  const pagesCount = Math.ceil(itemsCount / itemsPerPage);
  const isPaginationShown = alwaysShown ? true : pagesCount > 1;
  const isCurrentPageFirst = currentPage === 1;
  const isCurrentPageLast = currentPage === pagesCount;
  const changePage = (number) => {
    const page = Number(number);
    if (!page || page === currentPage) return;
    const bounded = Math.max(1, Math.min(pagesCount, page));
    setCurrentPage(bounded);
  };
  const onPageNumberClick = (pageNumber) => {
    changePage(pageNumber);
  };

  const onPreviousPageClick = () => {
    if (currentPage > 1) changePage(currentPage - 1);
  };

  const onNextPageClick = () => {
    if (currentPage < pagesCount) changePage(currentPage + 1);
  };

  const setLastPageAsCurrent = () => {
    if (currentPage > pagesCount) {
      pagesCount && setCurrentPage(pagesCount);
    }
  };

  let isPageNumberOutOfRange;

  const pageNumbers = [...new Array(pagesCount)].map((_, index) => {
    const pageNumber = index + 1;
    const isPageNumberFirst = pageNumber === 1;
    const isPageNumberLast = pageNumber === pagesCount;
    const isCurrentPageWithinTwoPageNumbers = Math.abs(pageNumber - currentPage) <= 2;

    if (isPageNumberFirst || isPageNumberLast || isCurrentPageWithinTwoPageNumbers) {
      isPageNumberOutOfRange = false;
      return (
        <Pagination.Item
          activeLabel=""
          key={pageNumber}
          onClick={() => onPageNumberClick(pageNumber)}
          active={pageNumber === currentPage}
        >
          {pageNumber}
        </Pagination.Item>
      );
    }

    if (!isPageNumberOutOfRange) {
      isPageNumberOutOfRange = true;
      return <Pagination.Ellipsis key={pageNumber} className="muted" />;
    }

    return null;
  });

  React.useEffect(setLastPageAsCurrent, [pagesCount]);

  return (
    <React.Fragment>
      {isPaginationShown && (
        <Pagination className="ae-pagination-wrapper">
          <Pagination.Prev
            className={isCurrentPageFirst ? 'disable' : ''}
            onClick={onPreviousPageClick}
            disabled={isCurrentPageFirst}
          />
          {pageNumbers}
          <Pagination.Next
            onClick={onNextPageClick}
            disabled={isCurrentPageLast}
            className={isCurrentPageLast ? 'disable' : ''}
          />
        </Pagination>
      )}
    </React.Fragment>
  );
};

export default CustomPagination;
