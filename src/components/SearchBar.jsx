import { useCallback } from 'react';
import debounce from 'lodash.debounce';
import usePhotographerStore from '../store/usePhotographerStore';

function SearchBar() {
  const setFilters = usePhotographerStore((state) => state.setFilters);

  const handleChange = useCallback(
    debounce((e) => {
      setFilters({ search: e.target.value });
    }, 400),
    []
  );

  return (
    <input
      type='text'
      placeholder='Search by name, location, or tag'
      onChange={handleChange}
      className='w-full max-w-md border border-gray-300 rounded px-4 py-2 text-sm'
    />
  );
}

export default SearchBar;
