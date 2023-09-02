import React from 'react';
import "./App.css";
import { Provider } from 'react-redux';
import {store} from "../src/features/store"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//components
import Main from "../src/components/Main/Main"
import FilteredProducts from './components/FilteredProducts/FilteredProducts';
import SingleProduct from './components/FilteredProducts/SingleProduct';



const App = () => {


    return (
      <BrowserRouter>
      <Provider store={store}>
        <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/products/:type" component={FilteredProducts} />
      <Route path="/product/:type/:id" component={SingleProduct} />
      </Switch>
      </Provider>
      </BrowserRouter>
    );
};

export default App;