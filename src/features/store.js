import { configureStore } from "@reduxjs/toolkit";
import  slideReducer from "./slide/slideSlice";

export  const store = configureStore({
 reducer : {
    "slider" : slideReducer,
}
});