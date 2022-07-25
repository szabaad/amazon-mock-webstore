import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className ='home'>
        <div className='home__container'>
            <img className='home__image' src='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg' alt=''/>

            <div className='home__row'>
                <Product
                    title='1984 Paperback: Nineteen Eighty-Four is a dystopian social science fiction novel by English novelist George Orwell. '
                    price={9.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/61vRzw3F6OL.jpg'
                    rating={5}
                />
                <Product
                    title='Tile Mate (2022) Bluetooth Item Locator, 60m Range, Works with Alexa and Google Home, Compatible with iOS and Android, Black'
                    price={14.99}
                    image='https://m.media-amazon.com/images/I/4161BoDqu3L._AC_SX679_.jpg'
                    rating={4}
                />           
            </div>

            <div className='home__row'>
                <Product
                    title='God of War Ragnarök (PS5)'
                    price={59.95}
                    image='https://m.media-amazon.com/images/I/81f3ZmXx3cL._AC_SL1500_.jpg'
                    rating={5}
                />
                <Product
                    title='Personalised Car Air Freshener Customise photo logo double sided'
                    price={9.99}
                    image='https://m.media-amazon.com/images/I/71JCPRJw1tL._AC_SL1331_.jpg'
                    rating={4}
                />
                <Product
                    title='How to Kill Your Family: THE #1 SUNDAY TIMES BESTSELLER'
                    price={0.99}
                    image='https://m.media-amazon.com/images/I/41jD6y51gUL.jpg'
                    rating={5}
                />

            </div>

            <div className='home__row'>
            <Product
                    title='Norton 360 Deluxe 2022, Antivirus software for 5 Devices and 1-year subscription with automatic renewal, Includes Secure VPN and Password Manager, PC/Mac/iOS/Android, Activation Code by email'
                    price={15.49}
                    image='https://m.media-amazon.com/images/I/81XEKRAX1yS._AC_SL1500_.jpg'
                    rating={5}
                />

            </div>
        </div>
    </div>
  )
}

export default Home