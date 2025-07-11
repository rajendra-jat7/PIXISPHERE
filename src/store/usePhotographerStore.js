import { create } from 'zustand';
import axios from 'axios';

const usePhotographerStore = create((set, get) => ({
  photographers: [],
  filtered: [],
  loading: false,
  filters: {
    priceRange: [0, 20000],
    rating: 0,
    styles: [],
    city: '',
    sortBy: '',
    search: '',
  },
  fetchPhotographers: async () => {
    set({ loading: true });
    try {
      const res = await axios.get('http://localhost:3001/photographers');
      set({ photographers: res.data, filtered: res.data, loading: false });
    } catch (err) {
      console.error('API Error:', err);
      set({ loading: false });
    }
  },
  setFilters: (newFilters) => {
    const filters = { ...get().filters, ...newFilters };
    const all = get().photographers;

    let filtered = all.filter((p) => {
      const inPrice =
        p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1];
      const inRating = p.rating >= filters.rating;
      const inStyles =
        filters.styles.length === 0 ||
        filters.styles.every((s) => p.styles.includes(s));
      const inCity =
        !filters.city ||
        p.location.toLowerCase() === filters.city.toLowerCase();
      const inSearch = [p.name, p.location, ...(p.tags || [])].some((f) =>
        f.toLowerCase().includes(filters.search.toLowerCase())
      );
      return inPrice && inRating && inStyles && inCity && inSearch;
    });

    // Sorting
    if (filters.sortBy === 'price') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (filters.sortBy === 'recent') {
      filtered.sort((a, b) => b.id - a.id);
    }

    set({ filters, filtered });
  },
}));

export default usePhotographerStore;
