import React from 'react'
import Header from '../components/header/Header'
import cu1 from '../assets/cu-1.svg'
import cu2 from '../assets/cu-2.svg'
import cu3 from '../assets/cu-3.svg'
import cu4 from '../assets/cu-4.svg'
import cu5 from '../assets/cu-5.svg'
import cu6 from '../assets/cu-6.svg'
import cu7 from '../assets/cu-7.svg'
import cu8 from '../assets/cu-8.svg'
import cu9 from '../assets/cu-9.svg'
import cu10 from '../assets/cu-10.svg'
import cu11 from '../assets/cu-11.svg'
import cu12 from '../assets/cu-12.svg'
import cu13 from '../assets/cu-13.svg'
import cu14 from '../assets/cu-14.svg'
import cu15 from '../assets/cu-15.svg'
import cu16 from '../assets/cu-16.svg'
import cu17 from '../assets/cu-17.svg'
import cu18 from '../assets/cu-18.svg'
import cu19 from '../assets/cu-19.svg'

const Country = () => {
    return (
        <div>
            <Header />
            <div className='container'>
                <div className='row'>
                    <div className='col-8'>
                        <div className='d-flex align-items-center mt-3'>
                            <div className='breadcrum-box'>
                                <span>Home</span>
                            </div>
                            <span className='breadcrum-color'>Finland</span>
                        </div>
                        <div className='country-head'>
                            <h2 className='mt-3'>
                                Shipping in Finland

                            </h2>
                            <p>We’re buzzing in Finland! Our plans? Making you happy. We’re partnering with local businesses,
                                using some production facilities, and partnering there to offer great services at the lowest
                                rates.</p>
                        </div>
                        <h5>$0.99/SF for all banners over 200 sq.ft.</h5>
                        <h6 className='mb-4'>Shipping Charges:</h6>
                        <table class="table mb-5">
                            <thead>
                                <tr>
                                    <th scope="col">ORDER VALUE ($)</th>
                                    <th scope="col">PRIORITY</th>
                                    <th scope="col">EXPRESS</th>
                                    <th scope="col">STANDARD GROUND</th>
                                    <th scope="col">SUPER SAVER</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0 - 99</td>
                                    <td >$28.93</td>
                                    <td>$21.68</td>
                                    <td >$14.43</td>
                                    <td>Free Shipping</td>
                                </tr>
                                <tr>
                                    <td  >100 - 199</td>
                                    <td  >$47.78</td>
                                    <td  >$27.48</td>
                                    <td  >$8.63</td>
                                    <td  >Free Shipping</td>
                                </tr>
                                <tr>
                                    <td  >200 - 299</td>
                                    <td  >$65.18</td>
                                    <td  >$36.18</td>
                                    <td  >$12.98</td>
                                    <td  >Free Shipping</td>
                                </tr>
                                <tr>
                                    <td  >300 - 399</td>
                                    <td  >$85.48</td>
                                    <td  >$56.48</td>
                                    <td  >$14.43</td>
                                    <td  >Free Shipping</td>
                                </tr>
                                <tr>
                                    <td>400 and above</td>
                                    <td>21.75% of the order value</td>
                                    <td>14.5% of the order value</td>
                                    <td>4.35% of the order value</td>
                                    <td>Free Shipping</td>
                                </tr>
                            </tbody>
                        </table>
                        <h5>Got question? Just give us a call, anytime.</h5>
                        <div className="d-flex justify-content-between mb-5">
                            <div className="">
                                <h6>USA/CANADA</h6>
                                <a href="tel:1800-580-4489">1800-580-4489</a> / <a href="mailto:sales@bannerbuzz.com">sales@bannerbuzz.com</a>
                            </div>
                            <div className="">
                                <h6>United Kingdom</h6>
                                <a href="tel:020-3514-3788">020-3514-3788 </a> / <a href="mailto:sales@bannerbuzz.co.uk">sales@bannerbuzz.co.uk</a>
                            </div>
                            <div className="">
                                <h6>Australia</h6>
                                <a className='' href="tel:+61 283104315">+61 283104315</a> / <a href="mailto:sales@bannerbuzz.com.au">sales@bannerbuzz.com.au</a>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary"> Got it. Place order. </button>
                        <p>Prices mentioned are in USD. Your local taxes and duties may still be applicable.</p>
                    </div>
                    <div className='col-4'>
                        <h6 className='mt-5'>All about shipping to Finland</h6>
                        <hr />
                        <ul>
                            <li>All international orders will be shipped via UPS or FedEx with a two-day international
                                priority shipping mode.</li>
                            <li>In case we do not produce a product locally, it will be shipped from one of our own
                                manufacturing facilities or from our partner. In all cases product specs remain exactly the
                                same.</li>
                            <li>We have set up our shipping accounts, where we will be paying customs wherever applicable,
                                but we will not be responsible for any additional local duties or taxes.</li>
                            <li>Design Print Banner will not be responsible for any delays caused by shipping carrier or
                                local authorities.</li>
                            <li>For the customer who pays with paypal e-check, orders will be shipped after the payment is
                                clear.</li>
                            <li>We accept payment in USD and we are not responsible for any additional fees or charges by
                                your bank or credit card company.</li>
                            <li>We follow US holiday-schedule. Please add US holidays when calculating delivery dates.</li>
                        </ul>
                    </div>
                    <div className='d-flex flex-wrap text-center'>
                        <div className='w-124 me-2'>
                            <img alt='country-img' src={cu1} />
                            <p>Finland</p>
                        </div>
                        <div className='w-124 me-2'>
                            <img alt='country-img' src={cu2} />
                            <p>Finland</p>
                        </div>
                        <div className='w-124 me-2'>
                            <img alt='country-img' src={cu3} />
                            <p>Finland</p>
                        </div>
                        <div className='w-124 me-2'>
                            <img alt='country-img' src={cu4} />
                            <p>Finland</p>
                        </div>
                        <div className='w-124 me-2'>
                            <img alt='country-img' src={cu5} />
                            <p>Finland</p>
                        </div>
                        <div className='w-124 me-2'>
                            <img alt='country-img' src={cu6} />
                            <p>Finland</p>
                        </div>
                        <div className='w-124 me-2'>
                            <img alt='country-img' src={cu7} />
                            <p>Finland</p>
                        </div>
                        <div className='w-124 me-2'>
                            <img alt='country-img' src={cu8} />
                            <p>Finland</p>
                        </div>
                        <div className='w-124 me-2'>
                            <img alt='country-img' src={cu9} />
                            <p>Finland</p>
                        </div>
                        <div className='w-124 me-2'>
                            <img alt='country-img' src={cu10} />
                            <p>Finland</p>
                        </div>
                        <div className='w-124 me-2'>
                            <img alt='country-img' src={cu11} />
                            <p>Finland</p>
                        </div> <div className='w-124 me-2'>
                            <img alt='country-img' src={cu12} />
                            <p>Finland</p>
                        </div>
                        <div className='w-124 me-2'>
                            <img alt='country-img' src={cu13} />
                            <p>Finland</p>
                        </div>
                        <div className='w-124 me-2'>
                            <img alt='country-img' src={cu14} />
                            <p>Finland</p>
                        </div>
                        <div className='w-124 me-2'>
                            <img alt='country-img' src={cu15} />
                            <p>Finland</p>
                        </div>
                        <div className='w-124 me-2'>
                            <img alt='country-img' src={cu16} />
                            <p>Finland</p>
                        </div>
                        <div className='w-124 me-2'>
                            <img alt='country-img' src={cu17} />
                            <p>Finland</p>
                        </div>
                        <div className='w-124 me-2'>
                            <img alt='country-img' src={cu18} />
                            <p>Finland</p>
                        </div>
                        <div className='w-124 me-2'>
                            <img alt='country-img' src={cu19} />
                            <p>Finland</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Country