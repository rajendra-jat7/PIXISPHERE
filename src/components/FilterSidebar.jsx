import usePhotographerStore from '../store/usePhotographerStore';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';

const styleOptions = ['Traditional', 'Candid', 'Studio', 'Outdoor'];

function FilterSidebar() {
  const setFilters = usePhotographerStore((state) => state.setFilters);
  const [localFilters, setLocalFilters] = useState({
    price: [0, 20000],
    rating: 0,
    styles: [],
    city: '',
    sortBy: '',
  });

  const handleStyleChange = (style) => {
    const updated = localFilters.styles.includes(style)
      ? localFilters.styles.filter((s) => s !== style)
      : [...localFilters.styles, style];
    updateFilter('styles', updated);
  };

  const updateFilter = (key, value) => {
    const updated = { ...localFilters, [key]: value };
    setLocalFilters(updated);
    setFilters(updated);
  };

  return (
    <div className='w-40 lg:w-70 bg-white p-4 rounded-xl shadow-sm h-fit sticky top-4'>
      <SearchBar />
      <h2 className='font-semibold text-lg mb-3'>Filters</h2>

      <div className='mb-4'>
        <label className='block text-sm font-medium mb-1'>Price Range</label>
        <input
          type='range'
          min='0'
          max='20000'
          step='1000'
          value={localFilters.price[1]}
          onChange={(e) => updateFilter('price', [0, Number(e.target.value)])}
        />
        <div className='text-sm text-gray-500 mt-1'>
          Up to ₹{localFilters.price[1]}
        </div>
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-medium mb-1'>Minimum Rating</label>
        <select
          value={localFilters.rating}
          onChange={(e) => updateFilter('rating', Number(e.target.value))}
          className='border rounded px-2 py-1 w-full text-sm'
        >
          <option value={0}>All</option>
          <option value={4}>4+</option>
          <option value={3}>3+</option>
        </select>
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-medium mb-1'>Styles</label>
        <div className='flex flex-wrap gap-2'>
          {styleOptions.map((style) => (
            <label key={style} className='text-sm flex items-center gap-1'>
              <input
                type='checkbox'
                checked={localFilters.styles.includes(style)}
                onChange={() => handleStyleChange(style)}
              />
              {style}
            </label>
          ))}
        </div>
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-medium mb-1'>City</label>
        <select
          className='border rounded px-2 py-1 w-full text-sm'
          onChange={(e) => updateFilter('city', e.target.value)}
        >
          <option value=''>All</option>
          <option>Bengaluru</option>
          <option>Mumbai</option>
          <option>Delhi</option>
          <option>Hyderabad</option>
        </select>
      </div>

      <div>
        <label className='block text-sm font-medium mb-1'>Sort By</label>
        <select
          className='border rounded px-2 py-1 w-full text-sm'
          onChange={(e) => updateFilter('sortBy', e.target.value)}
        >
          <option value=''>Default</option>
          <option value='price'>Price: Low to High</option>
          <option value='rating'>Rating: High to Low</option>
          <option value='recent'>Recently Added</option>
        </select>
      </div>
    </div>
  );
}

export default FilterSidebar;
