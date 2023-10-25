import React from "react";
import Header from "../components/header/Header";
import { Container } from "react-bootstrap";
import {
  TipsSuggetionCard,
} from "../components/product-box";
import Footer from "../components/Footer";
import SubscribeSection from "../components/SecoundLast";
import BlogSideBaar from "../components/BlogSideBaar";
import Paginationn from "../components/Pagination";

const BlogPage = ({shopByCategory}) => {
  const arrayOfTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15,16];
  return (
    <div>
      <Header upperLineNone={true} />
      <Container className="my-5 w-1100 d-flex">
        <div className="w-70 d-flex justify-content-between flex-wrap height-fitcontant">
          {arrayOfTen?.map((i) => {
            return <TipsSuggetionCard width="w-49 my-2 height-fitcontant" />;
          })}
          <Paginationn />
        </div>
        <div className="w-30">
          <BlogSideBaar shopByCategory={shopByCategory}/>
        </div>
      </Container>
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default BlogPage;
