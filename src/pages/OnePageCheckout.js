import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import QualityBar from "../components/QualityBar/QualityBar";
import { Tab, Tabs } from "react-bootstrap";
import PayPal from "../assets/paypal.png";
import PayPal2 from "../assets/paypal2.png";
import Amazon from "../assets/amazon-pay.png";
import CreditCard from '../assets/credit-card.png'
import { Accordion } from "react-bootstrap";
import googleTrusted from "../assets/google-trust.svg";
import securityBudgeIcon from "../assets/security-badges.jpg";
import SubscribeSection from "../components/SecoundLast";

const OnePageCheckout = () => {
    return (
        <div>
            <Header upperLineNone={true} searchNone={true} categoryNone={true} />
            <div className="container">
                <QualityBar />
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <div className="py-5">
                                <h5 className="fs-6 mb-4">ACCOUNT DETAILS</h5>
                                <p>Welcome<span className="fw-bold">, Test</span></p>
                                <p className="mb-0">Email</p>
                                <p className="text-primary">test@gmail.com</p>
                            </div>
                            <div className="py-5">
                                <h4 className="mb-3">Billing address</h4>
                                <form className="needs-validation" novalidate>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <label for="firstName" className="form-label">First name</label>
                                            <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                                            <div className="invalid-feedback">
                                                Valid first name is required.
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <label for="lastName" className="form-label">Last name</label>
                                            <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                                            <div className="invalid-feedback">
                                                Valid last name is required.
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label for="username" className="form-label">Username</label>
                                            <div className="input-group has-validation">
                                                <span className="input-group-text">@</span>
                                                <input type="text" className="form-control" id="username" placeholder="Username" required />
                                                <div className="invalid-feedback">
                                                    Your username is required.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label for="email" className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
                                            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                            <div className="invalid-feedback">
                                                Please enter a valid email address for shipping updates.
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label for="address" className="form-label">Address</label>
                                            <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                                            <div className="invalid-feedback">
                                                Please enter your shipping address.
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label for="address2" className="form-label">Address 2 <span className="text-body-secondary">(Optional)</span></label>
                                            <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                                        </div>

                                        <div className="col-md-5">
                                            <label for="country" className="form-label">Country</label>
                                            <select className="form-select" id="country" required>
                                                <option value="">Choose...</option>
                                                <option>United States</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a valid country.
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <label for="state" className="form-label">State</label>
                                            <select className="form-select" id="state" required>
                                                <option value="">Choose...</option>
                                                <option>California</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please provide a valid state.
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <label for="zip" className="form-label">Zip</label>
                                            <input type="text" className="form-control" id="zip" placeholder="" required />
                                            <div className="invalid-feedback">
                                                Zip code required.
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="my-4" />

                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="same-address" />
                                        <label className="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
                                    </div>

                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="save-info" />
                                        <label className="form-check-label" for="save-info">Save this information for next time</label>
                                    </div>

                                    <hr className="my-4" />


                                </form>
                                <h5 className="fs-6 mb-4">SHIPPING METHOD</h5>

                                <div className="d-flex flex-wrap">
                                    <div className="col-12 col-sm-6 d-flex justify-content-between align-items-center border p-2 px-3 ">
                                        <div>
                                            <p className="m-0">Priority Overnight</p>
                                            <p className="m-0">Tue, Oct 31st</p>
                                        </div>
                                        <div>$48.52</div>
                                    </div>
                                    <div className="col-12 col-sm-6 d-flex justify-content-between align-items-center border p-2 px-3 ">
                                        <div>
                                            <p className="m-0">Priority Overnight</p>
                                            <p className="m-0">Tue, Oct 31st</p>
                                        </div>
                                        <div>$48.52</div>
                                    </div>
                                    <div className="col-12 col-sm-6 d-flex justify-content-between align-items-center border p-2 px-3 ">
                                        <div>
                                            <p className="m-0">Priority Overnight</p>
                                            <p className="m-0">Tue, Oct 31st</p>
                                        </div>
                                        <div>$48.52</div>
                                    </div>
                                    <div className="col-12 col-sm-6 d-flex justify-content-between align-items-center border p-2 px-3 ">
                                        <div>
                                            <p className="m-0">Priority Overnight</p>
                                            <p className="m-0">Tue, Oct 31st</p>
                                        </div>
                                        <div>$48.52</div>
                                    </div>
                                </div>

                                <Tabs
                                    defaultActiveKey="highLight"
                                    id="fill-tab-example"
                                    className="my-5"
                                    fill
                                >
                                    <Tab
                                        eventKey="highLight"
                                        className="text-left"
                                        title={<div><img src={CreditCard} alt="CreditCard" width='40px' /><p className="m-0">CREDIT CARD</p></div>}
                                    >
                                        <div class="row gy-3">
                                            <div class="col-md-6">
                                                <label for="cc-name" class="form-label">Name on card</label>
                                                <input type="text" class="form-control" id="cc-name" placeholder="" required />
                                                <small class="text-body-secondary">Full name as displayed on card</small>
                                                <div class="invalid-feedback">
                                                    Name on card is required
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <label for="cc-number" class="form-label">Credit card number</label>
                                                <input type="text" class="form-control" id="cc-number" placeholder="" required />
                                                <div class="invalid-feedback">
                                                    Credit card number is required
                                                </div>
                                            </div>

                                            <div class="col-md-3">
                                                <label for="cc-expiration" class="form-label">Expiration</label>
                                                <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
                                                <div class="invalid-feedback">
                                                    Expiration date required
                                                </div>
                                            </div>

                                            <div class="col-md-3">
                                                <label for="cc-cvv" class="form-label">CVV</label>
                                                <input type="text" class="form-control" id="cc-cvv" placeholder="" required />
                                                <div class="invalid-feedback">
                                                    Security code required
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab
                                        eventKey="highLight2"
                                        className="text-center"
                                        title={<div><img src={PayPal} className="object-fit-cover" alt="CreditCard" width='90px' height='40px' /><p className="m-0">PAYPAL</p></div>}
                                    >
                                        <button className="btn btn-primary">Check Out</button>
                                    </Tab><Tab
                                        eventKey="highLight3"
                                        className="text-center"
                                        title={<div><img src={Amazon} className="object-fit-cover" alt="CreditCard" width='90px' height='40px' /><p className="m-0">CREDIT CARD</p></div>}
                                    >
                                        <button className="btn btn-secondary">Pay With Amazon</button>
                                    </Tab><Tab
                                        eventKey="highLight4"
                                        className="text-left d-flex align-items-center"
                                        title={<div><img src={PayPal2} className="object-fit-cover" alt="CreditCard" width='90px' height='40px' /><p className="m-0">CREDIT CARD</p></div>}
                                    >
                                        <img src={PayPal} className="object-fit-cover mr-2" alt="CreditCard" width='90px' height='40px' />
                                        Pay in 4 interest-free payments<span className="text-primary ms-2">Learn More</span>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 py-5" >
                            <div className="p-3" style={{ backgroundColor: "aliceblue" }}>
                                <h5 className="fs-6 mb-4">ORDER SUMMARY
                                </h5>
                                <Accordion className="bg-transparent mb-4">
                                    <Accordion.Item eventKey="1" className="bg-transparent border-0">
                                        <Accordion.Header className="bg-transparent">
                                            Cart Items (2)
                                        </Accordion.Header>
                                        <Accordion.Body className="px-0 py-1">
                                            <div>
                                                <p className="m-0">Roll Up Banner Stands- Graphic</p>
                                                <span className="mr-3 d-inline-block">Quantity: 1</span>
                                                <span>Price: $49.40</span>
                                            </div>
                                            <hr />
                                            <div>
                                                <p className="m-0">Roll Up Banner Stands- Graphic</p>
                                                <span className="mr-3 d-inline-block">Quantity: 1</span>
                                                <span>Price: $49.40</span>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <div className="d-flex align-items-center justify-content-between">
                                    <span>Subtotal:</span>
                                    <span>$102.60</span>
                                </div>

                                <div className="d-flex mb-3 align-items-center justify-content-between">
                                    <span>Shipping Charges:</span>
                                    <span>$102.60</span>
                                </div>

                                <div className="d-flex align-items-center justify-content-between">
                                    <h6>Shipping Charges:</h6>
                                    <h6 className="text-primary">$151.12</h6>
                                </div>

                                <p className="mt-3">By clicking on the button below, I accept the T&C of BannerBuzz.</p>

                                <button className="w-100 btn btn-primary btn-lg">Place Your Order</button>
                            </div>
                            <img src={securityBudgeIcon} alt="security" className="mw-100 my-3 mt-4" />
                            <img src={googleTrusted} alt="security" className="mw-100 my-3" />
                        </div>
                    </div>
                </div>
            </div>

            <SubscribeSection />
            <Footer />
        </div>
    );
};

export default OnePageCheckout;
