import { Form } from 'react-bootstrap';
import DownArrow from '.././../assets/down-arrow.svg'

function BreadCrum() {
    return (
        <div className='container overflow-hidden'>
            <div className='row'>
                <div className='d-flex align-items-center'>
                    <div className='breadcrum-box'>
                        <span>Home</span>
                    </div>
                    <span className='breadcrum-color'>StandPage</span>
                </div>
                <div className='col-12'>
                    <h1 className='breadcrumhead fw-bold'>
                        StandPage
                    </h1>
                    <p className='f-size-12'>Get your striking and attention-drawing banner printed on premium-quality art cotton canvas, polyester fabric, or processed fabric. Our full-color, 600DPI, UV Printing will bring your banner graphics to life with vibrant, bold, and imposing colors. Versatile display options, lamination, and UV printing are available. Our free to use design templates and online design tool makes custom banner designing easy and quick. These aesthetically appealing fabric banners are popularly used at churches, indoor events, in-store displays, retail stores, etc. Order yours now to avail the best price guarantee and FREE SHIPPING.
                    </p>
                </div>
                <div className='p-3'></div>
                <div className='mb-3'>
                    <div className='float-end d-flex align-items-center'>
                        <span className='fw-light d-none d-md-block mr-3' style={{ fontSize: '12px' }}>Sort by</span>
                        <Form.Select className='mr-3' style={{ width: "220px" }}>
                            <option>Best Seller</option>
                        </Form.Select>
                        <img src={DownArrow} role='button' alt='down arrow' />
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
}

function OnlyBreadCrum() {
    return (
        <div className='col-12 p-3 d-flex align-items-center z-n1'>
            <div className='breadcrum-box'>
                <span>Home</span>
            </div>
            <div className='breadcrum-box'>
                <span>StandPage</span>
            </div>
            <span className='breadcrum-color'>Magnetic Signs</span>
        </div>

    );
}

export { BreadCrum, OnlyBreadCrum };