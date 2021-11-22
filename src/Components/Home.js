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
                title='2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD Storage) - Space Gray'
                price='₹11000'
                rating={4}
                image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
                />

               <Product 
                id="4903852"
                title='2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD Storage) - Space Gray'
                price='₹11000'
                rating={4}
                image='https://m.media-amazon.com/images/I/81BvxQbA0TL._SY879_.jpg'
                />
            </div>
          </div>
        </div>
      )
    }
}

export default Home