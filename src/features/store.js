import { configureStore } from "@reduxjs/toolkit";
import  slideReducer from "./slide/slideSlice";
import  productsReducer  from "./Products/ProductsSlice";

export  const store = configureStore({
 reducer : {
    "slider" : slideReducer,
    "products" : productsReducer,
}
});