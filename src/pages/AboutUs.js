import Footer from "../components/Footer";
import { OnlyBreadCrum } from "../components/breadcrum/breadcrum";
import Header from "../components/header/Header";
import AboutUsBanner from '../assets/banner-about-us.png';
import Cutting from '../assets/cutting.svg';
import Easy from '../assets/Easy.svg';
import Fax from '../assets/fax.svg';
import Group from '../assets/Group.svg';
import HQ from '../assets/HQ.svg';
import Info from '../assets/Info.svg';
import ResonBanner from '../assets/ReasonMainImg.svg';
import Clock from '../assets/clock.png';
import Car from '../assets/car.png';
import QualityRecord from '../assets/QualityRecord.png';
import BayPort from '../assets/bayport.svg'
import Subscribe from '../assets/subscribe.svg'
import MBBanner from '../assets/bannermobile.jpg'
import SubscribeSection from "../components/SecoundLast";

const AboutUs = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <OnlyBreadCrum />
            </div>
            <div>
                <img alt="banner" src={AboutUsBanner} className="w-100 d-none d-md-block" />
                <img alt="banner" src={MBBanner} className="w-100 d-block d-md-none" />
            </div>
            <div className="container record-section">
                <div className="record-box">
                    <div className="col-12 col-md-3 text-center">
                        <h2>10 mm</h2>
                        <p className="m-2 m-md-0">Happy Customers</p>
                    </div>
                    <div className="col-12 col-md-3 text-center">
                        <h2>1500+</h2>
                        <p className="m-2 m-md-0">Team Members</p>
                    </div>
                    <div className="col-12 col-md-3 text-center">
                        <h2>10000+</h2>
                        <p className="m-2 m-md-0">Products</p>
                    </div>
                    <div className="col-12 col-md-3 text-center">
                        <h2>6</h2>
                        <p className="m-2 m-md-0">Countries</p>
                    </div>
                </div>
            </div>
            <div className="py-5" style={{ backgroundColor: 'rgb(67, 58, 119)' }}>
                <div className="container text-center text-white">
                    <h2 className="fs-1">You Imagine. We Create.</h2>
                    <p className="m-0 mx-auto col-12 col-lg-8">We have an extremely diverse range of products and are constantly adding to it. With a vast range of products and services ranging from custom vinyl banners, to trade show displays, to signs, stickers, throws and more, BannerBuzz is your one stop shop for all custom advertising merchandise. With our state of the art printing technology, we aim to provide top-notch quality products at excellent prices, and guarantee a brilliant customer experience.</p>
                </div>
            </div>
            <div className="py-5 bg-light">
                <div className="container text-center text-white">
                    <h2 className="pri-text mb-5 fs-1">Reasons Why <br /> Customers Are Loyal To Us</h2>
                </div>
                <div className="col-12"><img src={ResonBanner} className="d-block d-md-none w-75 mx-auto" /></div>
                <div className="MiddelBox">
                    <div className="ReasonContentSec1 me-4 me-md-0">
                        <div className="ContentBox"><img src={Info} />
                            <p className="fs-6">Countless<br /><br />Product Choices</p>
                        </div>
                        <div className="ContentBox"><img src={Group} />
                            <p className="fs-6">Customized<br /><br />to Perfection</p>
                        </div>
                        <div className="ContentBox"><img src={HQ} />
                            <p className="fs-6">High Quality<br /><br />Inks</p>
                        </div>
                    </div>
                    <div className="ReasonImg"><img src={ResonBanner} className="d-none d-md-block" /></div>
                    <div className="ReasonContentSec2">
                        <div className="ContentBox"><img src={Easy} />
                            <p className="fs-6">Easy-To-Use<br /><br />Design Tool</p>
                        </div>
                        <div className="ContentBox"><img src={Fax} />
                            <p className="fs-6">Cutting Edge<br /><br />Printing Process</p>
                        </div>
                        <div className="ContentBox"><img src={Cutting} />
                            <p className="fs-6">Highest Quality<br /><br />Guaranteed</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-light house-container">
                <div className=" text-center text-white " >
                    <h2 className="pri-text mb-2 fs-1">We Handle Everything In-House</h2>
                    <p className="order-sub-head">From Order Placement to Final Delivery</p>
                    <div className="ShippingContent">
                        <img src={QualityRecord} alt="QualityRecord" />
                        <p className="FirstText">Premium Quality</p>
                        <p className="SecondText">100% Quality<br /><br />Adherence</p>
                    </div>
                    <div className="ShippingContent"><img src={Car} alt="car" />
                        <p className="FirstText">Priority shipping</p>
                        <p className="SecondText">For Faster<br /><br />Delivery</p>
                    </div>
                    <div className="ShippingContent mr-0"><img src={Clock} alt="clock" />
                        <p className="FirstText">24x7 Customer Support</p>
                        <p className="SecondText">Quick &amp; Efficient<br /><br />Issue Resolving</p>
                    </div>
                </div>
            </div>
            <div className="OurStoryBox pb-5">
                <div className="container row">
                    <div className="col-12 col-md-5 col-xl-6"></div>
                    <div className="col-12 col-md-7 col-xl-6">
                        <p>Nishant Shah</p>
                        <h3 className="mb-4 pri-text fs-1">Our Story</h3>
                        <p>In 2010 CEO Nishant Shah needed custom signage for his eco-friendly car wash business. The problem was, local shops were often unable to fulfill the demands of customizing signs that suited his specific brand and marketing needs. In need of printed materials for his business and recognizing an untapped market, he created the online custom signage platform and ended up revolutionizing the signs &amp; displays industry globally.</p>
                    </div>
                </div>
            </div>
            <div className="py-5 sec-bg" >
                <div className="container text-center">
                    <img src={BayPort} />
                    <h2 className="pri-text fs-1 my-2">Empowering Businesses Worldwide</h2>
                    <p className=" col-12 col-md-9 mx-auto fs-5">Group Bayport, a trailblazer in the custom products industry, is a leading conglomerate of various e-commerce brands specializing in different customized and personalized advertising products and covering solutions. Group Bayport houses various brands, namely BannerBuzz, Covers &amp; All, Giant Media, Circle One, Neon Earth, and Vivyx Printing, under its umbrella.</p>
                    <div className="SiteIconImg"></div>
                </div>
            </div>
            <div className="pb-5">
                <div className="container">
                    <div className="updateFromBoxABoutUs flex-wrap">
                        <img src={Subscribe} alt="Subscribe" />
                        <div className="col-12 col-lg-5 flex-wrap">
                            <p className="Contenttitle">Be the First to Get Timely Updates &amp; Avail Additional Benefits</p>
                            <p className="text-white">Subscribe to our newsletter and get 20% OFF on Your First Order + Free Shipping.</p>
                            <div className="d-flex gap-1  flex-wrap flex-lg-nowrap">
                                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <button type="button" className="btn btn-warning w-100 mb-3 sub-btn mb-lg-0">SubScribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SubscribeSection />
            <Footer />
        </>
    )
}

export default AboutUs;