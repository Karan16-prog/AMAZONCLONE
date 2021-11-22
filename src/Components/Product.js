import React, {Component} from "react";
import './Product.css';
import StarRatings from 'react-star-ratings';
import {useStateValue} from './StateProvider.js';


function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return(
    <div className="product">
      <div class='product_header'>
        <h4 className="product__title">{title}</h4>
        <p className="product__price">{price}</p>
      {/*  <div className="product__stars">{props.stars}</div> */}
      <div className='product__head'>
        <StarRatings rating = {rating} starRatedColor="yellow" numberOfStars={5} starDimension='15px' starSpacing='2px' />
      </div>
      </div>
        <img src={image} alt="product__image" className='product__image'/>
        <button onClick={addToBasket} class='product__button'>Add To Basket</button>
    </div>
    )
}




export default Product;