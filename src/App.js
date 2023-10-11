import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import Header from './components/header/Header';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import StandPage from './pages/stands';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path='/stands-and-displays' element={<StandPage />} />
      </Route>
    </Routes>
  );
}

export default App;
