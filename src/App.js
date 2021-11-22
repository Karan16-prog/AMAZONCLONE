import './App.css';
import Home from './Components/Home.js';
import Header from './Components/Header.js';
import Login from './Components/login.js';
import {auth} from './Components/firebase';
import {useStateValue} from './Components/StateProvider.js';
import Checkout from './Components/Checkout.js';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import React, { Component } from 'react';
import { useState, useEffect } from 'react';

function App(){

     const [{}, dispatch] = useStateValue(); 
     useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []); 


      return(
            <Router basename={process.env.PUBLIC_URL}>
                 
                  <Switch>
                        <Route path="/login">
                              <Login />
                        </Route>
                        <Route exact path='/'>
                              <Header/>
                              <Home/>     
                        </Route>
                        <Route path="/checkout">
                              <Checkout />
                        </Route>
                  </Switch>
            </Router>
      )
}


export default App;
