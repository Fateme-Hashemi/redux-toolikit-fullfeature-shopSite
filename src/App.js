import React from 'react';
import "./App.css";
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//components
import Main from "../src/components/Main/Main"
import FilteredProducts from './components/FilteredProducts/FilteredProducts';
import SingleProduct from './components/FilteredProducts/SingleProduct';
import LoginCard from './components/Login/LoginCard';



const App = () => {

  const user = useSelector((state) => state.user.user)
  const {authUser} = user;
  console.log("user", user)
  console.log("auth", authUser)


    return (
      <BrowserRouter>
     
      <Switch>
      <Route exact path="/" component={authUser? Main : LoginCard} />
      <Route path="/products/:type" component={FilteredProducts} />
      <Route path="/product/:type/:id" component={SingleProduct} />
      </Switch>
    
      </BrowserRouter>
    );
};

export default App;