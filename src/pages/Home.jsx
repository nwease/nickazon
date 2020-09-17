import React from 'react';
import '../css/Home.css';
import Product from '../components/Product';

const Home = () => {
    return (
        <div className='home'>
           <div className='home__container'>
               <img className='home__image'
                    src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB406302419_.jpg'
                    alt='Prime'
               />

               <div className='home__row'>
                   <Product
                       id='65626549'
                       title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback – 6 Oct. 2011'
                       price={19.99}
                       image='https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg'
                       rating={3}
                   />

                   <Product
                       id='54712564'
                       title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
                       price={969.00}
                       image='https://m.media-amazon.com/images/I/816ctt5WV5L._AC_UY218_.jpg'
                       rating={8}
                   />
               </div>

               <div className='home__row'>
                   <Product
                       id='65656595'
                       title='Samsung Galaxy Tab A 10.1-Inch 32 GB Wi-Fi - Black'
                       price={159.00}
                       image='https://m.media-amazon.com/images/I/81QEX5ZawXL._AC_UY218_.jpg'
                       rating={5}
                   />

                   <Product
                       id='35565825'
                       title='Death of Kings (The Last Kingdom Series, Book 6)'
                       price={7.49}
                       image='https://m.media-amazon.com/images/I/511kDYPx1TL._SY346_.jpg'
                       rating={4}
                   />

                   <Product
                       id='547125641'
                       title='Woodford Reserve Bourbon Whiskey, 70 cl'
                       price={35.00}
                       image='https://images-na.ssl-images-amazon.com/images/I/81NLa8DcSwL._AC_SX522_.jpg'
                       rating={3}
                   />
               </div>

               <div className='home__row'>
                   <Product
                       id='65626565'
                       title='Samsung LS34J550WQUXEN 34" Ultra Wide LED Monitor - WQHD 3440x1440, Freesync, 2 x HDMI, DisplayPort'
                       price={350.00}
                       image='https://images-na.ssl-images-amazon.com/images/I/81VoHkKTTBL._AC_SX450_.jpg'
                       rating={5}
                   />
               </div>
           </div>
        </div>
    );
};

export default Home;
