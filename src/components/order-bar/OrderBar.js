import { Dropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function OrderBar() {
    return (
        <div className='container my-4 pt-3' style={{ maxWidth: "1200px" }}>
            <div className='row'>
                <div className='col-5 d-flex'>
                    <div class="startBox"><span>Start</span>Your Order:</div>
                    <Dropdown className='input-box'>
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
                <div className='col-7 d-flex size-box align-items-center justify-content-between'>
                    <div className='d-flex'>
                        <span className='size'>Size (W X H)</span>
                        <Form.Select className='me-2' style={{ width: "120px" }}>
                            <option>3 x 3</option>
                        </Form.Select>
                        <Form.Select style={{ width: "80px" }}>
                            <option>ft</option>
                        </Form.Select>
                    </div>
                    <InputGroup style={{ width: "100px" }}>
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Qty
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>

                    <div class="priceBox"><div class="pricesBox"><span class="priceLabel">Price</span><span class="oldPrice">$9.79</span><span class="newPrice">$6.99</span></div></div>
                    <button className='btn btnPrimary' >BUY NOW</button>
                </div>
            </div>
        </div>
    );
}

export default OrderBar;