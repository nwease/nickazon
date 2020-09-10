import React from 'react';
import '../css/Product.css'

const Product = () => {
    return (
        <div className='product'>
            <div className='product__information'>
                <p>
                    The Lean Startup
                </p>

                <p className='product__price'>
                    <small>
                        $
                    </small>

                    <strong>
                        19.99
                    </strong>
                </p>

                <div className='product__rating'>
                    <p>
                        *
                    </p>
                </div>
            </div>

            <img
                src='https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg'
                alt='The Lean Startup'
            />

            <button>
                Add to Basket
            </button>
        </div>
    );
};

export default Product;
