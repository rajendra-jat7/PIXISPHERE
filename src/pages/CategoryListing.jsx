import { useEffect, useState } from 'react';
import usePhotographerStore from '../store/usePhotographerStore';
import SearchBar from '../components/SearchBar';
import FilterSidebar from '../components/FilterSidebar';
import Card from '../components/Card';
import Loader from '../components/Loader';
import PhotographerModal from '../components/PhotographerModal';
import Pagination from '../components/Pagination';

function CategoryListing() {
  const { fetchPhotographers, filtered, loading } = usePhotographerStore();

  const [selectedId, setSelectedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);
  const itemsPerPage = 6;

  useEffect(() => {
    fetchPhotographers();
  }, []);

  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className='w-full flex flex-col justify-center items-center p-4 max-w-[1600px] mx-auto'>
      <div className='w-full flex justify-center items-center mb-4'>
        <h1 className='text-3xl align-middle font-bold mb-4 text-gray-800 w-full md:w-auto'>
          ✨ Maternity Photographers in Bengaluru ✨
        </h1>

        <button onClick={() => setShowSidebar(true)} className='md:hidden'>
          <svg
            className='w-6 h-6 text-gray-700'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>

      {/* Search Bar (Optional) */}
      {/* <div className='w-full mb-4'>
        <SearchBar />
      </div> */}

      <div className='flex flex-col lg:flex-row gap-8 w-full'>
        <div className='hidden md:block w-[250px] shrink-0'>
          <FilterSidebar />
        </div>

        {showSidebar && (
          <div className='fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end'>
            <div className='w-140 bg-white h-full p-4'>
              <div className='flex justify-between items-center mb-4'>
                <h2 className='text-lg font-semibold'>Filters</h2>
                <button onClick={() => setShowSidebar(false)}>✕</button>
              </div>
              <FilterSidebar />
            </div>
          </div>
        )}

        <div className='flex-1 pl-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
          {loading ? (
            <Loader />
          ) : paginated.length === 0 ? (
            <p>No photographers found.</p>
          ) : (
            paginated.map((p) => (
              <Card key={p.id} photographer={p} onOpenModal={setSelectedId} />
            ))
          )}
        </div>
      </div>

      {!loading && filtered.length > itemsPerPage && (
        <Pagination
          totalItems={filtered.length}
          itemsPerPage={itemsPerPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}

      {selectedId && (
        <PhotographerModal
          id={selectedId}
          onClose={() => setSelectedId(null)}
        />
      )}
    </div>
  );
}

export default CategoryListing;
