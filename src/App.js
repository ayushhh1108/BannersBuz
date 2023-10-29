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
import Banner from './pages/BannersPage';
import BlogPage from './pages/BlogPage';
import BlogByCategoryPage from './pages/BlogsByCategory';
import CategoryWithBlog from './pages/CategoryWithBlog';
import AffiliateProgram from './pages/AffiliateProgram';
import SampleKit from './pages/SampleKit';
import LocalStoresPage from './pages/LocalStores';
import CharityBannerPage from './pages/CharityBanner';
import DealerRegistration from './pages/DealerRegistration';
import DealerRegistrationForm from './pages/DealerRegistrationForm';
import LoginPage from './pages/Login';
import SignUPPage from './pages/SignUPPage';
import DashboardPage from './pages/ProfileDashboard';
import ProfileOrderPage from './pages/ProfileOrder';
import ProfileQuotesPage from './pages/ProfileQuote';
import ProfileCreditPage from './pages/ProfileCredit';
import ProfilePage from './pages/ProfilePage';
import ProfileAddress from './pages/ProfileAddress';
import ProfileWalletPage from './pages/ProfileWallet';
import ProfileSupportPage from './pages/ProfileSupport';
import ProfileDesignPage from './pages/ProfileDesign';
import Quickrfq from './pages/Quickrfq';
import CheckoutCartPage from './pages/Cart';
import OrdersStatusPage from './pages/OrdersStatus';
import CheckoutSuccessPage from './pages/CheckoutSuccess';

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
        <Route path='/banner' element={<Banner />} />
        <Route path='/sampal-kit' element={<SampleKit />} />
        <Route path='/quickrfq' element={<Quickrfq />} />
        <Route path='/dealer-registration' element={<DealerRegistration />} />
        <Route path='/dealerregistration' element={<DealerRegistrationForm />} />
        <Route path='/blogs' element={<BlogPage />} />
        <Route path='/blogs/category' element={<BlogByCategoryPage />} />
        <Route path='/blogs/category/:id' element={<CategoryWithBlog />} />
        <Route path='/affiliate-program' element={<AffiliateProgram />} />
        <Route path='/local' element={<LocalStoresPage />} />
        <Route path='/free-charity-banner' element={<CharityBannerPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUPPage />} />
        <Route path='/customer/account' element={<DashboardPage />} />
        <Route path='/customer/order' element={<ProfileOrderPage />} />
        <Route path='/customer/quotations' element={<ProfileQuotesPage />} />
        <Route path='/customer/credit' element={<ProfileCreditPage />} />
        <Route path='/customer/address' element={<ProfileAddress />} />
        <Route path='/customer/account/edit' element={<ProfilePage />} />
        <Route path='/customer/wallet' element={<ProfileWalletPage />} />
        <Route path='/customer/tickets' element={<ProfileSupportPage />} />
        <Route path='/customer/design' element={<ProfileDesignPage />} />
        <Route path='/checkout/cart' element={<CheckoutCartPage />} />
        <Route path='/checkout/success' element={<CheckoutSuccessPage />} />
        <Route path='/order/status' element={<OrdersStatusPage />} />
      </Route>
    </Routes>
  );
}

export default App;
