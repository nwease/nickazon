import React from 'react';
import '../css/Product.css'
import {useStateValue} from '../Provider';

const Product = ({title, image, price, rating, id}) => {

    const [{basket}, dispatch] = useStateValue();

    console.log('This is the basket >>>', basket)

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

    return (
        <div className='product'>
            <div className='product__information'>
                <p>
                    {title}
                </p>

                <p className='product__price'>
                    <small>
                        $
                    </small>

                    <strong>
                        {price}
                    </strong>
                </p>

                <div className='product__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <span>
                                🌟
                            </span>
                    ))}
                </div>
            </div>

            <img
                src={image}
                alt='The Lean Startup'
            />

            <button onClick={addToBasket}>
                Add to Basket
            </button>
        </div>
    );
};

export default Product;
