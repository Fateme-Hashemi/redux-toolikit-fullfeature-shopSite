import React from 'react';
import "./App.css";
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//components
import Main from "../src/components/Main/Main"
import FilteredProducts from './components/FilteredProducts/FilteredProducts';
import SingleProduct from './components/FilteredProducts/SingleProduct';

const App = () => {

  const cart = useSelector((state)=> state.cart.cart)
  const price = useSelector((state)=> state.cart.totalPrice)
  const amount = useSelector((state)=> state.cart.totalAmount)

  console.log("cart", cart)
  console.log("price", price)
  console.log("amount" , amount)

    return (
      <BrowserRouter>
     
        <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/products/:type" component={FilteredProducts} />
      <Route path="/product/:type/:id" component={SingleProduct} />
      </Switch>
    
      </BrowserRouter>
    );
};

export default App;