import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import StandPage from './pages/stands';
import OrderStatus from './pages/orderstatus';
import Country from './pages/country';
import Reviews from './pages/reviews';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path='/stands-and-displays' element={<StandPage />} />
        <Route path='/orderstatus' element={<OrderStatus />} />
        <Route path='/country' element={<Country />} />
        <Route path='/reviews' element={<Reviews />} />
      </Route>
    </Routes>
  );
}

export default App;
