import React from 'react';
import '../css/ProductCheckout.css';
import {useStateValue} from '../Provider';

const ProductCheckout = ({id, image, price, rating, title, hideButton}) => {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='productCheckout'>
            <img className='productCheckout__image' src={image} alt='Prop'/>

            <div className='productCheckout__information'>
                <p className='productCheckout__title'>
                    {title}
                </p>

                <p className='productCheckout__price'>
                    <small>
                        $
                    </small>

                    <strong>
                        {price}
                    </strong>
                </p>

                <div className='productCheckout__rating'>
                    {Array(rating)
                        .fill()
                        .map(() => (
                            <span>
                                🌟
                            </span>
                        ))}
                </div>

                {
                    !hideButton && (
                        <button onClick={removeFromBasket}>
                            Remove from Basket
                        </button>
                    )
                }
            </div>
        </div>
    );
};

export default ProductCheckout;
