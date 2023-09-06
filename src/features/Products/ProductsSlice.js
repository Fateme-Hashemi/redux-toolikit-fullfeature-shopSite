import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";
import { useHistory } from "react-router-dom";
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
        genderFilter(state, action) {
            try {
              const gender = state.filteredProducts.filter(
                (product) => product.gender === action.payload
              );
              state.error = false;
              state.filteredProducts = gender;
              const oneGender = gender.length > 0;
              if (oneGender) {
                state.error = false;
                const saveState = JSON.stringify(gender);
                localStorage.setItem('filteredData', saveState);
             
              } else {
                state.error = true;
                state.filteredProducts = [];
              }
            } catch (err) {
              return err;
            }
          },
          
        sortByPrice (state, action) {

            try{
                const price = state.filteredProducts.sort((a,b) =>
                 a.price > b.price ? -1 : 1);

                 state.filteredProducts = price;
                 let count = price.length;
                 //if there is just one product
                 if(count > 1)  {
                    const noError = false;
                    state.error = noError;
                    if(!noError) {
                        state.filteredProducts = price;
                        const saveState = JSON.stringify(price)
                        localStorage.setItem("filteredData", saveState)
                    }
                 }else {
                    state.error = true;
                    state.filteredProducts = []
                 }
            }catch (err) {
                return err
            }
        },
        filterByColor (state, action) {
            try{
                const color = state.filteredProducts.filter((product)=> product.color.includes(action.payload))
                state.filteredProducts = color;
                state.error= false

                if(color.length <=0) {
                    //if there is no color in product
                    state.error = true
                    state.filteredProducts = []
                }else {
                    state.error = false;
                    state.filteredProducts = color;
                    const saveState = JSON.stringify(color)
                    localStorage.setItem("filteredData", saveState)
                }
            }
            catch(err) {
                return err
            }
        },
     filterBySize(state, action) {
      try {
        const size = state.filteredProducts.filter((product) =>
          product.size.includes(action.payload)
        );

        state.error = false;
        state.filteredProducts = size;
        if (size.length <= 0) {
          state.error = true;
          state.filteredProducts = [];
        } else {
          state.error = false;
          state.filteredProducts = size;
          const saveState = JSON.stringify(size);
          localStorage.setItem("filteredData", saveState);
        }
      } catch (err) {
        return err;
      }
    },
    sortByLowestPrice (state, action) {
        try{
            const lowPrice = state.filteredProducts.sort((a,b)=> 
            b.price>a.price ? -1 :1)

            state.error=false;
            state.filteredProducts = lowPrice;
            let count = lowPrice.length;
            //if there is just one product
            if(count > 1)  {
               const noError = false;
               state.error = noError;
               if(!noError) {
                   state.filteredProducts = lowPrice;
                   const saveState = JSON.stringify(lowPrice)
                   localStorage.setItem("filteredData", saveState)
               }
            }else {
               state.error = true;
               state.filteredProducts = []
            }

        }
        catch(err) {
            return err
        }
    }
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
