import React from 'react'
import Header from '../components/header/Header'
import banner from '../assets/customerreviewsbanner.jpg'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const Coupons = () => {

    return (
        <div>
            <Header />
            <img src={banner} alt='banner' width='100%' />
            <div className='container'>
                <div className='row text-center my-5'>
                    <h2>Double Your Savings With Our Monthly Deals & Coupons</h2>
                    <p>I don’t need to save money'' said no savvy person ever! It is why we work tirelessly to craft these exclusive monthly coupons and deals for you. Start Saving.</p>
                </div>
            </div>
            <div class="container py-2">

                <article class="postcard light blue">
                    <a class="postcard__img_link" href="#">
                        <img class="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
                    </a>
                    <div class="postcard__text t-dark">
                        <h1 class="postcard__title blue"><a href="#">October Savings Spree</a></h1>
                        <div class="postcard__subtitle small">
                            <time datetime="2020-05-25 12:00:00">
                                <i class="fas fa-calendar-alt mr-2"></i>Up to 35% off Sitewide
                            </time>
                        </div>
                        <div class="postcard__bar"></div>
                        <div class="postcard__preview-txt d-flex justify-content-between flex-wrap align-items-baseline">
                            Free Super Saver shipping for all orders above $99.
                            <button type="button" class="btn btn-outline-primary">SHOW COUPON CODE</button>
                        </div>
                        <div className='d-flex justify-content-between flex-wrap'>
                            <div style={{ color: '#2f60fc' }}>HURRY, THIS OFFER ENDS SOON</div>
                            <span>Valid till 22nd October, 2023</span>
                        </div>
                        <div className='d-flex justify-content-between flex-wrap align-items-center'>
                            <button className='btn btn-primary'> Shop </button>
                            <OverlayTrigger
                                placement="top"
                                trigger='hover'
                                overlay={
                                    <Popover id={`popover-positioned-top`}>
                                        <Popover.Body>
                                            <div class="tooltipBody">• Maximum discount up to $100 per order.<br />• Promo not applicable on special sizes, accessories and inflatables<br />• Free Super Saver shipping for all orders above $99.<br />• Offer Ends October 22nd, 2023 at 23:59.<br />• Not valid on previous purchases or in combination with any other offer.<br />• Additional charges will apply on taxes and shipping, if applicable<br />• Discount percentage may vary on the cart value and may change as per company’s discretion<br />• BannerBuzz reserves the right to amend, rescind, revoke or terminate this offer at any time, with or without any cause.</div>
                                        </Popover.Body>
                                    </Popover>
                                }
                            >
                                <div>Terms and Conditions</div>
                            </OverlayTrigger>
                        </div>
                    </div>
                </article>

                <article class="postcard light blue">
                    <a class="postcard__img_link" href="#">
                        <img class="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
                    </a>
                    <div class="postcard__text t-dark">
                        <h1 class="postcard__title blue"><a href="#">October Savings Spree</a></h1>
                        <div class="postcard__subtitle small">
                            <time datetime="2020-05-25 12:00:00">
                                <i class="fas fa-calendar-alt mr-2"></i>Up to 35% off Sitewide
                            </time>
                        </div>
                        <div class="postcard__bar"></div>
                        <div class="postcard__preview-txt d-flex justify-content-between flex-wrap align-items-baseline">
                            Free Super Saver shipping for all orders above $99.
                            <button type="button" class="btn btn-outline-primary">SHOW COUPON CODE</button>
                        </div>
                        <div className='d-flex justify-content-between flex-wrap'>
                            <div style={{ color: '#2f60fc' }}>HURRY, THIS OFFER ENDS SOON</div>
                            <span>Valid till 22nd October, 2023</span>
                        </div>
                        <div className='d-flex justify-content-between flex-wrap align-items-center'>
                            <button className='btn btn-primary'> Shop </button>
                            <OverlayTrigger
                                placement="top"
                                trigger='hover'
                                overlay={
                                    <Popover id={`popover-positioned-top`}>
                                        <Popover.Body>
                                            <div class="tooltipBody">• Maximum discount up to $100 per order.<br />• Promo not applicable on special sizes, accessories and inflatables<br />• Free Super Saver shipping for all orders above $99.<br />• Offer Ends October 22nd, 2023 at 23:59.<br />• Not valid on previous purchases or in combination with any other offer.<br />• Additional charges will apply on taxes and shipping, if applicable<br />• Discount percentage may vary on the cart value and may change as per company’s discretion<br />• BannerBuzz reserves the right to amend, rescind, revoke or terminate this offer at any time, with or without any cause.</div>
                                        </Popover.Body>
                                    </Popover>
                                }
                            >
                                <div>Terms and Conditions</div>
                            </OverlayTrigger>
                        </div>
                    </div>
                </article>
                <article class="postcard light blue">
                    <a class="postcard__img_link" href="#">
                        <img class="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
                    </a>
                    <div class="postcard__text t-dark">
                        <h1 class="postcard__title blue"><a href="#">October Savings Spree</a></h1>
                        <div class="postcard__subtitle small">
                            <time datetime="2020-05-25 12:00:00">
                                <i class="fas fa-calendar-alt mr-2"></i>Up to 35% off Sitewide
                            </time>
                        </div>
                        <div class="postcard__bar"></div>
                        <div class="postcard__preview-txt d-flex justify-content-between flex-wrap align-items-baseline">
                            Free Super Saver shipping for all orders above $99.
                            <button type="button" class="btn btn-outline-primary">SHOW COUPON CODE</button>
                        </div>
                        <div className='d-flex justify-content-between flex-wrap'>
                            <div style={{ color: '#2f60fc' }}>HURRY, THIS OFFER ENDS SOON</div>
                            <span>Valid till 22nd October, 2023</span>
                        </div>
                        <div className='d-flex justify-content-between flex-wrap align-items-center'>
                            <button className='btn btn-primary'> Shop </button>
                            <OverlayTrigger
                                placement="top"
                                trigger='hover'
                                overlay={
                                    <Popover id={`popover-positioned-top`}>
                                        <Popover.Body>
                                            <div class="tooltipBody">• Maximum discount up to $100 per order.<br />• Promo not applicable on special sizes, accessories and inflatables<br />• Free Super Saver shipping for all orders above $99.<br />• Offer Ends October 22nd, 2023 at 23:59.<br />• Not valid on previous purchases or in combination with any other offer.<br />• Additional charges will apply on taxes and shipping, if applicable<br />• Discount percentage may vary on the cart value and may change as per company’s discretion<br />• BannerBuzz reserves the right to amend, rescind, revoke or terminate this offer at any time, with or without any cause.</div>
                                        </Popover.Body>
                                    </Popover>
                                }
                            >
                                <div>Terms and Conditions</div>
                            </OverlayTrigger>
                        </div>
                    </div>
                </article>
                <article class="postcard light blue">
                    <a class="postcard__img_link" href="#">
                        <img class="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
                    </a>
                    <div class="postcard__text t-dark">
                        <h1 class="postcard__title blue"><a href="#">October Savings Spree</a></h1>
                        <div class="postcard__subtitle small">
                            <time datetime="2020-05-25 12:00:00">
                                <i class="fas fa-calendar-alt mr-2"></i>Up to 35% off Sitewide
                            </time>
                        </div>
                        <div class="postcard__bar"></div>
                        <div class="postcard__preview-txt d-flex justify-content-between flex-wrap align-items-baseline">
                            Free Super Saver shipping for all orders above $99.
                            <button type="button" class="btn btn-outline-primary">SHOW COUPON CODE</button>
                        </div>
                        <div className='d-flex justify-content-between flex-wrap'>
                            <div style={{ color: '#2f60fc' }}>HURRY, THIS OFFER ENDS SOON</div>
                            <span>Valid till 22nd October, 2023</span>
                        </div>
                        <div className='d-flex justify-content-between flex-wrap align-items-center'>
                            <button className='btn btn-primary'> Shop </button>
                            <OverlayTrigger
                                placement="top"
                                trigger='hover'
                                overlay={
                                    <Popover id={`popover-positioned-top`}>
                                        <Popover.Body>
                                            <div class="tooltipBody">• Maximum discount up to $100 per order.<br />• Promo not applicable on special sizes, accessories and inflatables<br />• Free Super Saver shipping for all orders above $99.<br />• Offer Ends October 22nd, 2023 at 23:59.<br />• Not valid on previous purchases or in combination with any other offer.<br />• Additional charges will apply on taxes and shipping, if applicable<br />• Discount percentage may vary on the cart value and may change as per company’s discretion<br />• BannerBuzz reserves the right to amend, rescind, revoke or terminate this offer at any time, with or without any cause.</div>
                                        </Popover.Body>
                                    </Popover>
                                }
                            >
                                <div>Terms and Conditions</div>
                            </OverlayTrigger>
                        </div>
                    </div>
                </article>
                <article class="postcard light blue">
                    <a class="postcard__img_link" href="#">
                        <img class="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
                    </a>
                    <div class="postcard__text t-dark">
                        <h1 class="postcard__title blue"><a href="#">October Savings Spree</a></h1>
                        <div class="postcard__subtitle small">
                            <time datetime="2020-05-25 12:00:00">
                                <i class="fas fa-calendar-alt mr-2"></i>Up to 35% off Sitewide
                            </time>
                        </div>
                        <div class="postcard__bar"></div>
                        <div class="postcard__preview-txt d-flex justify-content-between flex-wrap align-items-baseline">
                            Free Super Saver shipping for all orders above $99.
                            <button type="button" class="btn btn-outline-primary">SHOW COUPON CODE</button>
                        </div>
                        <div className='d-flex justify-content-between flex-wrap'>
                            <div style={{ color: '#2f60fc' }}>HURRY, THIS OFFER ENDS SOON</div>
                            <span>Valid till 22nd October, 2023</span>
                        </div>
                        <div className='d-flex justify-content-between flex-wrap align-items-center'>
                            <button className='btn btn-primary'> Shop </button>
                            <OverlayTrigger
                                placement="top"
                                trigger='hover'
                                overlay={
                                    <Popover id={`popover-positioned-top`}>
                                        <Popover.Body>
                                            <div class="tooltipBody">• Maximum discount up to $100 per order.<br />• Promo not applicable on special sizes, accessories and inflatables<br />• Free Super Saver shipping for all orders above $99.<br />• Offer Ends October 22nd, 2023 at 23:59.<br />• Not valid on previous purchases or in combination with any other offer.<br />• Additional charges will apply on taxes and shipping, if applicable<br />• Discount percentage may vary on the cart value and may change as per company’s discretion<br />• BannerBuzz reserves the right to amend, rescind, revoke or terminate this offer at any time, with or without any cause.</div>
                                        </Popover.Body>
                                    </Popover>
                                }
                            >
                                <div>Terms and Conditions</div>
                            </OverlayTrigger>
                        </div>
                    </div>
                </article>
                <article class="postcard light blue">
                    <a class="postcard__img_link" href="#">
                        <img class="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
                    </a>
                    <div class="postcard__text t-dark">
                        <h1 class="postcard__title blue"><a href="#">October Savings Spree</a></h1>
                        <div class="postcard__subtitle small">
                            <time datetime="2020-05-25 12:00:00">
                                <i class="fas fa-calendar-alt mr-2"></i>Up to 35% off Sitewide
                            </time>
                        </div>
                        <div class="postcard__bar"></div>
                        <div class="postcard__preview-txt d-flex justify-content-between flex-wrap align-items-baseline">
                            Free Super Saver shipping for all orders above $99.
                            <button type="button" class="btn btn-outline-primary">SHOW COUPON CODE</button>
                        </div>
                        <div className='d-flex justify-content-between flex-wrap'>
                            <div style={{ color: '#2f60fc' }}>HURRY, THIS OFFER ENDS SOON</div>
                            <span>Valid till 22nd October, 2023</span>
                        </div>
                        <div className='d-flex justify-content-between flex-wrap align-items-center'>
                            <button className='btn btn-primary'> Shop </button>
                            <OverlayTrigger
                                placement="top"
                                trigger='hover'
                                overlay={
                                    <Popover id={`popover-positioned-top`}>
                                        <Popover.Body>
                                            <div class="tooltipBody">• Maximum discount up to $100 per order.<br />• Promo not applicable on special sizes, accessories and inflatables<br />• Free Super Saver shipping for all orders above $99.<br />• Offer Ends October 22nd, 2023 at 23:59.<br />• Not valid on previous purchases or in combination with any other offer.<br />• Additional charges will apply on taxes and shipping, if applicable<br />• Discount percentage may vary on the cart value and may change as per company’s discretion<br />• BannerBuzz reserves the right to amend, rescind, revoke or terminate this offer at any time, with or without any cause.</div>
                                        </Popover.Body>
                                    </Popover>
                                }
                            >
                                <div>Terms and Conditions</div>
                            </OverlayTrigger>
                        </div>
                    </div>
                </article>

            </div>
            <div className='container list-items'>
                <div >
                    <h2>Exclusive Deals &amp; Coupons- Extra Savings are Just a Click Away!</h2>
                    <p>At BannerBuzz, we value your money just as much as your time. Besides offering you a complete range of high-quality printed signage and advertising products, we also take pride in crafting exclusive deals for you. We strive to offer enhanced visibility to your brand/business via our signs &amp; displays. While these printed signs help you to put across an impactful message and promote your business, our monthly deals/coupons help you save additional money while purchasing with us. We work tirelessly to make your every purchase budgeted and impactful via a user-friendly online banner ordering experience and liberal saving opportunities.</p>
                    <p>Here you will find numerous signage options to advertise and professionally grow your business. Furthermore, these graphic &amp; display coupons will enhance your joy of custom ordering experience. To meet your personal, business, and event needs, we keep adding new deals for all our products including:</p>
                    <ul>
                        <li><a title="Custom Banners" href="/banners" target="_blank" rel="noopener">Custom Banners</a></li>
                        <li><a title="Banner stands" href="/banner-stands" target="_blank" rel="noopener">Banner stands</a></li>
                        <li><a title="Personalized table covers &amp; throws" href="/table-covers-and-throws" target="_blank" rel="noopener">Personalized table covers &amp; throws</a></li>
                        <li><a title="Advertising flags" href="/flags" target="_blank" rel="noopener">Advertising flags</a></li>
                        <li><a title="Compliance signs" href="/compliance-signs" target="_blank" rel="noopener">Compliance signs</a></li>
                        <li><a title="Marketing materials" href="/marketing-materials" target="_blank" rel="noopener">Marketing materials</a></li>
                        <li><a title="Window &amp; car decals" href="/window-signs" target="_blank" rel="noopener">Window &amp; car decals</a></li>
                    </ul>
                    <p>With over 2 decades of sign printing and manufacturing experience, we believe that regardless of distinct advertising needs, the desire to find budgeted deals remains common across businesses. It is why we keep on devising new banner coupons and <a href="/signs-and-decals" target="_blank" rel="noopener">signage deals</a> for our customers.</p>
                    <p>Get ready to find a full range of sign and graphic solutions all at one place. And don’t miss to save some extra bucks while you are at it, with our exclusive deals &amp; coupon codes. Start exploring the best online signs &amp; displays, enjoy our best price guarantee, and save even more with our online signage deals &amp; coupons.</p>
                </div>
            </div>

        </div>
    )
}

export default Coupons