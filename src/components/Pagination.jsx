import { useState } from 'react';

function Pagination({ itemsPerPage = 6, totalItems = 0, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((p) => {
        onPageChange(p + 1);
        return p + 1;
      });
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((p) => {
        onPageChange(p - 1);
        return p - 1;
      });
    }
  };

  return (
    <div className='mt-6 flex justify-center items-center gap-4'>
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className='px-4 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-40 text-sm'
      >
        Prev
      </button>
      <span className='text-sm text-gray-700'>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className='px-4 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-40 text-sm'
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
