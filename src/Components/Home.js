import React, {Component} from "react";
import {Typography} from '@material-ui/core';
import Image from './amazonHomePage.jpg';
import Product from './Product.js';

import './Home.css';
class Home extends Component {
    render(){
      return (
        <div className='home'>
          <div className="home__container">
            <img src={Image} alt="background image" className="home__image" />
            <div className="home__productContainer">
              <Product 
                id="4903850"
                title="2019 Xbox Series S - 512GB SSD Console with Wireless Controller - IN Version with EU Power Cable"
                price={35000}
                rating={4.5}
                image='https://m.media-amazon.com/images/I/61-x29sqlpS._AC_UY436_QL65_.jpg'
                />

               <Product 
                id="4903852"
                title='2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD Storage) - Space Gray'
                price={85000}
                rating={4}
                image='https://m.media-amazon.com/images/I/71TPda7cwUL._AC_UY436_QL65_.jpg'
                />
            </div>

            <div className="home__productContainer">
              <Product 
                id="4903850"
                title="2019 Xbox Series S - 512GB SSD Console with Wireless Controller - IN Version with EU Power Cable"
                price={35000}
                rating={4.5}
                image='https://m.media-amazon.com/images/I/61-x29sqlpS._AC_UY436_QL65_.jpg'
                />

               <Product 
                id="4903852"
                title='2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD Storage) - Space Gray'
                price={85000}
                rating={4}
                image='https://m.media-amazon.com/images/I/71TPda7cwUL._AC_UY436_QL65_.jpg'
                />

              <Product 
                id="4903850"
                title="2019 Xbox Series S - 512GB SSD Console with Wireless Controller - IN Version with EU Power Cable"
                price={35000}
                rating={4.5}
                image='https://m.media-amazon.com/images/I/61-x29sqlpS._AC_UY436_QL65_.jpg'
                />  
              
            </div>

            <div className="home__productContainer">
               <Product 
                id="4903852"
                title='2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD Storage) - Space Gray'
                price={85000}
                rating={4}
                image='https://m.media-amazon.com/images/I/71TPda7cwUL._AC_UY436_QL65_.jpg'
                />
            </div>
              



          </div>
        </div>
      )
    }
}

export default Home