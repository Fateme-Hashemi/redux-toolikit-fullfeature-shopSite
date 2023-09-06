import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

 const productsReducer = createSlice({
    name: "products",
    initialState: {
        filteredProducts: JSON.parse(localStorage.getItem('filteredData')) || storeData,
        singleProduct : JSON.parse(localStorage.getItem("singleProduct")) || storeData,
        error: false,
    },
    reducers : {
        filterProducts (state, action) {
            try{
                const filter = storeData.filter((product)=> product.type === action.payload) //action.payload is our button like Hoodie or T-shirt 
                state.filteredProducts = filter;
                state.error = false;
                const saveState = JSON.stringify(filter);
                localStorage.setItem("filteredData", saveState)
              
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
        },
        genderFilter (state, action) {
            try{
                const gender = state.filteredProducts.filter((product)=> product.gender === action.payload);
                state.error = false;
                state.filteredProducts = gender;
                const oneGender = gender.length > 0;
                if (oneGender) {
                    state.error = false;
                    const saveState = JSON.stringify(gender);
                    localStorage.setItem("filteredData", saveState)
                    history.push(`?gender=${action.payload}`);
                }else {
                    state.error = true;
                    state.filteredProducts = [];
                }
            }
            catch(err) {
                return err
            }
        },
   
  },
})


export default productsReducer.reducer;
export const {filterProducts,
     singleProduct, 
     genderFilter,
     sortByPrice, 
     filterByColor, 
     filterBySize,
     sortByLowestPrice
    } = productsReducer.actions;