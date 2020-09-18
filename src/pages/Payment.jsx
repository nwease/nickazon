import React from 'react';
import '../css/Payment.css';
import {useStateValue} from '../Provider';
import ProductCheckout from '../components/ProductCheckout';

const Payment = () => {

    const [{basket, user}, dispatch] = useStateValue();


    return (
        <div className='payment'>
            <div className='payment__container'>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>
                            Delivery Address
                        </h3>

                        <div className='payment__address'>
                            <p>
                                {user?.email}
                            </p>

                            <p>
                                567 Nick Straat
                            </p>

                            <p>
                                s-Hertogenbosch, the Netherlands
                            </p>
                        </div>
                    </div>
                </div>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>
                            Review items and delivery
                        </h3>
                    </div>

                    <div className='payment__items'>
                        {
                            basket.map(item => (
                                <ProductCheckout
                                    id={item.id}
                                    image={item.image}
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>
                            Payment Method
                        </h3>
                    </div>

                    <div className='payment__details'>
                        {/*STRIPE*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
