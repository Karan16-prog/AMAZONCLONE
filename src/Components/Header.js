import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Flags from 'country-flag-icons/react/3x2';
import './Header.css';
import { Link } from "react-router-dom";
import {useStateValue} from "./StateProvider.js";
import { auth } from "./firebase";

const Header = () => {
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }


    return(
        <div className="header">
            <Link to='/'>
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" className="header__logo" />
            </Link>

            <div className= "header__search">
                <input type="text" className = "header__searchInput" />
                <SearchIcon className = "header__searchIcon"/>
            </div>
          
            
            <div className="header__nav">
                
                <Link to={!user && '/login'}>
                <div onClick={handleAuthenticaton} className="header__option">
                    <span className="header__optionOne">{!user ? 'Guest' : user.email}</span>
                    <span className="header__optionTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionOne">Returns</span>
                    <span className="header__optionTwo">& Orders</span>
                </div>

                 <div className="header__option">
                    <span className="header__optionOne">Your</span>
                    <span className="header__optionTwo">Prime</span>
                </div>

                <Link to='/checkout'>
                    <div className="header__cart">
                        <ShoppingBasketIcon className="header__cartIcon" />
                        <span className="header__cartNumber header__optionTwo">
                            {basket.length}
                        </span>
                    </div>
                </Link>
            </div>
           
        </div>
    )
}

export default Header;


