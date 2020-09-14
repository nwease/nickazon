import React from 'react';
import '../css/Product.css'

const Product = ({title, image, price, rating}) => {
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
                        <i className='a-icon a-icon-star a-star-4-5'>
                            *
                        </i>
                    ))}
                </div>
            </div>

            <img
                src={image}
                alt='The Lean Startup'
            />

            <button>
                Add to Basket
            </button>
        </div>
    );
};

export default Product;
