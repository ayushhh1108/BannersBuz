import React from 'react'
import Header from '../components/header/Header'

const OrderStatus = () => {
    return (
        <div>
            <Header />
            <div className='mt-5 text-center'>
                <h1>Order Status, the whereabouts</h1>
                <p>Just enter a few details to get your order-status.</p>
                <div class="mb-3 text-start mx-auto" style={{ width: '300px' }}>
                    <label for="exampleInputEmail1" class="form-label">Email address<span className='text-danger'>*</span></label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button type="submit" class="btn btn-primary"> All good, update me </button>

            </div>
        </div>
    )
}

export default OrderStatus