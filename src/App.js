import './css/style.css'
import Header from './components/header/Header';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomePage from './pages/home';

function App() {
  return (
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
  );
}

export default App;
