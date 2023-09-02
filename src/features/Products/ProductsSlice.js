import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

 const productsReducer = createSlice({
    name: "products",
    initialState: {
        filteredProducts: JSON.parse(localStorage.getItem('filteredProducts')) || storeData,
        singleProduct : JSON.parse(localStorage.getItem("singleProduct")) || storeData,
    },
    reducers : {
        filterProducts (state, action) {
            try{
                const filter = storeData.filter((product)=> product.type === action.payload) //action.payload is our button like Hoodie or T-shirt 
                state.filteredProducts = filter;
                const saveState = JSON.stringify(filter);
                localStorage.setItem("filteredProducts", saveState)
              
            }
            catch (err) {
                return err
            }
        },
        singleProduct (state, action) {
            const singleCard = storeData.filter((product)=> product.id === action.payload)
            state.singleProduct = singleCard
            const saveState = JSON.stringify(singleCard)
            localStorage.setItem("singleProduct", saveState)
            console.log(singleCard)
        }
    }
    
})


export default productsReducer.reducer;
export const {filterProducts, singleProduct} = productsReducer.actions;
