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
import OnePageCheckout from './pages/OnePageCheckout';
import OrdersStatusPage from './pages/OrdersStatus';
import CheckoutSuccessPage from './pages/CheckoutSuccess';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path='/stands-and-displays' element={<StandPage />} />                   // done o
        <Route path='/photo-magnets' element={<PhotoMegnets />} />                        // done o
        <Route path='/orderstatus' element={<OrderStatus />} />                           // doneo
        <Route path='/country' element={<Country />} />                                         //doneo
        <Route path='/reviews' element={<Reviews />} />                                      //doneo
        <Route path='/coupons' element={<Coupons />} />                                       // doneo
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />                        // doneo
        <Route path='/about-us' element={<AboutUs />} />                                  // doneo
        <Route path='/terms-and-conditions' element={<TermsandConditions />} />             //doneo
        <Route path='/contact-us' element={<Contactus />} />                              // done o
        <Route path='/faqs' element={<Faq />} />                                            // doneo
        <Route path='/banner' element={<Banner />} />                                       // doneo
        <Route path='/sampal-kit' element={<SampleKit />} />                              // doneo
        <Route path='/quickrfq' element={<Quickrfq />} />                                 //done o
        <Route path='/dealer-registration' element={<DealerRegistration />} />            // doneo
        <Route path='/dealerregistration' element={<DealerRegistrationForm />} />         // doneo
        <Route path='/blogs' element={<BlogPage />} />                                      // doneo
        <Route path='/blogs/category' element={<BlogByCategoryPage />} />                     // doneo
        <Route path='/blogs/category/:id' element={<CategoryWithBlog />} />                      // doneo
        <Route path='/affiliate-program' element={<AffiliateProgram />} />                    // doneo
        <Route path='/local' element={<LocalStoresPage />} />                                 // doneo
        <Route path='/free-charity-banner' element={<CharityBannerPage />} />                 // doneo
        <Route path='/login' element={<LoginPage />} />                                       // doneo
        <Route path='/sign-up' element={<SignUPPage />} />                                    // doneo
        <Route path='/customer/account' element={<DashboardPage />} />                        //
        <Route path='/customer/order' element={<ProfileOrderPage />} />                        //
        <Route path='/customer/quotations' element={<ProfileQuotesPage />} />                        //
        <Route path='/customer/credit' element={<ProfileCreditPage />} />                        //
        <Route path='/customer/address' element={<ProfileAddress />} />                        //
        <Route path='/customer/account/edit' element={<ProfilePage />} />                        //
        <Route path='/customer/wallet' element={<ProfileWalletPage />} />                        //
        <Route path='/customer/tickets' element={<ProfileSupportPage />} />                        //
        <Route path='/customer/design' element={<ProfileDesignPage />} />                        //
        <Route path='/checkout/cart' element={<CheckoutCartPage />} />                        //
        <Route path='/onepagecheckout' element={<OnePageCheckout />} />                           // done o
        <Route path='/checkout/success' element={<CheckoutSuccessPage />} />                    // done o
        <Route path='/order/status' element={<OrdersStatusPage />} />                           // done o
      </Route>
    </Routes>
  );
}

export default App;
