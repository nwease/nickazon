import React from 'react';
import '../css/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import {useStateValue} from '../Provider';

const Header = () => {

    const [{basket}] = useStateValue();

    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className='header__logo'
                    src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    alt='Amazon Logo'
                />
            </Link>

            <div className='header__search'>
                <input className='header__input' type='text'/>

                <SearchIcon className='header__searchIcon'/>
            </div>

            <div className='header__navigation'>
                <Link to='/login'>
                    <div className='header__option'>
                        <span className='header__option1'>
                            Hello,
                        </span>

                        <span className='header__option2'>
                            Sign-in
                        </span>
                    </div>
                </Link>

                <div className='header__option'>
                    <span className='header__option1'>
                        Returns
                    </span>

                    <span className='header__option2'>
                        & Orders
                    </span>
                </div>

                <div className='header__option'>
                    <span className='header__option1'>
                        Your
                    </span>

                    <span className='header__option2'>
                        Prime
                    </span>
                </div>

                <Link to='/checkout'>
                    <div className='header__optionBasket'>
                        <ShoppingBasketIcon/>

                        <span className='header__option2 header__basketCount'>
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;
