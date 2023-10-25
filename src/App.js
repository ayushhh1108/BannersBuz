import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import StandPage from './pages/stands';
import OrderStatus from './pages/orderstatus';
import Country from './pages/country';
import Reviews from './pages/reviews';
import Coupons from './pages/coupons';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsandConditions from './pages/TermsandConditions';
import Contactus from './pages/Contactus';
import Faq from './pages/Faqs';
import PhotoMegnets from './pages/PhotoMagnets';
import BlogPage from './pages/BlogPage';
import BlogByCategoryPage from './pages/BlogsByCategory';
import CategoryWithBlog from './pages/CategoryWithBlog';
import AffiliateProgram from './pages/AffiliateProgram';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path='/stands-and-displays' element={<StandPage />} />
        <Route path='/photo-magnets' element={<PhotoMegnets />} />
        <Route path='/orderstatus' element={<OrderStatus />} />
        <Route path='/country' element={<Country />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/coupons' element={<Coupons />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-and-conditions' element={<TermsandConditions />} />
        <Route path='/contact-us' element={<Contactus />} />
        <Route path='/faqs' element={<Faq />} />
        <Route path='/blogs' element={<BlogPage />} />
        <Route path='/blogs/category' element={<BlogByCategoryPage />} />
        <Route path='/blogs/category/:id' element={<CategoryWithBlog />} />
        <Route path='/affiliate-program' element={<AffiliateProgram />} />
      </Route>
    </Routes>
  );
}

export default App;
