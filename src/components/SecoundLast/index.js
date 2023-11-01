import React from "react";
import "../../css/style.css";
import { Button, Form } from "react-bootstrap";
const SubscribeSection = ({upperLineNone}) => {
  return (
    <container className="w-100 text-center d-flex align-items-center justify-content-evenly p-3 Subscribe-box" style={{backgroundColor:"#4383b8",color:"white"}}>
    <p className="w-33">Subscribe to our newsletter and get 20% OFF on Your First Order + Free Shipping.</p>
    <Form.Control type="text" className="w-45 height-fitcontant" placeholder="Normal text" />
    <Button variant="light" className="height-fitcontant px-2 my-2">SUBSCRIBE</Button>
  </container>
  );
};

export default SubscribeSection;
