import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import CategoryListing from './pages/CategoryListing';
import PhotographerProfile from './pages/PhotographerProfile';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/category/maternity' />} />
      <Route path='/category/:type' element={<CategoryListing />} />
      <Route path='/photographer/:id' element={<PhotographerProfile />} />
    </Routes>
  );
}

export default App;
