import React from "react";
import Header from "../components/header/Header";
import { Container } from "react-bootstrap";
import BlogSideBaar from "../components/BlogSideBaar";
import SubscribeSection from "../components/SecoundLast";
import Footer from "../components/Footer";
import posterBlog from "../assets/shutterstock_108294335.jpg";
import posterBlog2 from "../assets/shutterstock_329907122.jpg";
import { SocialMediaShareBox } from "../components/product-box";

const CategoryWithBlog = () => {
  return (
    <div>
      <Header upperLineNone={true} />
      <Container className="my-5 w-1100 d-flex">
        <div className="w-70 d-flex justify-content-between flex-wrap height-fitcontant">
          <div className="w-100">
            <span className="d-inline f-size-12">BANNERBUZZ</span>
            <p className="d-inline pl-1 sub-gray-text f-size-12">
              OCTOBER 19TH, 2012
            </p>
            <h3 className="heading-color">
              BannerBuzz.com Launches New Products – Wall Lettering
            </h3>
            <p className="black-color f-size-14 my-3">
              <span className="heading-color">Wall lettering</span> gives you
              freedom from the mess of painting on walls or stencilling. It is
              done in Vinyl letters…
            </p>
            <p className="black-color f-size-14 my-4">
              which are placed on walls as per the customer requirement and are
              easily removable. However, once removed, they cannot be
              repositioned, but the process is mess free and doesn’t hurt the
              walls.
            </p>
            <h4 className="heading-color">
              BannerBuzz.com Launches New Products
            </h4>
            <img src={posterBlog} alt="poster" className="mw-100" />
            <p className="black-color f-size-14 my-4">
              Wall letters personalise the space completely and can be used in
              the walls of bedroom or kids’ room. Vinyl Wall Lettering is also
              used as an interior decoration option as it gives the space a
              complete makeover. Whether it’s a personal message or a quote or a
              monogram or even your company’s name or logo on office walls, Wall
              lettering is the best solution. At BannerBuzz, getting your vinyl
              wall lettering is easy. If you have a print ready design then
              we’ll print it for you or you can use our user-friendly design
              tool to design your wall lettering. You can also take the help of
              our designers to design the right wall lettering for you.
            </p>
            <h4 className="heading-color">
              BannerBuzz.com Launches New Products
            </h4>
            <img src={posterBlog2} alt="poster" className="mw-100" />
            <p className="black-color f-size-14 my-4">
              which are placed on walls as per the customer requirement and are
              easily removable. However, once removed, they cannot be
              repositioned, but the process is mess free and doesn’t hurt the
              walls.
            </p>
            <span className="d-inline f-size-15 font-weight-bold ">
              Related Vinyl Lettering Products:
            </span>
            <a href="#" className="d-block mt-3 heading-color f-size-14 my-1">
              Window Lettering
            </a>
            <a href="#" className="d-block heading-color f-size-14 my-1">
              Boat Lettering
            </a>
            <a href="#" className="d-block heading-color f-size-14 my-1">
              Trailer Lettering / Truck Lettering
            </a>
            <a href="#" className="d-block heading-color f-size-14 my-1">
              Vehicle Lettering
            </a>
            <a href="#" className="d-block heading-color f-size-14 my-1">
              Snowmobile Lettering
            </a>
            <SocialMediaShareBox />
            <p>Posted in Lettering</p>
            <p className="mb-2 font-weight-bold cursor-pointer">« Introduce New Product at BannerBuzz.com – Magnetic Signs</p>
            <p className="text-right font-weight-bold cursor-pointer">Personalised Banners – Custom You Banner Using Banner Tool »</p>
            <p className="bb-grey py-1">Both comments and pings are currently closed.</p>
            <p className="text-center">Comments are closed.</p>
          </div>
        </div>
        <div className="w-30">
          <BlogSideBaar shopByCategory={true} />
        </div>
      </Container>
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default CategoryWithBlog;
