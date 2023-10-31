import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import Form from 'react-bootstrap/Form';
import QualityBar from "../components/QualityBar/QualityBar";
import { Dropdown } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import SubscribeSection from "../components/SecoundLast";

const Quickrfq = () => {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Simple tooltip
        </Tooltip>
    );
    return (
        <div>
            <Header />
            <div className="container">
                <QualityBar />
                <div className="quotation mt-5">
                    <h2 className="text-light">Our Quotation</h2>
                    <div className="dateMainBox d-none d-sm-block">
                        28th October 2023
                        <div className="bottomArrow"></div>
                    </div>
                    <p className="text-white d-block d-sm-none text-end m-0">28th October 2023</p>
                </div>

                <div>
                    <div className="d-flex align-items-center">
                        <span className="detail-box me-2">
                            1
                        </span>
                        <h4 className="m-0">Your details please</h4>
                    </div>
                    <div className="col-12 d-flex flex-wrap my-4">
                        <div className="col-12 col-md-6 col-3 ">
                            <Form.Label>Name<span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </div>
                        <div className="col-12 col-md-6 col-3 ">
                            <Form.Label>Company Name<span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </div>
                        <div className="col-12 col-md-6 col-3 ">
                            <Form.Label>Email Address<span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </div>
                        <div className="col-12 col-md-6 col-3 ">
                            <Form.Label>Phone Number<span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </div>
                    </div>
                    <div className="col-12 d-flex flex-wrap my-4">
                        <div className="col-12 col-md-6 col-3 ">
                            <Form.Label>Post Code<span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </div>
                        <div className="col-12 col-md-6 col-3 ">
                            <Form.Label>State<span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </div>
                        <div className="col-12 col-md-6 col-3 ">
                            <Form.Label>Country<span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" disabled placeholder="Enter name" />
                        </div>

                    </div>
                </div>
                <div className="my-5">
                    <div className="d-flex align-items-center">
                        <span className="detail-box me-2">
                            2
                        </span>
                        <h4 className="m-0">Choose a product, size, and quantity</h4>
                    </div>
                    <div>
                        <div className="col-12 col-md-10 col-lg-6 my-4">
                            <span className="d-block mb-2">Select Product</span>
                            <Dropdown>
                                <Dropdown.Toggle variant='info' className='w-100 d-flex justify-content-between align-items-center order-select' id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='w-100 p-3' >
                                    <input type='text' className='w-100 orange-Border' />
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap align-items-center my-4">
                        <span className='me-4 col-12 col-md-3 col-lg-2'>Print Sides</span>
                        <div className="col-12 col-md-6 col-lg-2 d-flex">
                            <Form.Control type="text" placeholder="Enter name" />
                        </div>
                    </div>
                    <div className="d-flex flex-wrap align-items-center my-4">
                        <span className='me-4 col-12 col-md-3 col-lg-2'>Material Weight	</span>
                        <div className="col-12 col-md-6 col-lg-2 d-flex">
                            <Form.Control type="text" placeholder="Enter name" />
                        </div>
                    </div>
                    <div className="d-flex flex-wrap align-items-center my-4">
                        <span className='me-4 col-12 col-md-3 col-lg-2'>Lamination</span>
                        <div className="col-12 col-md-6 col-lg-2 d-flex">
                            <Form.Control type="text" placeholder="Enter name" />
                        </div>
                    </div>
                    <div className="d-flex flex-wrap align-items-center my-4">
                        <span className='me-4 col-12 col-md-3 col-lg-2'>Pantone + Color Bridge Coated (optional)</span>
                        <div className="col-12 col-md-6 col-lg-2 d-flex">
                            <Form.Control
                                type="text" className='me-2'
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                            /><OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            ><button type="button" class="btn btn-light">?</button></OverlayTrigger>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <hr />
                    </div>
                    <div className="d-flex flex-wrap align-items-center my-4">
                        <span className='me-4 col-12 col-md-3 col-lg-2'>Add Accessories (optional)	</span>
                        <div className="col-12 col-md-6 col-lg-2 d-flex">
                            <Form.Control
                                type="text" className='me-2'
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                            /><OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            ><button type="button" class="btn btn-light">?</button></OverlayTrigger>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary">ADD</button>
                    </div>
                    <div className="d-flex py-5 align-items-center flex-wrap">
                        <div className=" col-12 col-md-8 col-lg-6">
                            <span className='me-4 col-3'>Specific Instructions (optional)</span>
                            <Form.Control className='me-2'
                                as="textarea" rows={3}
                            />
                        </div>
                        <div className="col-12 col-md-4 col-lg-3"> Shipping and tax amount will be calculated at the Cart.
                            <hr className="d-block d-sm-none" />
                        </div>
                        <div className="d-flex justify-content-between col-12 col-md-4 col-lg-3">
                            <span>Sub Total</span>
                            <span className="fw-bold">$6.99</span>
                        </div>
                    </div>

                    <div className="text-center">
                        <button className="btn btn-primary m-2">Done Cart it</button>
                        <button className="btn btn-outline-primary m-2">Mail this quotation</button>
                        <button className="btn btn-outline-primary m-2">Done Cart it</button>
                    </div>

                </div>
            </div>
            <SubscribeSection />
            <Footer />
        </div>
    );
};

export default Quickrfq;
