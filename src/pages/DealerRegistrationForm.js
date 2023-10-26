import React from 'react'
import Header from '../components/header/Header'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from '../components/Footer';

const DealerRegistrationForm = () => {

    return (
        <div>
            <Header />
            <div className='d-flex align-items-center'>
                <div className='breadcrum-box p-3'>
                    <span>Home</span>
                </div>
                <span className='breadcrum-color'>Dealer Registration</span>
            </div>
            <div className='container'>
                <div className='text-center my-5'>
                    <h1>Dealer Registration</h1> </div>
            </div>

            <div className='py-5 px-5'>
                <h5>Account Details</h5>
                <hr />
                <div className='col-6'>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email<span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password<span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" placeholder="Enter Email" />
                        </Form.Group>
                    </Row>

                </div>
                <h5 className='mt-5'>Company Details</h5>
                <hr />
                <div className='col-6'>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Company/Individual Name<span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Company/Individual Phone Number<span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" placeholder="Enter Email" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Position<span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>WebSite<span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" placeholder="Enter Email" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Mobile<span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>First Name<span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Last Name<span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" placeholder="Enter Email" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Sales Certificate<span className="text-danger">*</span></Form.Label>
                            <button className='btn btn-primary d-block'>Select Files</button>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Business License<span className="text-danger">*</span></Form.Label>
                            <button className='btn btn-primary d-block'>Select Files</button>

                        </Form.Group>
                    </Row>

                </div>

                <h5 className='mt-5'>Billing Address</h5>
                <hr />
                <div className='col-6'>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Address<span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Zip code<span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" placeholder="Enter Email" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>City<span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>state<span className="text-danger">*</span></Form.Label>
                            <Form.Select >
                                <option>3 x 3</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Country<span className="text-danger">*</span></Form.Label>
                            <Form.Select >
                                <option>3 x 3</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">

                        </Form.Group>
                    </Row>


                </div>

                <h5 className='mt-5'>Industry Details</h5>
                <hr />
                <div className='col-6'>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>
                                Retail or Resellers<span className="text-danger">*</span></Form.Label>
                            <Form.Select >
                                <option>3 x 3</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Industry Type<span className="text-danger">*</span></Form.Label>
                            <Form.Select >
                                <option>3 x 3</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>How did you find us?<span className="text-danger">*</span></Form.Label>
                            <Form.Select >
                                <option>3 x 3</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Company Tax ID
                                <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>

                    </Row>

                    <button className='btn btn-primary my-4'>Submit</button>

                    <p>By creating an account, you agree to our Terms and Conditions of Use and Privacy Policy.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DealerRegistrationForm