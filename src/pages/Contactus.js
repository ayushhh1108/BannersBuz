import React from 'react'
import Header from '../components/header/Header'
import SubscribeSection from '../components/SecoundLast'
import Footer from '../components/Footer'

const Contactus = () => {
    return (
        <div>
            <Header />
            <div className='container'>
                <div className='row'>
                    <div className='d-flex align-items-center mt-3'>
                        <div className='breadcrum-box'>
                            <span>Home</span>
                        </div>
                        <span className='breadcrum-color'>contact us</span>
                    </div>
                </div>
            </div>
            <section class="Material-contact-section section-padding section-dark mb-4">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 mt-5 wow animated fadeInLeft" data-wow-delay=".2s">
                            <h1 class="section-title">Love to Hear From You</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft" data-wow-delay=".2s">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content.</p>

                            <div class="find-widget">
                                Company:  <a href="https://hostriver.ro">HostRiver</a>
                            </div>
                            <div class="find-widget">
                                Address: <a href="#">4435 Berkshire Circle Knoxville</a>
                            </div>
                            <div class="find-widget">
                                Phone:  <a href="#">+ 879-890-9767</a>
                            </div>

                            <div class="find-widget">
                                Website:  <a href="https://uny.ro">www.uny.ro</a>
                            </div>
                            <div class="find-widget">
                                Program: <a href="#">Mon to Sat: 09:30 AM - 10.30 PM</a>
                            </div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14879.232056221374!2d72.86359727382654!3d21.19978430932327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fae4c1324ed%3A0xb92305741dc247bd!2sUnity%20Hospital%2FUnity%20Trauma%20Center%20and%20ICU!5e0!3m2!1sen!2sin!4v1697738990463!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div class="col-md-6 wow animated fadeInRight" data-wow-delay=".2s">
                            <form class="shake" role="form" method="post" id="contactForm" name="contact-form" data-toggle="validator">
                                <div class="form-group label-floating">
                                    <label class="control-label" for="name">Name</label>
                                    <input class="form-control" id="name" type="text" name="name" required data-error="Please enter your name" />
                                    <div class="help-block with-errors"></div>
                                </div>
                                <div class="form-group label-floating">
                                    <label class="control-label" for="email">Email</label>
                                    <input class="form-control" id="email" type="email" name="email" required data-error="Please enter your Email" />
                                    <div class="help-block with-errors"></div>
                                </div>
                                <div class="form-group label-floating">
                                    <label class="control-label" for="email">Address</label>
                                    <input class="form-control" type="text" name="address" required data-error="Please enter your Email" />
                                    <div class="help-block with-errors"></div>
                                </div>
                                <div class="form-group label-floating">
                                    <label class="control-label" for="email">Country</label>
                                    <input class="form-control" type="text" name="country" required data-error="Please enter your Email" />
                                    <div class="help-block with-errors"></div>
                                </div>
                                <div class="form-group label-floating">
                                    <label class="control-label">Subject</label>
                                    <input class="form-control" id="msg_subject" type="text" name="subject" required data-error="Please enter your message subject" />
                                    <div class="help-block with-errors"></div>
                                </div>
                                <div class="form-group label-floating">
                                    <label for="message" class="control-label">Message</label>
                                    <textarea class="form-control" rows="3" id="message" name="message" required data-error="Write your message"></textarea>
                                    <div class="help-block with-errors"></div>
                                </div>
                                <div class="form-submit mt-5">
                                    <button class="btn btn-primary" type="submit" id="form-submit"><i class="material-icons mdi mdi-message-outline"></i> Send Message</button>
                                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                                    <div class="clearfix"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <SubscribeSection />
            <Footer />
        </div>
    )
}

export default Contactus