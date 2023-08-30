import { createSlice } from "@reduxjs/toolkit";
import { sliderData } from "../../assets/data/dummyData";


const initialState = {
    value: 0,
    length: sliderData.length,
};

const slideSlice = createSlice({
    name: "slider",
    initialState,
    reducers: {
        nextSlide(state, action) {
            state.value = action.payload > state.length - 1 ? 0 : action.payload;
            //it goes on from 1 to 4  and then turn back 0 to 1,2,3,4
        },
        prevSlide(state, action) {
            state.value = action.payload < 0 ? state.length - 1 : action.payload;
            //it goes on from 4  to 0 and then start from 4,3,2,1
        },
        dotSlide (state, action) {
            const slide = action.payload;
            state.value = slide
            console.log("dot", slide)
        },
    },
});

export const { prevSlide, dotSlide, nextSlide } = slideSlice.actions;
export default slideSlice.reducer;
