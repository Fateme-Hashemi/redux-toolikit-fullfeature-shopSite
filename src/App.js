import React from 'react';
import "./App.css";
import { Provider } from 'react-redux';
import {store} from "../src/features/store"

//components
import Main from "../src/components/Main/Main"



const App = () => {


    return (

      <Provider store={store}>
      <Main />

      </Provider>
    );
};

export default App;