import React from 'react'
import Header from '../components/header/Header'
import IntervalCarousel from '../components/carousel/carousel'
import OrderBar from '../components/order-bar/OrderBar'
import BreadCrum from '../components/breadcrum/breadcrum'

const StandPage = () => {
    return (
        <div>
            <Header />
            <IntervalCarousel />
            <OrderBar />
            <BreadCrum />
        </div>
    )
}

export default StandPage