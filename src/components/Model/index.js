import { Button, Modal } from "react-bootstrap";
import { CartItemBox } from "../product-box";

const CartModel = ({ open, handleClose }) => {
  return (
    <Modal show={open} onHide={handleClose} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-4">
        <CartItemBox cartModel />
        <CartItemBox cartModel />
        <p className="w-100 mb-0 text-right p-2 " style={{backgroundColor:"#f5f5f5"}}>SHOPPING CART - SUBTOTAL <span className="text-primary fw-bold">$505.70</span></p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={handleClose}
          className="f-size-12 rounded-0 px-4"
        >
          VIEW CART & CHECKOUT
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CartModel;
