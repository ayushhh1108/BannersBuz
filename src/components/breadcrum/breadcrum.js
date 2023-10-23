import { Form } from 'react-bootstrap';
import DownArrow from '.././../assets/down-arrow.svg'

function BreadCrum() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='d-flex align-items-center'>
                    <div className='breadcrum-box'>
                        <span>Home</span>
                    </div>
                    <span className='breadcrum-color'>StandPage</span>
                </div>
                <div className='col-12'>
                    <h1 className='breadcrumhead'>
                        StandPage
                    </h1>
                </div>
                <div className='p-3'></div>
                <div className='mb-3'>
                    <div className='float-end d-flex align-items-center'>
                        <span className='fw-light mr-3' style={{ fontSize: '12px' }}>Sort by</span>
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
        <div className='container'>
            <div className='row p-3'>
                <div className='d-flex align-items-center'>
                    <div className='breadcrum-box'>
                        <span>Home</span>
                    </div>
                    <div className='breadcrum-box'>
                        <span>StandPage</span>
                    </div>
                    <span className='breadcrum-color'>Magnetic Signs</span>
                </div>
            </div>
        </div>
    );
}

export {BreadCrum,OnlyBreadCrum};