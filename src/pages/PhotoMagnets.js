import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { OnlyBreadCrum } from "../components/breadcrum/breadcrum";
import ThumbsSlider from "../components/ThumbsSlider";
import star from '../assets/star.svg'
import halfstar from '../assets/half-start.svg'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Form from 'react-bootstrap/Form';
import Emoji from '../assets/emoji.png';
import CardImg from '../assets/designYourOwnIcon.jpg'
import Nav from 'react-bootstrap/Nav';
import cardImg from "../assets/pexels.jpg";
import { Card } from "react-bootstrap";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductBox } from "../components/product-box";
import products from "../assets/468.jpg";
import SubscribeSection from "../components/SecoundLast";
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";

const PhotoMegnets = () => {
  const arrayOfTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );
  return (
    <div>
      <Header />
      <div className="">
        <OnlyBreadCrum />
        <div className="container-fluid">
          <div className="row">
            <div className=" col-12 col-md-5 col-lg-4 z-n1">
              <ThumbsSlider />
            </div>
            <div className="col-12 col-md-7 col-lg-5 z-n1">
              <h1>Photo Magnets</h1>
              <div className="d-flex flex-wrap align-items-center">
                <div className="me-4 d-flex align-items-center">
                  <img src={star} alt='star' />
                  <img src={star} alt='star' />
                  <img src={star} alt='star' />
                  <img src={star} alt='star' />
                  <img src={halfstar} alt='star' />
                </div>
                <div>
                  <span className="text-primary">3279 Reviews</span> <span> | </span>
                  <span className="text-primary"> Product Specifications </span> <span> | </span>
                  <span className="text-primary"> Ask a Question </span><span> | </span>
                  <span>SKU : BBPTMT01</span>
                </div>
              </div>
              <div className="my-4 fancyCheck d-flex flex-wrap py-3" style={{ backgroundColor: '#f5f5f5' }}>
                <div className="col-12 col-sm-6">
                  <ul>
                    <li>Flexible magnetic sheet makes the photo magnets durable.</li>
                    <li>High-quality UV printing provides a bright finish.</li>
                    <li>Available in a varied range of sizes to meet your needs.</li>
                  </ul>
                </div>
                <div className="col-12 col-sm-6">
                  <ul>
                    <li>Lightweight, the metal photo magnets are portable.</li>
                    <li>Installation is quick and simple, without the need for tools.</li>
                  </ul>
                </div>
              </div>
              <div className="p-2 d-flex align-items-center justify-content-center flex-wrap" style={{ backgroundColor: '#fff2d3' }}>
                <span><span className="text-bold">Want it by Friday, Oct. 27?</span> Order Today and choose <span className="text-bold">'Priority'</span> shipping at checkout.</span>
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                ><button type="button" class="btn btn-light">?</button></OverlayTrigger>
              </div>
              <div className="d-flex flex-wrap align-items-center my-4">
                <span className='me-4'>Size (W X H)</span>
                <Form.Select className='me-2' style={{ width: "120px" }}>
                  <option>3 x 3</option>
                </Form.Select>
                <Form.Select style={{ width: "80px" }}>
                  <option>ft</option>
                </Form.Select>
              </div>
              <div className="d-flex flex-wrap align-items-center my-4">
                <span className='me-5'>Quantity</span>
                <Form.Control
                  type="text"
                  style={{ width: "200px" }}
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                />
              </div>
              <p className="text-sm">Price per quantity discounts for Bulk orders</p>
              <div className="border">
                <p className="px-2" style={{ backgroundColor: 'rgb(245, 245, 245)' }}>Save More on Bulk Orders</p>
                <div className="d-flex justify-content-around justify-content-sm-between mb-3 flex-wrap flex-sm-nowrap">
                  <div className="d-flex flex-column align-items-center px-2 px-sm-0"><p className="m-0 text-center">Min 2 for
                    $21.06/unit</p>
                    <span class="badge bg-success">Save 25%</span>
                  </div>
                  <div className="d-flex flex-column align-items-center px-2 px-sm-0"><p className="m-0 text-center">Min 2 for
                    $21.06/unit</p>
                    <span class="badge bg-success">Save 25%</span>
                  </div>
                  <div className="d-flex flex-column align-items-center px-2 px-sm-0"><p className="m-0 text-center">Min 2 for
                    $21.06/unit</p>
                    <span class="badge bg-success">Save 25%</span>
                  </div>
                  <div className="d-flex flex-column align-items-center px-2 px-sm-0"><p className="m-0 text-center">Min 2 for
                    $21.06/unit</p>
                    <span class="badge bg-success">Save 25%</span>
                  </div>
                  <div className="d-flex flex-column align-items-center px-2 px-sm-0"><p className="m-0 text-center">Min 2 for
                    $21.06/unit</p>
                    <span class="badge bg-success">Save 25%</span>
                  </div>
                </div>
              </div>
              <hr className="hr" />
              <div className="d-flex flex-wrap align-items-center my-4">
                <span className='me-4 col-12 col-sm-3'>Size (W X H)</span>
                <Form.Select className='me-2' style={{ width: "250px" }}>
                  <option>3 x 3</option>
                </Form.Select><OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                ><button type="button" class="btn btn-light">?</button></OverlayTrigger>

              </div>
              <div className="d-flex flex-wrap align-items-center my-4">
                <span className='me-4 col-12 col-sm-3'>Pantone + Color Bridge Coated (optional)</span>
                <Form.Control
                  type="text" className='me-2'
                  style={{ width: "250px" }}
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                /><OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                ><button type="button" class="btn btn-light">?</button></OverlayTrigger>

              </div>
              <hr className="hr" />
              <div className="d-flex flex-wrap align-items-center my-4">
                <span className='me-4 col-12 col-sm-3'>Specific Instructions (optional)</span>
                <Form.Control className='me-2'
                  style={{ width: "250px" }}
                  as="textarea" rows={3}
                />

              </div>
              <div className="border d-block d-lg-none p-2 p-sm-4 ">
                <div className="text-center">
                  <span className="text-decoration-line-through fw-bold ">$ 39.32</span>
                  <h3>$ 23.43</h3>
                </div>
                <hr />
                <Form.Check className="mb-2" type={'radio'} id={`check-api-radio`}>
                  <Form.Check.Input type={'radio'} />
                  <Form.Check.Label>Upload Artwork</Form.Check.Label>

                  <div>Upload your designs and get the design proofing done</div>

                </Form.Check>
                <hr />
                <Form.Check className="mb-2" type={'radio'} id={`check-api-radio`}>
                  <Form.Check.Input type={'radio'} />
                  <Form.Check.Label>Upload Artwork</Form.Check.Label>

                  <div>Upload your designs and get the design proofing done</div>

                </Form.Check>
                <hr />
                <Form.Check className="mb-2" type={'radio'} id={`check-api-radio`}>
                  <Form.Check.Input type={'radio'} />
                  <Form.Check.Label>Upload Artwork</Form.Check.Label>

                  <div>Upload your designs and get the design proofing done</div>

                </Form.Check>
                <hr />
                <Link to='/checkout/cart'>
                  <button className="btn btn-primary w-100">UPLOAD ARTWORK & CHECKOUT</button>
                </Link>

              </div>
            </div>
            <div className="col-3 d-none d-lg-block z-n1">
              <div className="border p-4 ">
                <div className="text-center">
                  <span className="text-decoration-line-through fw-bold ">$ 39.32</span>
                  <h3>$ 23.43</h3>
                </div>
                <hr />
                <Form.Check className="mb-2" type={'radio'} id={`check-api-radio`}>
                  <Form.Check.Input type={'radio'} />
                  <Form.Check.Label>Upload Artwork</Form.Check.Label>

                  <div>Upload your designs and get the design proofing done</div>

                </Form.Check>
                <hr />
                <Form.Check className="mb-2" type={'radio'} id={`check-api-radio`}>
                  <Form.Check.Input type={'radio'} />
                  <Form.Check.Label>Upload Artwork</Form.Check.Label>

                  <div>Upload your designs and get the design proofing done</div>

                </Form.Check>
                <hr />
                <Form.Check className="mb-2" type={'radio'} id={`check-api-radio`}>
                  <Form.Check.Input type={'radio'} />
                  <Form.Check.Label>Upload Artwork</Form.Check.Label>

                  <div>Upload your designs and get the design proofing done</div>

                </Form.Check>
                <hr />
                <Link to='/checkout/cart'>
                  <button className="btn btn-primary w-100">UPLOAD ARTWORK & CHECKOUT</button>
                </Link>
              </div>
            </div>
            <div className='text-center my-5 z-n1'>
              <h2>Templates of Photo Magnets</h2>
              <p>Just like these, you can make your own personalized banners. Go on, it’s an empty canvas!
              </p>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-around z-n1">
              <div className="img-box position-relative">
                <img src={Emoji} alt="Avatar" class="image" />
                <div class="middle">
                  <button class="btn btn-primary img-box-btn">Customize It</button>
                </div>
              </div>

              <div className="img-box position-relative">
                <img src={CardImg} alt="Avatar" class="image" />
                <div class="middle">
                  <button class="btn btn-primary img-box-btn">Customize It</button>
                </div>
              </div>

              <div className="img-box position-relative">
                <img src={Emoji} alt="Avatar" class="image" />
                <div class="middle">
                  <button class="btn btn-primary img-box-btn">Customize It</button>
                </div>
              </div>

              <div className="img-box position-relative">
                <img src={CardImg} alt="Avatar" class="image" />
                <div class="middle">
                  <button class="btn btn-primary img-box-btn">Customize It</button>
                </div>
              </div>
              <div className="img-box position-relative">
                <img src={Emoji} alt="Avatar" class="image" />
                <div class="middle">
                  <button class="btn btn-primary img-box-btn">Customize It</button>
                </div>
              </div>

              <div className="img-box position-relative">
                <img src={CardImg} alt="Avatar" class="image" />
                <div class="middle">
                  <button class="btn btn-primary img-box-btn">Customize It</button>
                </div>
              </div><div className="img-box position-relative">
                <img src={Emoji} alt="Avatar" class="image" />
                <div class="middle">
                  <button class="btn btn-primary img-box-btn">Customize It</button>
                </div>
              </div>

              <div className="img-box position-relative">
                <img src={CardImg} alt="Avatar" class="image" />
                <div class="middle">
                  <button class="btn btn-primary img-box-btn">Customize It</button>
                </div>
              </div>
              <div className="img-box position-relative">
                <img src={Emoji} alt="Avatar" class="image" />
                <div class="middle">
                  <button class="btn btn-primary img-box-btn">Customize It</button>
                </div>
              </div>

              <div className="img-box position-relative">
                <img src={CardImg} alt="Avatar" class="image" />
                <div class="middle">
                  <button class="btn btn-primary img-box-btn">Customize It</button>
                </div>
              </div>
              <div className="img-box position-relative">
                <img src={Emoji} alt="Avatar" class="image" />
                <div class="middle">
                  <button class="btn btn-primary img-box-btn">Customize It</button>
                </div>
              </div>

              <div className="img-box position-relative">
                <img src={CardImg} alt="Avatar" class="image" />
                <div class="middle">
                  <button class="btn btn-primary img-box-btn">Customize It</button>
                </div>
              </div>


            </div>
            <div className="col-12 d-none d-md-block z-n1">
              <Nav variant="underline" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link className="fs-5" href="/home">Description</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="fs-5" eventKey="link">Product Specifications</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="fs-5" eventKey="link">Frequently Asked Questions</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="fs-5" eventKey="link">Customer Reviews</Nav.Link>
                </Nav.Item>
              </Nav>


              <h2 className="mt-5"><strong>Decorate Metal Surfaces with Photo Magnets</strong></h2>
              <h2>High-Quality Photo Magnets are Durable and Customizable</h2>
              <p>Advertisements and promotions are excellent marketing tools to influence and inform customers about your business and products. Our picture magnets are a convenient way to market who you are and the services you provide. For effective communication of business messages, place the magnets on vehicles, refrigerators, lockers, and file cabinets to grab the attention of passersby.</p>
              <p>Constructed with flexible magnetic sheet film material with an 800-micron thickness, the refrigerator magnets are durable. Our magnets are ideal for both indoor and outdoor applications. The magnets are long-lasting and can withstand everyday wear and tear.</p>
              <p>The 600 DPI UV printing on the substrate ensures that every detail is visible from a distance. Full-color UV printing on the metal photo magnets produces vibrant prints with good light-fastness. Our high-quality prints attract the attention of passersby whilst making any metal surface appealing.</p>
              <p>Select from a wide range of sizes or tailor the size of the refrigerator magnets to meet your specific needs. You also have the option to add Pantone (PMS) Color Match. Customize the product to fulfill your brand's requirements by uploading your own artwork, designing online using the templates, or letting our designers create layouts for you.</p>
              <h2>Portable Photo Magnets offer Easy Installation</h2>
              <p>Lightweight material makes the picture magnets portable. Easy to remove, store and reapply, you can use them again and again. This helps boost the ROI, as the magnets are a onetime purchase.</p>
              <p>Made of material with magnetic properties, the metal photo magnets attach to steel and iron surfaces, such as refrigerators, vehicles, and lockers. The magnets are easy to place and do not require any additional installation tools.</p>
              <h2>Order Photo Magnets in Bulk</h2>
              <p>To get a bulk discount, order&nbsp;refrigerator magnets in quantities of as little as 2 or over 500. Order according to your business needs and budgets, as well as the size of your company. Our bulk order service meets the needs of both large and small enterprises.</p>
              <p>Shop for Photo Magnets for your business online at BannerBuzz.&nbsp;</p>
            </div>

            <div className="col-12  d-block d-md-none">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Description</Accordion.Header>
                  <Accordion.Body>
                    <h2 className="mt-5"><strong>Decorate Metal Surfaces with Photo Magnets</strong></h2>
                    <h2>High-Quality Photo Magnets are Durable and Customizable</h2>
                    <p>Advertisements and promotions are excellent marketing tools to influence and inform customers about your business and products. Our picture magnets are a convenient way to market who you are and the services you provide. For effective communication of business messages, place the magnets on vehicles, refrigerators, lockers, and file cabinets to grab the attention of passersby.</p>
                    <p>Constructed with flexible magnetic sheet film material with an 800-micron thickness, the refrigerator magnets are durable. Our magnets are ideal for both indoor and outdoor applications. The magnets are long-lasting and can withstand everyday wear and tear.</p>
                    <p>The 600 DPI UV printing on the substrate ensures that every detail is visible from a distance. Full-color UV printing on the metal photo magnets produces vibrant prints with good light-fastness. Our high-quality prints attract the attention of passersby whilst making any metal surface appealing.</p>
                    <p>Select from a wide range of sizes or tailor the size of the refrigerator magnets to meet your specific needs. You also have the option to add Pantone (PMS) Color Match. Customize the product to fulfill your brand's requirements by uploading your own artwork, designing online using the templates, or letting our designers create layouts for you.</p>
                    <h2>Portable Photo Magnets offer Easy Installation</h2>
                    <p>Lightweight material makes the picture magnets portable. Easy to remove, store and reapply, you can use them again and again. This helps boost the ROI, as the magnets are a onetime purchase.</p>
                    <p>Made of material with magnetic properties, the metal photo magnets attach to steel and iron surfaces, such as refrigerators, vehicles, and lockers. The magnets are easy to place and do not require any additional installation tools.</p>
                    <h2>Order Photo Magnets in Bulk</h2>
                    <p>To get a bulk discount, order&nbsp;refrigerator magnets in quantities of as little as 2 or over 500. Order according to your business needs and budgets, as well as the size of your company. Our bulk order service meets the needs of both large and small enterprises.</p>
                    <p>Shop for Photo Magnets for your business online at BannerBuzz.&nbsp;</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Product Specifications</Accordion.Header>
                  <Accordion.Body>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>


            <div className="text-center py-5">
              <h2>Related Products</h2>
              <p>We curated a few products we think might interest you based on your shopping history.
              </p>
              <div className="d-flex flex-wrap  justify-content-around">
                <div className=" rounded border  suggest-box">
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
                <div className=" rounded border  suggest-box">
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
                <div className=" rounded border  suggest-box">
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
                <div className=" rounded border suggest-box">
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
                <div className=" rounded border  suggest-box">
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
              </div>
            </div>

            <div className="py-5 text-center">
              <h2>Recommended Categories</h2>
              <p> More Trending Custom-Built Category by BannerBuzz</p>
              <div >
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
                      500: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                      700: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                      },
                    }
                  }
                >

                  <SwiperSlide>
                    <div className=" cursor-pointer product-box my-3">
                      <div className="border rounded">
                        <img src={products} alt="alt" className="w-100" />
                      </div>
                      <p className="text-center py-3 f-size-18 mb-0 product-label">
                        Custom Flags
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className=" cursor-pointer product-box my-3">
                      <div className="border rounded">
                        <img src={products} alt="alt" className="w-100" />
                      </div>
                      <p className="text-center py-3 f-size-18 mb-0 product-label">
                        Custom Flags
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" cursor-pointer product-box my-3">
                      <div className="border rounded">
                        <img src={products} alt="alt" className="w-100" />
                      </div>
                      <p className="text-center py-3 f-size-18 mb-0 product-label">
                        Custom Flags
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" cursor-pointer product-box my-3">
                      <div className="border rounded">
                        <img src={products} alt="alt" className="w-100" />
                      </div>
                      <p className="text-center py-3 f-size-18 mb-0 product-label">
                        Custom Flags
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" cursor-pointer product-box my-3">
                      <div className="border rounded">
                        <img src={products} alt="alt" className="w-100" />
                      </div>
                      <p className="text-center py-3 f-size-18 mb-0 product-label">
                        Custom Flags
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" cursor-pointer product-box my-3">
                      <div className="border rounded">
                        <img src={products} alt="alt" className="w-100" />
                      </div>
                      <p className="text-center py-3 f-size-18 mb-0 product-label">
                        Custom Flags
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" cursor-pointer product-box my-3">
                      <div className="border rounded">
                        <img src={products} alt="alt" className="w-100" />
                      </div>
                      <p className="text-center py-3 f-size-18 mb-0 product-label">
                        Custom Flags
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" cursor-pointer product-box my-3">
                      <div className="border rounded">
                        <img src={products} alt="alt" className="w-100" />
                      </div>
                      <p className="text-center py-3 f-size-18 mb-0 product-label">
                        Custom Flags
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" cursor-pointer product-box my-3">
                      <div className="border rounded">
                        <img src={products} alt="alt" className="w-100" />
                      </div>
                      <p className="text-center py-3 f-size-18 mb-0 product-label">
                        Custom Flags
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" cursor-pointer product-box my-3">
                      <div className="border rounded">
                        <img src={products} alt="alt" className="w-100" />
                      </div>
                      <p className="text-center py-3 f-size-18 mb-0 product-label">
                        Custom Flags
                      </p>
                    </div>
                  </SwiperSlide>


                </Swiper>
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

export default PhotoMegnets;
