import React from 'react'
import Header from '../components/header/Header'
import banner from '../assets/customerreviewsbanner.jpg'
import Contactus from '../assets/contact-us.svg'
import CallUs from '../assets/call-us.svg';
import Network from '../assets/globle.png';
import Footer from '../components/Footer';
import SubscribeSection from '../components/SecoundLast';

const DealerRegistration = () => {

    return (
        <div>
            <Header />
            <div className='d-flex align-items-center'>
                <div className='breadcrum-box p-3'>
                    <span>Home</span>
                </div>
                <span className='breadcrum-color'>Dealer Registration</span>
            </div>
            <img src={banner} alt='banner' width='100%' />
            <div className='container'>
                <div className='row text-center my-5'>
                    <h2>Grab this opportunity and be a dealer today.</h2>
                    <p>Here’s the golden opportunity you were looking for. BannerBuzz is calling all resellers to join our ever-increasing dealer network. What does that mean? Special reseller pricing on a wide range of products. Yes, that includes Banners, Stands, Displays, Table covers, Posters, Signages, Boards, Mats, Decals and a lot more.</p>
                </div>
            </div>
            <div className='text-center'>
                <img src={Contactus} alt='Contactus' className='mx-auto mw-100' />
                <h4><img src={CallUs} alt='call-us' /> dealer.partner@groupbayport.com</h4>
            </div>
            <div className='py-5'>
                <h3 className='text-center mb-4'>Hey Dealers! Here’s how you’re exclusive.</h3>
                <div className='px-3 d-flex flex-wrap'>
                    <div className='col-4'>
                        <div className='border my-3'>
                            <img src={Network} alt='icon' style={{ backgroundColor: "#4383b8" }} className='p-3' />
                            <h6 className='d-inline-block px-3'>Priority Turnaround</h6>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='border my-3'>
                            <img src={Network} alt='icon' style={{ backgroundColor: "#4383b8" }} className='p-3' />
                            <h6 className='d-inline-block px-3'>Priority Turnaround</h6>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='border my-3'>
                            <img src={Network} alt='icon' style={{ backgroundColor: "#4383b8" }} className='p-3' />
                            <h6 className='d-inline-block px-3'>Priority Turnaround</h6>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='border my-3'>
                            <img src={Network} alt='icon' style={{ backgroundColor: "#4383b8" }} className='p-3' />
                            <h6 className='d-inline-block px-3'>Priority Turnaround</h6>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='border my-3'>
                            <img src={Network} alt='icon' style={{ backgroundColor: "#4383b8" }} className='p-3' />
                            <h6 className='d-inline-block px-3'>Priority Turnaround</h6>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='border my-3'>
                            <img src={Network} alt='icon' style={{ backgroundColor: "#4383b8" }} className='p-3' />
                            <h6 className='d-inline-block px-3'>Priority Turnaround</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-5 text-center' style={{ backgroundColor: '#f5f5f5' }}>
                <h3 className='text-center mb-4'>Hey Dealers! Here’s how you’re exclusive.</h3>

                <div className='d-flex flex-wrap p-3 pb-5 text-center'>
                    <div className='col-4'>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Fill an online application</h5>
                                <p class="card-text">A simple process of answering some basic questions.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Fill an online application</h5>
                                <p class="card-text">A simple process of answering some basic questions.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Fill an online application</h5>
                                <p class="card-text">A simple process of answering some basic questions.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='btn btn-primary'>
                    Apply Here
                </button>
            </div>
            <div className='py-5'>
                <div className='my-5'>
                    <h2 className='text-center'>General Qualification Criteria</h2>
                    <p className='text-center pb-5'>The following industry specialists qualify for express approval:
                    </p>
                    <div className='d-flex justify-content-center'>
                        <div className='col-4'>
                            <ul class="fancyCheck">
                                <li>Marketing Agencies</li>
                                <li>Promotional &amp; Point of Sale (POS) Companies</li>
                                <li>Event Managers or Consultants</li>
                                <li>Wedding Planners</li>
                                <li>Printing Companies</li>
                            </ul>
                        </div>
                        <div className='col-4'>
                            <ul class="fancyCheck">
                                <li>Marketing Agencies</li>
                                <li>Promotional &amp; Point of Sale (POS) Companies</li>
                                <li>Event Managers or Consultants</li>
                                <li>Wedding Planners</li>
                                <li>Printing Companies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <SubscribeSection />
            <Footer />
        </div>
    )
}

export default DealerRegistration