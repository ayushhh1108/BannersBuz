import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { OnlyBreadCrum } from "../components/breadcrum/breadcrum";
import ThumbsSlider from "../components/ThumbsSlider";
import star from '../assets/star.svg'
import halfstar from '../assets/half-start.svg'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Star from '../assets/bluestar.png';
import Truck from '../assets/truck.png';
import Scale from '../assets/scale.png';
import Support from '../assets/designsupport.png'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Bannerside from '../assets/Banner-Sides.jpg'
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ChatIcon from '../assets/chat-now.svg';
import CreateChatIcon from '../assets/blogs.svg';
import cardImg from "../assets/pexels.jpg";
import { Card } from "react-bootstrap";
import SubscribeSection from "../components/SecoundLast";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Simple tooltip
        </Tooltip>
    );
    return (
        <div>
            <Header />
            <div className="w-cm">
                <OnlyBreadCrum />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <div className="position-sticky top-0">
                                <ThumbsSlider />
                            </div>
                        </div>
                        <div className="col-12 col-md-7">
                            <h1 className="f-size-18 fw-bold">Photo Magnets</h1>
                            <div className="d-flex flex-wrap align-items-center f-size-14">
                                <div className="me-4 d-flex align-items-center">
                                    <img src={star} alt='star' />
                                    <img src={star} alt='star' />
                                    <img src={star} alt='star' />
                                    <img src={star} alt='star' />
                                    <img src={halfstar} alt='star' />
                                </div>
                                <div className="f-size-14">
                                    <a className="text-primary cursor-pointer primary-color" href="#">3279 Reviews</a> <span> | </span>
                                    <a className="text-primary cursor-pointer primary-color" href="#"> Product Specifications </a> <span> | </span>
                                    <a className="text-primary cursor-pointer primary-color" href="#"> Ask a Question </a><span> | </span>
                                    <span>SKU : BBPTMT01</span>
                                </div>
                            </div>
                            <div className="px-2 py-1 d-inline-block my-2 f-size-14" style={{ backgroundColor: '#fff2d3' }}>
                                <span>Priority Overnight by 26 Oct, Thursday | 30102, US | </span>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                ><button type="button" class="btn btn-light py-0 px-2 f-size-12">Change</button></OverlayTrigger>
                            </div>
                            <div className="d-flex flex-wrap justify-content-around py-4 w-90 mx-auto">
                                <div className="text-center">
                                    <img src={Truck} />
                                    <p className="font-monospace mt-3">Free Shipping</p>
                                </div>
                                <div className="text-center">
                                    <img src={Star} />
                                    <p className="font-monospace mt-3">Premium Quality</p>
                                </div>
                                <div className="text-center">
                                    <img src={Scale} />
                                    <p className="font-monospace mt-3">Free Design Proof</p>
                                </div>
                                <div className="text-center">
                                    <img src={Support} />
                                    <p className="font-monospace mt-3">Design Support</p>
                                </div>
                            </div>
                            <p className="fw-bold">Choose Material</p>
                            <div className="d-flex f-size-14 ">
                                <div className="text-center me-3">
                                    <div className="Material-box active"></div>
                                    Viny!
                                </div>
                                <div className="text-center">
                                    <div className="Material-box"></div>
                                    Polyester
                                </div>
                            </div>
                            <div className="d-flex align-items-center my-4 f-size-14">
                                <span className='me-4'>Size (W X H)</span>
                                <Form.Select className='me-2 f-size-14' style={{ width: "120px" }}>
                                    <option>3 x 3</option>
                                </Form.Select>
                            </div>
                            <Nav variant="tabs" defaultActiveKey="/home" className="f-size-14">
                                <Nav.Item>
                                    <Nav.Link href="/home">Popular Sizes</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">Custom Size</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <div className="d-flex flex-wrap clip-box f-size-14">
                                <div className="clip-border active m-1">3 x 2</div>
                                <div className="clip-border m-1">3 x 2</div>
                                <div className="clip-border m-1">3 x 2</div>
                                <div className="clip-border m-1">3 x 2</div>
                                <div className="clip-border m-1">3 x 2</div>
                                <div className="clip-border m-1">3 x 2</div>
                                <div className="clip-border m-1">3 x 2</div>
                                <div className="clip-border m-1">3 x 2</div>
                                <div className="clip-border m-1">3 x 2</div>
                                <div className="clip-border m-1">3 x 2</div>
                                <div className="clip-border m-1">3 x 2</div>
                                <div className="clip-border m-1">3 x 2</div>
                                <div className="clip-border m-1">3 x 2</div>
                                <div className="clip-border-bg primary-button-css m-1">Custom Size</div>
                            </div>
                            <p className="fw-bold mt-5 mb-4">Print Sides</p>
                            <div className="d-flex flex-wrap ">
                                <div className="text-center position-relative  me-2 f-size-14">
                                    <img src={Bannerside} alt="Banner" className="banner-box active" />
                                    <div className="sale-box">Best saler</div>
                                    <p>Single Sided</p>
                                    <span className="price-box active">$ 0.00</span>
                                </div>
                                <div className="text-center f-size-14">
                                    <img src={Bannerside} alt="Banner" className="banner-box" />
                                    <p>Single Sided</p>
                                    <span className="price-box">$ 0.00</span>
                                </div>
                            </div>

                            <p className="fw-bold mt-5 mb-4">Material Weight
                            </p>
                            <div className="d-flex flex-wrap ">
                                <div className="text-center position-relative  me-2 f-size-14">
                                    <img src={Bannerside} alt="Banner" className="banner-box active" />
                                    <div className="sale-box">Best saler</div>
                                    <p className="f-size-14">Single Sided</p>
                                    <span className="price-box active">$ 0.00</span>
                                </div>
                                <div className="text-center f-size-14">
                                    <img src={Bannerside} alt="Banner" className="banner-box" />
                                    <p>Single Sided</p>
                                    <span className="price-box">$ 0.00</span>
                                </div>
                            </div>
                            <p className="fw-bold mt-5 mb-4">Hanging Options</p>
                            <div>
                                <Swiper
                                    slidesPerView={5}
                                    spaceBetween={30}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    className="mySwiper p-5"
                                    breakpoints={
                                        {
                                            300: {
                                                slidesPerView: 2,
                                                spaceBetween: 30,
                                            },
                                            700: {
                                                slidesPerView: 3,
                                                spaceBetween: 30,
                                            },
                                            1200: {
                                                slidesPerView: 5,
                                                spaceBetween: 30,
                                            },
                                        }
                                    }
                                >

                                    <SwiperSlide>
                                        <div className="text-center position-relative f-size-14">
                                            <img src={Bannerside} alt="Banner" className="banner-box active" />
                                            <div className="sale-box">Best saler</div>
                                            <p>Single Sided</p>
                                            <span className="price-box active">$ 0.00</span>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="text-center f-size-14">
                                            <img src={Bannerside} alt="Banner" className="banner-box" />
                                            <p>Single Sided</p>
                                            <span className="price-box">$ 0.00</span>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="text-center f-size-14">
                                            <img src={Bannerside} alt="Banner" className="banner-box" />
                                            <p>Single Sided</p>
                                            <span className="price-box">$ 0.00</span>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="text-center f-size-14">
                                            <img src={Bannerside} alt="Banner" className="banner-box" />
                                            <p>Single Sided</p>
                                            <span className="price-box">$ 0.00</span>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="text-center f-size-14">
                                            <img src={Bannerside} alt="Banner" className="banner-box" />
                                            <p>Single Sided</p>
                                            <span className="price-box">$ 0.00</span>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="text-center f-size-14">
                                            <img src={Bannerside} alt="Banner" className="banner-box" />
                                            <p>Single Sided</p>
                                            <span className="price-box">$ 0.00</span>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="text-center f-size-14">
                                            <img src={Bannerside} alt="Banner" className="banner-box" />
                                            <p>Single Sided</p>
                                            <span className="price-box">$ 0.00</span>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="text-center f-size-14">
                                            <img src={Bannerside} alt="Banner" className="banner-box" />
                                            <p>Single Sided</p>
                                            <span className="price-box">$ 0.00</span>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <p className="fw-bold mt-5 mb-4">Lamination
                            </p>
                            <div className="d-flex flex-wrap ">
                                <div className="text-center position-relative  me-2 f-size-14">
                                    <img src={Bannerside} alt="Banner" className="banner-box active" />
                                    <div className="sale-box">Best saler</div>
                                    <p>Single Sided</p>
                                    <span className="price-box active">$ 0.00</span>
                                </div>
                                <div className="text-center f-size-14">
                                    <img src={Bannerside} alt="Banner" className="banner-box" />
                                    <p>Single Sided</p>
                                    <span className="price-box">$ 0.00</span>
                                </div>
                            </div>
                            <p className="fw-bold mt-5 mb-4">Wind Flaps
                            </p>
                            <div className="d-flex flex-wrap ">
                                <div className="text-center position-relative f-size-14 me-2">
                                    <img src={Bannerside} alt="Banner" className="banner-box active" />
                                    <div className="sale-box">Best saler</div>
                                    <p>Single Sided</p>
                                    <span className="price-box active">$ 0.00</span>
                                </div>
                                <div className="text-center f-size-14">
                                    <img src={Bannerside} alt="Banner" className="banner-box" />
                                    <p>Single Sided</p>
                                    <span className="price-box">$ 0.00</span>
                                </div>
                            </div>
                            <p className="fw-bold mt-5 mb-4">Pantone + Color Bridge Coated (Optional)
                            </p>
                            <Form.Control
                                type="text"
                            />
                            <p className="fw-bold mt-5 mb-4">Pantone + Color Bridge Coated (Optional)
                            </p>
                            <Form.Control
                                as="textarea" rows={3}
                            />

                            <div className="d-flex align-items-center justify-content-between flex-wrap border p-3 my-3 bg-white position-sticky bottom-0" style={{ zIndex: 12000 }}>
                                <div className="d-flex align-items-center flex-wrap f-size-14">
                                    <p className="m-0 me-4">$ 6.99</p>
                                    <div className="me-4">
                                        <p className="text-decoration-line-through m-0">$ 9.79</p>
                                        <span class="badge bg-success">40 % off</span>
                                    </div>
                                    <div class="quantity">
                                        <button class="minus" aria-label="Decrease">&minus;</button>
                                        <input type="number" class="input-box-1" value="1" min="1" max="10" />
                                        <button class="plus" aria-label="Increase">+</button>
                                    </div>
                                </div>
                                <button className="btn primary-button-css mt-2 mt-sm-0">Select Design Method</button>

                            </div>


                        </div>
                        <div className="px-2 px-sm-5">
                            <Nav variant="tabs" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link href="/home">Description</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">Reviews</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">FAQs</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <div style={{ background: '#fafafa' }}>
                                <div className=" mt-4 right">
                                    <img src="https://cdn.bannerbuzz.com/media/wysiwyg/new-description/custom-vinyl-banner.png" width='520px' className="float-start mw-100" alt="" />
                                    <h2>Buy Premium Custom Vinyl Banners to Maximize Your Brand Visibility</h2>
                                    <p>From grand openings to store sales, you can advertise your cause with our versatile vinyl banners. We offer a huge inventory of pre-designed <strong>custom vinyl banners</strong> to suit your advertising needs. You can get the most out of these banners through custom sizing and personalizing. Get creative and create a persistent impression on your potential customers now.</p>
                                    <p>Our business banners can last for a long time as they are made of sturdy material. They are durable enough to withstand outdoor elements over a period. We make them with high-quality PVC flex. Their graphic weight is 13 Oz and becomes 16 Oz after upgrading to a UV-resistant print.</p>
                                    <p>We offer our vinyl banners and signs in pre-defined sizes and custom sizes to choose from. Depending on your requirement, you can select your ideal banner in fixed sizes available on the website or get it customized in custom sizes. The banners will highlight your product even from a distance due to its clear and vibrant printing.</p>
                                    <p>You can create your own personalized vinyl banners with our easy-to-use online design tool, upload an image or hire a professional designer at an additional fee. Our vinyl banner printing techniques include eco solvent printing and UV printing. We print your custom designs in full color, 720 DPI using eco solvent printing technology to ensure impactful visibility. You can then choose between printing your custom design on one or two sides.</p>
                                    <p>We use UV printing at 600 DPI for double sided printing. If you choose double-sided printing, the custom graphics on either side can be identical or different. Our vinyl display also comes with finishing options, lamination, hanging options, wind flaps and many more accessories. You can get completely unique promotional banners to suit your needs.</p>
                                    <p>Backed by multiple hanging options and accessories, installing vinyl banners is a breeze. From ultra-strong adhesive tabs to pole pockets and metal grommets, we provide different hanging options to choose from. To further facilitate installation, you can get buy accessory kit including zip ties, bungees, nylon ropes, skyhooks, banner clips, pole brackets and more.</p>
                                    <p>It is recommended to laminate the banners to increase their longevity. The laminated tough topcoat offers maximum protection against harsh weather, provide additional abrasion resistance. Moreover, it protects the banners from wet and humid conditions an increase the durability up to 2 years without impairing the substrate's flexibility. The banners stay durable both indoors and outdoors generating wider brand awareness and exposure.</p>
                                    <p>Get your custom vinyl banners finished with wind flaps if you live in windy regions. The wind flaps are nothing but half cut circles on the banner that allow the wind to pass through them without damaging it.</p>
                                    <p>Maintaining these custom vinyl banners is easy and simple. You can simply clean them using a soft, damp cloth without a cleaning solution. So, shop these personalized custom vinyl banners printed using premium vinyl printing now and boost your sales. Now order the banners from BannerBuzz and get doorstep delivery. Place bulk order and enjoy huge discounts.</p>
                                </div>
                                <div className="fancyCheck mb-4"><strong>Product Specification</strong>
                                    <ul>
                                        <li>Material: High Quality PVC Flex</li>
                                        <li>Graphic Weight :13 Oz and 16 Oz after upgrade</li>
                                        <li>Graphic Weight:13 Oz (For two sided)</li>
                                        <li>Graphic front/back color: Front- white, Back- gray (For single sided)</li>
                                        <li>Printing: Full Color, 720DPI, Eco Solvent Printing</li>
                                        <li>Printing: Full Color, 600DPI, UV Printing (For two sided)</li>
                                        <li>Graphic Size Variance Up to 5 ft : +/- 0.5 inch</li>
                                        <li>Graphic Size Variance &gt; 5 ft : +/- 1 Inch</li>
                                        <li>Graphic Care Instructions: To clean a vinyl banner, gently wipe it down with a soft, damp cloth with no cleaning solution.</li>
                                        <li>Usage: Can be used indoor and outdoor</li>
                                        <li>For banner size having width and height more than 10ft, the banner will be made by joining two layers (11 Oz) back-to-back - Applicable for two sided banners only</li>
                                    </ul>
                                </div>


                            </div>

                            <div className="my-5">
                                <h2>Printing Options</h2>
                                <div className="col-12 d-flex flex-wrap mt-5">
                                    <div className="col-12 col-lg-6 flex-wrap flex-sm-nowrap d-flex my-3">
                                        <img src="https://cdn.bannerbuzz.com/media/wysiwyg/new-description/single-sided-banner.jpg" width='160px' className="rounded me-4" height='160px' />
                                        <div>
                                            <h4>Single Sided Printing</h4>
                                            <p>The standard single-sided printing option prints on one side, with white on the front and gray on the back.</p>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6 flex-wrap flex-sm-nowrap d-flex my-3">
                                        <img src="https://cdn.bannerbuzz.com/media/wysiwyg/new-description/single-sided-banner.jpg" width='160px' className="rounded me-4" height='160px' />
                                        <div>
                                            <h4>Single Sided Printing</h4>
                                            <p>The standard single-sided printing option prints on one side, with white on the front and gray on the back.</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6 flex-wrap flex-sm-nowrap d-flex my-3">
                                        <img src="https://cdn.bannerbuzz.com/media/wysiwyg/new-description/single-sided-banner.jpg" width='160px' className="rounded me-4" height='160px' />
                                        <div>
                                            <h4>Single Sided Printing</h4>
                                            <p>The standard single-sided printing option prints on one side, with white on the front and gray on the back.</p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="my-5">
                                <h2>Customer Reviews</h2>
                                <div className="d-flex justify-content-between flex-wrap">
                                    <div className="col-md-5 col-12">
                                        <div class="inner">
                                            <div class="rating">
                                                <span class="rating-num">4.0</span>
                                                <div class="rating-stars">
                                                    <span><i class="active icon-star"></i></span>
                                                    <span><i class="active icon-star"></i></span>
                                                    <span><i class="active icon-star"></i></span>
                                                    <span><i class="active icon-star"></i></span>
                                                    <span><i class="icon-star"></i></span>
                                                </div>
                                                <div class="rating-users">
                                                    <i class="icon-user"></i> 1,014,004 total
                                                </div>
                                            </div>

                                            <div class="histo">
                                                <div class="five histo-rate">
                                                    <span class="histo-star">
                                                        <i class="active icon-star"></i> 5           </span>
                                                    <span class="bar-block">
                                                        <span id="bar-five" class="bar">
                                                            <span>566,784</span>&nbsp;
                                                        </span>
                                                    </span>
                                                </div>

                                                <div class="four histo-rate">
                                                    <span class="histo-star">
                                                        <i class="active icon-star"></i> 4           </span>
                                                    <span class="bar-block">
                                                        <span id="bar-four" class="bar">
                                                            <span>171,298</span>&nbsp;
                                                        </span>
                                                    </span>
                                                </div>

                                                <div class="three histo-rate">
                                                    <span class="histo-star">
                                                        <i class="active icon-star"></i> 3           </span>
                                                    <span class="bar-block">
                                                        <span id="bar-three" class="bar">
                                                            <span>94,940</span>&nbsp;
                                                        </span>
                                                    </span>
                                                </div>

                                                <div class="two histo-rate">
                                                    <span class="histo-star">
                                                        <i class="active icon-star"></i> 2           </span>
                                                    <span class="bar-block">
                                                        <span id="bar-two" class="bar">
                                                            <span>44,525</span>&nbsp;
                                                        </span>
                                                    </span>
                                                </div>

                                                <div class="one histo-rate">
                                                    <span class="histo-star">
                                                        <i class="active icon-star"></i> 1           </span>
                                                    <span class="bar-block">
                                                        <span id="bar-one" class="bar">
                                                            <span>136,457</span>&nbsp;
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-7 d-flex flex-column align-items-end">
                                        <button className="btn btn-light my-2"><img src={CreateChatIcon} /> Write a Review</button>
                                        <button className="btn btn-light"><img src={ChatIcon} /> ask a Question</button>
                                    </div>
                                </div>
                                <div class="review-list">
                                    <ul>
                                        <li>
                                            <div class="d-flex">
                                                <div class="left">
                                                    <span>
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="profile-pict-img img-fluid" alt="" />
                                                    </span>
                                                </div>
                                                <div class="right">
                                                    <h4>
                                                        Askbootstrap
                                                        <span class="gig-rating text-body-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                                                                ></path>
                                                            </svg>
                                                            5.0
                                                        </span>
                                                    </h4>
                                                    <div class="country d-flex align-items-center">
                                                        <span>
                                                            <img class="country-flag img-fluid" src="https://bootdey.com/img/Content/avatar/avatar6.png" />
                                                        </span>
                                                        <div class="country-name font-accent">India</div>
                                                    </div>
                                                    <div class="review-description">
                                                        <p>
                                                            The process was smooth, after providing the required info, Pragyesh sent me an outstanding packet of wireframes. Thank you a lot!
                                                        </p>
                                                    </div>
                                                    <span class="publish py-3 d-inline-block w-100">Published 4 weeks ago</span>
                                                    <div class="helpful-thumbs">
                                                        <div class="helpful-thumb text-body-2">
                                                            <span class="fit-icon thumbs-icon">
                                                                <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M13.5804 7.81165C13.8519 7.45962 14 7 14 6.43858C14 5.40843 13.123 4.45422 12.0114 4.45422H10.0932C10.3316 3.97931 10.6591 3.39024 10.6591 2.54516C10.6591 0.948063 10.022 0 8.39207 0C7.57189 0 7.26753 1.03682 7.11159 1.83827C7.01843 2.31708 6.93041 2.76938 6.65973 3.04005C6.01524 3.68457 5.03125 5.25 4.44013 5.56787C4.38028 5.59308 4.3038 5.61293 4.22051 5.62866C4.06265 5.39995 3.79889 5.25 3.5 5.25H0.875C0.391754 5.25 0 5.64175 0 6.125V13.125C0 13.6082 0.391754 14 0.875 14H3.5C3.98325 14 4.375 13.6082 4.375 13.125V12.886C5.26354 12.886 7.12816 14.0002 9.22728 13.9996C9.37781 13.9997 10.2568 14.0004 10.3487 13.9996C11.9697 14 12.8713 13.0183 12.8188 11.5443C13.2325 11.0596 13.4351 10.3593 13.3172 9.70944C13.6578 9.17552 13.7308 8.42237 13.5804 7.81165ZM0.875 13.125V6.125H3.5V13.125H0.875ZM12.4692 7.5565C12.9062 7.875 12.9062 9.1875 12.3159 9.48875C12.6856 10.1111 12.3529 10.9439 11.9053 11.1839C12.1321 12.6206 11.3869 13.1146 10.3409 13.1246C10.2504 13.1255 9.32247 13.1246 9.22731 13.1246C7.23316 13.1246 5.54296 12.011 4.37503 12.011V6.44287C5.40611 6.44287 6.35212 4.58516 7.27847 3.65879C8.11368 2.82357 7.83527 1.43153 8.3921 0.874727C9.78414 0.874727 9.78414 1.84589 9.78414 2.54518C9.78414 3.69879 8.94893 4.21561 8.94893 5.32924H12.0114C12.6329 5.32924 13.1223 5.88607 13.125 6.44287C13.1277 6.99967 12.9062 7.4375 12.4692 7.5565ZM2.84375 11.8125C2.84375 12.1749 2.54994 12.4688 2.1875 12.4688C1.82506 12.4688 1.53125 12.1749 1.53125 11.8125C1.53125 11.4501 1.82506 11.1562 2.1875 11.1562C2.54994 11.1562 2.84375 11.4501 2.84375 11.8125Z"
                                                                    ></path>
                                                                </svg>
                                                            </span>
                                                            <span class="thumb-title ms-2">Helpful</span>
                                                        </div>
                                                        <div class="helpful-thumb text-body-2 ml-3">
                                                            <span class="fit-icon thumbs-icon">
                                                                <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M0.419563 6.18835C0.148122 6.54038 6.11959e-07 7 5.62878e-07 7.56142C2.81294e-05 8.59157 0.876996 9.54578 1.98863 9.54578L3.90679 9.54578C3.66836 10.0207 3.34091 10.6098 3.34091 11.4548C3.34089 13.0519 3.97802 14 5.60793 14C6.42811 14 6.73247 12.9632 6.88841 12.1617C6.98157 11.6829 7.06959 11.2306 7.34027 10.9599C7.98476 10.3154 8.96875 8.75 9.55987 8.43213C9.61972 8.40692 9.6962 8.38707 9.77949 8.37134C9.93735 8.60005 10.2011 8.75 10.5 8.75L13.125 8.75C13.6082 8.75 14 8.35825 14 7.875L14 0.875C14 0.391754 13.6082 -3.42482e-08 13.125 -7.64949e-08L10.5 -3.0598e-07C10.0168 -3.48226e-07 9.625 0.391754 9.625 0.875L9.625 1.11398C8.73647 1.11398 6.87184 -0.000191358 4.77272 0.00038257C4.62219 0.000300541 3.74322 -0.000438633 3.65127 0.000382472C2.03027 -1.04643e-06 1.12867 0.981667 1.18117 2.45566C0.76754 2.94038 0.564868 3.64065 0.682829 4.29056C0.342234 4.82448 0.269227 5.57763 0.419563 6.18835ZM13.125 0.875L13.125 7.875L10.5 7.875L10.5 0.875L13.125 0.875ZM1.53079 6.4435C1.09375 6.125 1.09375 4.8125 1.6841 4.51125C1.31436 3.88891 1.64713 3.05613 2.09467 2.81605C1.86791 1.37941 2.61313 0.885417 3.65906 0.875355C3.74962 0.874535 4.67753 0.875355 4.77269 0.875355C6.76684 0.875355 8.45704 1.98898 9.62497 1.98898L9.62497 7.55713C8.5939 7.55713 7.64788 9.41484 6.72153 10.3412C5.88632 11.1764 6.16473 12.5685 5.6079 13.1253C4.21586 13.1253 4.21586 12.1541 4.21586 11.4548C4.21586 10.3012 5.05107 9.78439 5.05107 8.67076L1.9886 8.67076C1.36708 8.67076 0.877707 8.11393 0.874973 7.55713C0.872266 7.00033 1.09375 6.5625 1.53079 6.4435ZM11.1563 2.1875C11.1563 1.82506 11.4501 1.53125 11.8125 1.53125C12.1749 1.53125 12.4688 1.82506 12.4688 2.1875C12.4688 2.54994 12.1749 2.84375 11.8125 2.84375C11.4501 2.84375 11.1563 2.54994 11.1563 2.1875Z"
                                                                    ></path>
                                                                </svg>
                                                            </span>
                                                            <span class="thumb-title ms-2">Not Helpful</span>
                                                        </div>
                                                    </div>
                                                    <div class="response-item mt-4 d-flex">
                                                        <div class="left">
                                                            <span>
                                                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="profile-pict-img img-fluid" alt="" />
                                                            </span>
                                                        </div>
                                                        <div class="right">
                                                            <h4>
                                                                Gurdeep Osahan
                                                                <span class="gig-rating text-body-2">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                                        <path
                                                                            fill="currentColor"
                                                                            d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                                                                        ></path>
                                                                    </svg>
                                                                    5.0
                                                                </span>
                                                            </h4>
                                                            <div class="country d-flex align-items-center">
                                                                <span>
                                                                    <img class="country-flag img-fluid" src="https://bootdey.com/img/Content/avatar/avatar3.png" />
                                                                </span>
                                                                <div class="country-name font-accent">India</div>
                                                            </div>
                                                            <div class="review-description">
                                                                <p>
                                                                    The process was smooth, after providing the required info, Pragyesh sent me an outstanding packet of wireframes. Thank you a lot!
                                                                </p>
                                                            </div>
                                                            <span class="publish py-3 d-inline-block w-100">Published 4 weeks ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="review-list">
                                    <ul>
                                        <li>
                                            <div class="d-flex">
                                                <div class="left">
                                                    <span>
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="profile-pict-img img-fluid" alt="" />
                                                    </span>
                                                </div>
                                                <div class="right">
                                                    <h4>
                                                        Askbootstrap
                                                        <span class="gig-rating text-body-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                                                                ></path>
                                                            </svg>
                                                            5.0
                                                        </span>
                                                    </h4>
                                                    <div class="country d-flex align-items-center">
                                                        <span>
                                                            <img class="country-flag img-fluid" src="https://bootdey.com/img/Content/avatar/avatar6.png" />
                                                        </span>
                                                        <div class="country-name font-accent">India</div>
                                                    </div>
                                                    <div class="review-description">
                                                        <p>
                                                            The process was smooth, after providing the required info, Pragyesh sent me an outstanding packet of wireframes. Thank you a lot!
                                                        </p>
                                                    </div>
                                                    <span class="publish py-3 d-inline-block w-100">Published 4 weeks ago</span>
                                                    <div class="helpful-thumbs">
                                                        <div class="helpful-thumb text-body-2">
                                                            <span class="fit-icon thumbs-icon">
                                                                <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M13.5804 7.81165C13.8519 7.45962 14 7 14 6.43858C14 5.40843 13.123 4.45422 12.0114 4.45422H10.0932C10.3316 3.97931 10.6591 3.39024 10.6591 2.54516C10.6591 0.948063 10.022 0 8.39207 0C7.57189 0 7.26753 1.03682 7.11159 1.83827C7.01843 2.31708 6.93041 2.76938 6.65973 3.04005C6.01524 3.68457 5.03125 5.25 4.44013 5.56787C4.38028 5.59308 4.3038 5.61293 4.22051 5.62866C4.06265 5.39995 3.79889 5.25 3.5 5.25H0.875C0.391754 5.25 0 5.64175 0 6.125V13.125C0 13.6082 0.391754 14 0.875 14H3.5C3.98325 14 4.375 13.6082 4.375 13.125V12.886C5.26354 12.886 7.12816 14.0002 9.22728 13.9996C9.37781 13.9997 10.2568 14.0004 10.3487 13.9996C11.9697 14 12.8713 13.0183 12.8188 11.5443C13.2325 11.0596 13.4351 10.3593 13.3172 9.70944C13.6578 9.17552 13.7308 8.42237 13.5804 7.81165ZM0.875 13.125V6.125H3.5V13.125H0.875ZM12.4692 7.5565C12.9062 7.875 12.9062 9.1875 12.3159 9.48875C12.6856 10.1111 12.3529 10.9439 11.9053 11.1839C12.1321 12.6206 11.3869 13.1146 10.3409 13.1246C10.2504 13.1255 9.32247 13.1246 9.22731 13.1246C7.23316 13.1246 5.54296 12.011 4.37503 12.011V6.44287C5.40611 6.44287 6.35212 4.58516 7.27847 3.65879C8.11368 2.82357 7.83527 1.43153 8.3921 0.874727C9.78414 0.874727 9.78414 1.84589 9.78414 2.54518C9.78414 3.69879 8.94893 4.21561 8.94893 5.32924H12.0114C12.6329 5.32924 13.1223 5.88607 13.125 6.44287C13.1277 6.99967 12.9062 7.4375 12.4692 7.5565ZM2.84375 11.8125C2.84375 12.1749 2.54994 12.4688 2.1875 12.4688C1.82506 12.4688 1.53125 12.1749 1.53125 11.8125C1.53125 11.4501 1.82506 11.1562 2.1875 11.1562C2.54994 11.1562 2.84375 11.4501 2.84375 11.8125Z"
                                                                    ></path>
                                                                </svg>
                                                            </span>
                                                            <span class="thumb-title ms-2">Helpful</span>
                                                        </div>
                                                        <div class="helpful-thumb text-body-2 ml-3">
                                                            <span class="fit-icon thumbs-icon">
                                                                <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M0.419563 6.18835C0.148122 6.54038 6.11959e-07 7 5.62878e-07 7.56142C2.81294e-05 8.59157 0.876996 9.54578 1.98863 9.54578L3.90679 9.54578C3.66836 10.0207 3.34091 10.6098 3.34091 11.4548C3.34089 13.0519 3.97802 14 5.60793 14C6.42811 14 6.73247 12.9632 6.88841 12.1617C6.98157 11.6829 7.06959 11.2306 7.34027 10.9599C7.98476 10.3154 8.96875 8.75 9.55987 8.43213C9.61972 8.40692 9.6962 8.38707 9.77949 8.37134C9.93735 8.60005 10.2011 8.75 10.5 8.75L13.125 8.75C13.6082 8.75 14 8.35825 14 7.875L14 0.875C14 0.391754 13.6082 -3.42482e-08 13.125 -7.64949e-08L10.5 -3.0598e-07C10.0168 -3.48226e-07 9.625 0.391754 9.625 0.875L9.625 1.11398C8.73647 1.11398 6.87184 -0.000191358 4.77272 0.00038257C4.62219 0.000300541 3.74322 -0.000438633 3.65127 0.000382472C2.03027 -1.04643e-06 1.12867 0.981667 1.18117 2.45566C0.76754 2.94038 0.564868 3.64065 0.682829 4.29056C0.342234 4.82448 0.269227 5.57763 0.419563 6.18835ZM13.125 0.875L13.125 7.875L10.5 7.875L10.5 0.875L13.125 0.875ZM1.53079 6.4435C1.09375 6.125 1.09375 4.8125 1.6841 4.51125C1.31436 3.88891 1.64713 3.05613 2.09467 2.81605C1.86791 1.37941 2.61313 0.885417 3.65906 0.875355C3.74962 0.874535 4.67753 0.875355 4.77269 0.875355C6.76684 0.875355 8.45704 1.98898 9.62497 1.98898L9.62497 7.55713C8.5939 7.55713 7.64788 9.41484 6.72153 10.3412C5.88632 11.1764 6.16473 12.5685 5.6079 13.1253C4.21586 13.1253 4.21586 12.1541 4.21586 11.4548C4.21586 10.3012 5.05107 9.78439 5.05107 8.67076L1.9886 8.67076C1.36708 8.67076 0.877707 8.11393 0.874973 7.55713C0.872266 7.00033 1.09375 6.5625 1.53079 6.4435ZM11.1563 2.1875C11.1563 1.82506 11.4501 1.53125 11.8125 1.53125C12.1749 1.53125 12.4688 1.82506 12.4688 2.1875C12.4688 2.54994 12.1749 2.84375 11.8125 2.84375C11.4501 2.84375 11.1563 2.54994 11.1563 2.1875Z"
                                                                    ></path>
                                                                </svg>
                                                            </span>
                                                            <span class="thumb-title ms-2">Not Helpful</span>
                                                        </div>
                                                    </div>
                                                    <div class="response-item mt-4 d-flex">
                                                        <div class="left">
                                                            <span>
                                                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="profile-pict-img img-fluid" alt="" />
                                                            </span>
                                                        </div>
                                                        <div class="right">
                                                            <h4>
                                                                Gurdeep Osahan
                                                                <span class="gig-rating text-body-2">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                                        <path
                                                                            fill="currentColor"
                                                                            d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                                                                        ></path>
                                                                    </svg>
                                                                    5.0
                                                                </span>
                                                            </h4>
                                                            <div class="country d-flex align-items-center">
                                                                <span>
                                                                    <img class="country-flag img-fluid" src="https://bootdey.com/img/Content/avatar/avatar3.png" />
                                                                </span>
                                                                <div class="country-name font-accent">India</div>
                                                            </div>
                                                            <div class="review-description">
                                                                <p>
                                                                    The process was smooth, after providing the required info, Pragyesh sent me an outstanding packet of wireframes. Thank you a lot!
                                                                </p>
                                                            </div>
                                                            <span class="publish py-3 d-inline-block w-100">Published 4 weeks ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="py-5">
                                <h2>Frequently Asked Questions</h2>

                                <div className="mt-4">
                                    <p className="mb-1">Q: What type of vinyl is used for banners?</p>
                                    <p className="mb-1">A: The most commonly used material is a heavy weight vinyl technically known as PVC.</p>
                                    <div class="helpful-thumbs float-end">
                                        <div class="helpful-thumb text-body-2">
                                            <span class="fit-icon thumbs-icon">
                                                <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M13.5804 7.81165C13.8519 7.45962 14 7 14 6.43858C14 5.40843 13.123 4.45422 12.0114 4.45422H10.0932C10.3316 3.97931 10.6591 3.39024 10.6591 2.54516C10.6591 0.948063 10.022 0 8.39207 0C7.57189 0 7.26753 1.03682 7.11159 1.83827C7.01843 2.31708 6.93041 2.76938 6.65973 3.04005C6.01524 3.68457 5.03125 5.25 4.44013 5.56787C4.38028 5.59308 4.3038 5.61293 4.22051 5.62866C4.06265 5.39995 3.79889 5.25 3.5 5.25H0.875C0.391754 5.25 0 5.64175 0 6.125V13.125C0 13.6082 0.391754 14 0.875 14H3.5C3.98325 14 4.375 13.6082 4.375 13.125V12.886C5.26354 12.886 7.12816 14.0002 9.22728 13.9996C9.37781 13.9997 10.2568 14.0004 10.3487 13.9996C11.9697 14 12.8713 13.0183 12.8188 11.5443C13.2325 11.0596 13.4351 10.3593 13.3172 9.70944C13.6578 9.17552 13.7308 8.42237 13.5804 7.81165ZM0.875 13.125V6.125H3.5V13.125H0.875ZM12.4692 7.5565C12.9062 7.875 12.9062 9.1875 12.3159 9.48875C12.6856 10.1111 12.3529 10.9439 11.9053 11.1839C12.1321 12.6206 11.3869 13.1146 10.3409 13.1246C10.2504 13.1255 9.32247 13.1246 9.22731 13.1246C7.23316 13.1246 5.54296 12.011 4.37503 12.011V6.44287C5.40611 6.44287 6.35212 4.58516 7.27847 3.65879C8.11368 2.82357 7.83527 1.43153 8.3921 0.874727C9.78414 0.874727 9.78414 1.84589 9.78414 2.54518C9.78414 3.69879 8.94893 4.21561 8.94893 5.32924H12.0114C12.6329 5.32924 13.1223 5.88607 13.125 6.44287C13.1277 6.99967 12.9062 7.4375 12.4692 7.5565ZM2.84375 11.8125C2.84375 12.1749 2.54994 12.4688 2.1875 12.4688C1.82506 12.4688 1.53125 12.1749 1.53125 11.8125C1.53125 11.4501 1.82506 11.1562 2.1875 11.1562C2.54994 11.1562 2.84375 11.4501 2.84375 11.8125Z"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <span class="thumb-title ms-2">Helpful</span>
                                        </div>
                                        <div class="helpful-thumb text-body-2 ml-3">
                                            <span class="fit-icon thumbs-icon">
                                                <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M0.419563 6.18835C0.148122 6.54038 6.11959e-07 7 5.62878e-07 7.56142C2.81294e-05 8.59157 0.876996 9.54578 1.98863 9.54578L3.90679 9.54578C3.66836 10.0207 3.34091 10.6098 3.34091 11.4548C3.34089 13.0519 3.97802 14 5.60793 14C6.42811 14 6.73247 12.9632 6.88841 12.1617C6.98157 11.6829 7.06959 11.2306 7.34027 10.9599C7.98476 10.3154 8.96875 8.75 9.55987 8.43213C9.61972 8.40692 9.6962 8.38707 9.77949 8.37134C9.93735 8.60005 10.2011 8.75 10.5 8.75L13.125 8.75C13.6082 8.75 14 8.35825 14 7.875L14 0.875C14 0.391754 13.6082 -3.42482e-08 13.125 -7.64949e-08L10.5 -3.0598e-07C10.0168 -3.48226e-07 9.625 0.391754 9.625 0.875L9.625 1.11398C8.73647 1.11398 6.87184 -0.000191358 4.77272 0.00038257C4.62219 0.000300541 3.74322 -0.000438633 3.65127 0.000382472C2.03027 -1.04643e-06 1.12867 0.981667 1.18117 2.45566C0.76754 2.94038 0.564868 3.64065 0.682829 4.29056C0.342234 4.82448 0.269227 5.57763 0.419563 6.18835ZM13.125 0.875L13.125 7.875L10.5 7.875L10.5 0.875L13.125 0.875ZM1.53079 6.4435C1.09375 6.125 1.09375 4.8125 1.6841 4.51125C1.31436 3.88891 1.64713 3.05613 2.09467 2.81605C1.86791 1.37941 2.61313 0.885417 3.65906 0.875355C3.74962 0.874535 4.67753 0.875355 4.77269 0.875355C6.76684 0.875355 8.45704 1.98898 9.62497 1.98898L9.62497 7.55713C8.5939 7.55713 7.64788 9.41484 6.72153 10.3412C5.88632 11.1764 6.16473 12.5685 5.6079 13.1253C4.21586 13.1253 4.21586 12.1541 4.21586 11.4548C4.21586 10.3012 5.05107 9.78439 5.05107 8.67076L1.9886 8.67076C1.36708 8.67076 0.877707 8.11393 0.874973 7.55713C0.872266 7.00033 1.09375 6.5625 1.53079 6.4435ZM11.1563 2.1875C11.1563 1.82506 11.4501 1.53125 11.8125 1.53125C12.1749 1.53125 12.4688 1.82506 12.4688 2.1875C12.4688 2.54994 12.1749 2.84375 11.8125 2.84375C11.4501 2.84375 11.1563 2.54994 11.1563 2.1875Z"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <span class="thumb-title ms-2">Not Helpful</span>
                                        </div>
                                    </div>
                                    <hr style={{ clear: 'right' }} />
                                </div>
                                <div className="mt-4">
                                    <p className="mb-1">Q: What type of vinyl is used for banners?</p>
                                    <p className="mb-1">A: The most commonly used material is a heavy weight vinyl technically known as PVC.</p>
                                    <div class="helpful-thumbs float-end">
                                        <div class="helpful-thumb text-body-2">
                                            <span class="fit-icon thumbs-icon">
                                                <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M13.5804 7.81165C13.8519 7.45962 14 7 14 6.43858C14 5.40843 13.123 4.45422 12.0114 4.45422H10.0932C10.3316 3.97931 10.6591 3.39024 10.6591 2.54516C10.6591 0.948063 10.022 0 8.39207 0C7.57189 0 7.26753 1.03682 7.11159 1.83827C7.01843 2.31708 6.93041 2.76938 6.65973 3.04005C6.01524 3.68457 5.03125 5.25 4.44013 5.56787C4.38028 5.59308 4.3038 5.61293 4.22051 5.62866C4.06265 5.39995 3.79889 5.25 3.5 5.25H0.875C0.391754 5.25 0 5.64175 0 6.125V13.125C0 13.6082 0.391754 14 0.875 14H3.5C3.98325 14 4.375 13.6082 4.375 13.125V12.886C5.26354 12.886 7.12816 14.0002 9.22728 13.9996C9.37781 13.9997 10.2568 14.0004 10.3487 13.9996C11.9697 14 12.8713 13.0183 12.8188 11.5443C13.2325 11.0596 13.4351 10.3593 13.3172 9.70944C13.6578 9.17552 13.7308 8.42237 13.5804 7.81165ZM0.875 13.125V6.125H3.5V13.125H0.875ZM12.4692 7.5565C12.9062 7.875 12.9062 9.1875 12.3159 9.48875C12.6856 10.1111 12.3529 10.9439 11.9053 11.1839C12.1321 12.6206 11.3869 13.1146 10.3409 13.1246C10.2504 13.1255 9.32247 13.1246 9.22731 13.1246C7.23316 13.1246 5.54296 12.011 4.37503 12.011V6.44287C5.40611 6.44287 6.35212 4.58516 7.27847 3.65879C8.11368 2.82357 7.83527 1.43153 8.3921 0.874727C9.78414 0.874727 9.78414 1.84589 9.78414 2.54518C9.78414 3.69879 8.94893 4.21561 8.94893 5.32924H12.0114C12.6329 5.32924 13.1223 5.88607 13.125 6.44287C13.1277 6.99967 12.9062 7.4375 12.4692 7.5565ZM2.84375 11.8125C2.84375 12.1749 2.54994 12.4688 2.1875 12.4688C1.82506 12.4688 1.53125 12.1749 1.53125 11.8125C1.53125 11.4501 1.82506 11.1562 2.1875 11.1562C2.54994 11.1562 2.84375 11.4501 2.84375 11.8125Z"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <span class="thumb-title ms-2">Helpful</span>
                                        </div>
                                        <div class="helpful-thumb text-body-2 ml-3">
                                            <span class="fit-icon thumbs-icon">
                                                <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M0.419563 6.18835C0.148122 6.54038 6.11959e-07 7 5.62878e-07 7.56142C2.81294e-05 8.59157 0.876996 9.54578 1.98863 9.54578L3.90679 9.54578C3.66836 10.0207 3.34091 10.6098 3.34091 11.4548C3.34089 13.0519 3.97802 14 5.60793 14C6.42811 14 6.73247 12.9632 6.88841 12.1617C6.98157 11.6829 7.06959 11.2306 7.34027 10.9599C7.98476 10.3154 8.96875 8.75 9.55987 8.43213C9.61972 8.40692 9.6962 8.38707 9.77949 8.37134C9.93735 8.60005 10.2011 8.75 10.5 8.75L13.125 8.75C13.6082 8.75 14 8.35825 14 7.875L14 0.875C14 0.391754 13.6082 -3.42482e-08 13.125 -7.64949e-08L10.5 -3.0598e-07C10.0168 -3.48226e-07 9.625 0.391754 9.625 0.875L9.625 1.11398C8.73647 1.11398 6.87184 -0.000191358 4.77272 0.00038257C4.62219 0.000300541 3.74322 -0.000438633 3.65127 0.000382472C2.03027 -1.04643e-06 1.12867 0.981667 1.18117 2.45566C0.76754 2.94038 0.564868 3.64065 0.682829 4.29056C0.342234 4.82448 0.269227 5.57763 0.419563 6.18835ZM13.125 0.875L13.125 7.875L10.5 7.875L10.5 0.875L13.125 0.875ZM1.53079 6.4435C1.09375 6.125 1.09375 4.8125 1.6841 4.51125C1.31436 3.88891 1.64713 3.05613 2.09467 2.81605C1.86791 1.37941 2.61313 0.885417 3.65906 0.875355C3.74962 0.874535 4.67753 0.875355 4.77269 0.875355C6.76684 0.875355 8.45704 1.98898 9.62497 1.98898L9.62497 7.55713C8.5939 7.55713 7.64788 9.41484 6.72153 10.3412C5.88632 11.1764 6.16473 12.5685 5.6079 13.1253C4.21586 13.1253 4.21586 12.1541 4.21586 11.4548C4.21586 10.3012 5.05107 9.78439 5.05107 8.67076L1.9886 8.67076C1.36708 8.67076 0.877707 8.11393 0.874973 7.55713C0.872266 7.00033 1.09375 6.5625 1.53079 6.4435ZM11.1563 2.1875C11.1563 1.82506 11.4501 1.53125 11.8125 1.53125C12.1749 1.53125 12.4688 1.82506 12.4688 2.1875C12.4688 2.54994 12.1749 2.84375 11.8125 2.84375C11.4501 2.84375 11.1563 2.54994 11.1563 2.1875Z"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <span class="thumb-title ms-2">Not Helpful</span>
                                        </div>
                                    </div>
                                    <hr style={{ clear: 'right' }} />
                                </div>
                                <div className="mt-4">
                                    <p className="mb-1">Q: What type of vinyl is used for banners?</p>
                                    <p className="mb-1">A: The most commonly used material is a heavy weight vinyl technically known as PVC.</p>
                                    <div class="helpful-thumbs float-end">
                                        <div class="helpful-thumb text-body-2">
                                            <span class="fit-icon thumbs-icon">
                                                <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M13.5804 7.81165C13.8519 7.45962 14 7 14 6.43858C14 5.40843 13.123 4.45422 12.0114 4.45422H10.0932C10.3316 3.97931 10.6591 3.39024 10.6591 2.54516C10.6591 0.948063 10.022 0 8.39207 0C7.57189 0 7.26753 1.03682 7.11159 1.83827C7.01843 2.31708 6.93041 2.76938 6.65973 3.04005C6.01524 3.68457 5.03125 5.25 4.44013 5.56787C4.38028 5.59308 4.3038 5.61293 4.22051 5.62866C4.06265 5.39995 3.79889 5.25 3.5 5.25H0.875C0.391754 5.25 0 5.64175 0 6.125V13.125C0 13.6082 0.391754 14 0.875 14H3.5C3.98325 14 4.375 13.6082 4.375 13.125V12.886C5.26354 12.886 7.12816 14.0002 9.22728 13.9996C9.37781 13.9997 10.2568 14.0004 10.3487 13.9996C11.9697 14 12.8713 13.0183 12.8188 11.5443C13.2325 11.0596 13.4351 10.3593 13.3172 9.70944C13.6578 9.17552 13.7308 8.42237 13.5804 7.81165ZM0.875 13.125V6.125H3.5V13.125H0.875ZM12.4692 7.5565C12.9062 7.875 12.9062 9.1875 12.3159 9.48875C12.6856 10.1111 12.3529 10.9439 11.9053 11.1839C12.1321 12.6206 11.3869 13.1146 10.3409 13.1246C10.2504 13.1255 9.32247 13.1246 9.22731 13.1246C7.23316 13.1246 5.54296 12.011 4.37503 12.011V6.44287C5.40611 6.44287 6.35212 4.58516 7.27847 3.65879C8.11368 2.82357 7.83527 1.43153 8.3921 0.874727C9.78414 0.874727 9.78414 1.84589 9.78414 2.54518C9.78414 3.69879 8.94893 4.21561 8.94893 5.32924H12.0114C12.6329 5.32924 13.1223 5.88607 13.125 6.44287C13.1277 6.99967 12.9062 7.4375 12.4692 7.5565ZM2.84375 11.8125C2.84375 12.1749 2.54994 12.4688 2.1875 12.4688C1.82506 12.4688 1.53125 12.1749 1.53125 11.8125C1.53125 11.4501 1.82506 11.1562 2.1875 11.1562C2.54994 11.1562 2.84375 11.4501 2.84375 11.8125Z"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <span class="thumb-title ms-2">Helpful</span>
                                        </div>
                                        <div class="helpful-thumb text-body-2 ml-3">
                                            <span class="fit-icon thumbs-icon">
                                                <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M0.419563 6.18835C0.148122 6.54038 6.11959e-07 7 5.62878e-07 7.56142C2.81294e-05 8.59157 0.876996 9.54578 1.98863 9.54578L3.90679 9.54578C3.66836 10.0207 3.34091 10.6098 3.34091 11.4548C3.34089 13.0519 3.97802 14 5.60793 14C6.42811 14 6.73247 12.9632 6.88841 12.1617C6.98157 11.6829 7.06959 11.2306 7.34027 10.9599C7.98476 10.3154 8.96875 8.75 9.55987 8.43213C9.61972 8.40692 9.6962 8.38707 9.77949 8.37134C9.93735 8.60005 10.2011 8.75 10.5 8.75L13.125 8.75C13.6082 8.75 14 8.35825 14 7.875L14 0.875C14 0.391754 13.6082 -3.42482e-08 13.125 -7.64949e-08L10.5 -3.0598e-07C10.0168 -3.48226e-07 9.625 0.391754 9.625 0.875L9.625 1.11398C8.73647 1.11398 6.87184 -0.000191358 4.77272 0.00038257C4.62219 0.000300541 3.74322 -0.000438633 3.65127 0.000382472C2.03027 -1.04643e-06 1.12867 0.981667 1.18117 2.45566C0.76754 2.94038 0.564868 3.64065 0.682829 4.29056C0.342234 4.82448 0.269227 5.57763 0.419563 6.18835ZM13.125 0.875L13.125 7.875L10.5 7.875L10.5 0.875L13.125 0.875ZM1.53079 6.4435C1.09375 6.125 1.09375 4.8125 1.6841 4.51125C1.31436 3.88891 1.64713 3.05613 2.09467 2.81605C1.86791 1.37941 2.61313 0.885417 3.65906 0.875355C3.74962 0.874535 4.67753 0.875355 4.77269 0.875355C6.76684 0.875355 8.45704 1.98898 9.62497 1.98898L9.62497 7.55713C8.5939 7.55713 7.64788 9.41484 6.72153 10.3412C5.88632 11.1764 6.16473 12.5685 5.6079 13.1253C4.21586 13.1253 4.21586 12.1541 4.21586 11.4548C4.21586 10.3012 5.05107 9.78439 5.05107 8.67076L1.9886 8.67076C1.36708 8.67076 0.877707 8.11393 0.874973 7.55713C0.872266 7.00033 1.09375 6.5625 1.53079 6.4435ZM11.1563 2.1875C11.1563 1.82506 11.4501 1.53125 11.8125 1.53125C12.1749 1.53125 12.4688 1.82506 12.4688 2.1875C12.4688 2.54994 12.1749 2.84375 11.8125 2.84375C11.4501 2.84375 11.1563 2.54994 11.1563 2.1875Z"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <span class="thumb-title ms-2">Not Helpful</span>
                                        </div>
                                    </div>
                                    <hr style={{ clear: 'right' }} />
                                </div>

                            </div>

                            <div className="p-5" style={{ background: '#f0f0f0' }}>
                                <h4>Still have questions? Drop us a line</h4>
                                <div className="d-flex align-items-center flex-wrap">
                                    <Form.Group className="mb-3 me-2" style={{ width: '250px' }} controlId="formGroupEmail">
                                        <Form.Label>Name<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" placeholder="name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3 me-2" style={{ width: '250px' }} controlId="formGroupPassword">
                                        <Form.Label>Email<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3 me-2 input-qes" controlId="formGroupEmail">
                                        <Form.Label>What do you want to know?<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" placeholder="name" />
                                    </Form.Group>
                                    <button className="btn primary-button-css mt-3">Submit</button>
                                </div>
                            </div>

                            <div className="text-center py-5">
                                <h2>Recommended Products</h2>
                                <p>We curated a few products we think might interest you based on your shopping history.
                                </p>
                                <div className="d-flex flex-wrap  justify-content-around">
                                    <Swiper
                                        slidesPerView={5}
                                        spaceBetween={30}
                                        navigation={true}
                                        modules={[Pagination, Navigation]}
                                        className="mySwiper p-5"
                                        breakpoints={
                                            {
                                                300: {
                                                    slidesPerView: 1,
                                                    spaceBetween: 30,
                                                },
                                                700: {
                                                    slidesPerView: 2,
                                                    spaceBetween: 30,
                                                },
                                                900: {
                                                    slidesPerView: 3,
                                                    spaceBetween: 30,
                                                },
                                                1200: {
                                                    slidesPerView: 5,
                                                    spaceBetween: 30,
                                                },
                                            }
                                        }
                                    >

                                        <SwiperSlide>
                                            <div className="cursor-pointer rounded border  suggest-box mx-auto" onClick={()=>navigate("/banner")}>
                                                <div className="card-body d-flex flex-wrap justify-content-center">
                                                    <div className="img-container w-100 px-5 py-3">
                                                        <img src={cardImg} alt="card-img" className="img-fluid" />
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center w-100 justify-content-center">
                                                        <h5 className="card-title text-center mb-0 p-2">
                                                            Special title treatment
                                                        </h5>
                                                        <div className="w-100 p-2">
                                                            <div className="d-flex align-items-center justify-content-center w-50 mx-auto">
                                                                <img src={star} alt="star" />
                                                                <img src={star} alt="star" />
                                                                <img src={star} alt="star" />
                                                                <img src={star} alt="star" />
                                                                <img src={halfstar} alt="star" />
                                                                <span className="ms-1 font-weight-light">3980</span>
                                                            </div>
                                                            <Card.Text className="text-center p-2">
                                                                <span className="test-dec">Starts at </span>$6.99
                                                            </Card.Text>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="cursor-pointer rounded border  suggest-box mx-auto" onClick={()=>navigate("/banner")}>
                                                <div className="card-body d-flex flex-wrap justify-content-center">
                                                    <div className="img-container w-100 px-5 py-3">
                                                        <img src={cardImg} alt="card-img" className="img-fluid" />
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center w-100 justify-content-center">
                                                        <h5 className="card-title text-center mb-0 p-2">
                                                            Special title treatment
                                                        </h5>
                                                        <div className="w-100 p-2">
                                                            <div className="d-flex align-items-center justify-content-center w-50 mx-auto">
                                                                <img src={star} alt="star" />
                                                                <img src={star} alt="star" />
                                                                <img src={star} alt="star" />
                                                                <img src={star} alt="star" />
                                                                <img src={halfstar} alt="star" />
                                                                <span className="ms-1 font-weight-light">3980</span>
                                                            </div>
                                                            <Card.Text className="text-center p-2">
                                                                <span className="test-dec">Starts at </span>$6.99
                                                            </Card.Text>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="cursor-pointer rounded border  suggest-box mx-auto" onClick={()=>navigate("/banner")}>
                                                <div className="card-body d-flex flex-wrap justify-content-center">
                                                    <div className="img-container w-100 px-5 py-3">
                                                        <img src={cardImg} alt="card-img" className="img-fluid" />
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center w-100 justify-content-center">
                                                        <h5 className="card-title text-center mb-0 p-2">
                                                            Special title treatment
                                                        </h5>
                                                        <div className="w-100 p-2">
                                                            <div className="d-flex align-items-center justify-content-center w-50 mx-auto">
                                                                <img src={star} alt="star" />
                                                                <img src={star} alt="star" />
                                                                <img src={star} alt="star" />
                                                                <img src={star} alt="star" />
                                                                <img src={halfstar} alt="star" />
                                                                <span className="ms-1 font-weight-light">3980</span>
                                                            </div>
                                                            <Card.Text className="text-center p-2">
                                                                <span className="test-dec">Starts at </span>$6.99
                                                            </Card.Text>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="cursor-pointer rounded border  suggest-box mx-auto" onClick={()=>navigate("/banner")}>
                                                <div className="card-body d-flex flex-wrap justify-content-center">
                                                    <div className="img-container w-100 px-5 py-3">
                                                        <img src={cardImg} alt="card-img" className="img-fluid" />
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center w-100 justify-content-center">
                                                        <h5 className="card-title text-center mb-0 p-2">
                                                            Special title treatment
                                                        </h5>
                                                        <div className="w-100 p-2">
                                                            <div className="d-flex align-items-center justify-content-center w-50 mx-auto">
                                                                <img src={star} alt="star" />
                                                                <img src={star} alt="star" />
                                                                <img src={star} alt="star" />
                                                                <img src={star} alt="star" />
                                                                <img src={halfstar} alt="star" />
                                                                <span className="ms-1 font-weight-light">3980</span>
                                                            </div>
                                                            <Card.Text className="text-center p-2">
                                                                <span className="test-dec">Starts at </span>$6.99
                                                            </Card.Text>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="cursor-pointer rounded border  suggest-box mx-auto" onClick={()=>navigate("/banner")}>
                                                <div className="card-body d-flex flex-wrap justify-content-center">
                                                    <div className="img-container w-100 px-5 py-3">
                                                        <img src={cardImg} alt="card-img" className="img-fluid" />
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center w-100 justify-content-center">
                                                        <h5 className="card-title text-center mb-0 p-2">
                                                            Special title treatment
                                                        </h5>
                                                        <div className="w-100 p-2">
                                                            <div className="d-flex align-items-center justify-content-center w-50 mx-auto">
                                                                <img src={star} alt="star" />
                                                                <img src={star} alt="star" />
                                                                <img src={star} alt="star" />
                                                                <img src={star} alt="star" />
                                                                <img src={halfstar} alt="star" />
                                                                <span className="ms-1 font-weight-light">3980</span>
                                                            </div>
                                                            <Card.Text className="text-center p-2">
                                                                <span className="test-dec">Starts at </span>$6.99
                                                            </Card.Text>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <SubscribeSection />
            <Footer />
        </div>
    );
};

export default Banner;
