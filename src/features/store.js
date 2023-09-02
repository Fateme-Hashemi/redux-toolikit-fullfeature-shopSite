import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "./slide/slideSlice";
import productsReducer from "./Products/ProductsSlice";
import cartReducer from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    "slider": slideReducer,
    "products": productsReducer,
    "cart": cartReducer,
  },
});
