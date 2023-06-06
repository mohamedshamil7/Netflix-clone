import { createSlice } from "@reduxjs/toolkit";

const genereSlice=createSlice({
    name:'genereId',
    initialState:{showall:false},
    reducers:{
        showAll:(state)=>{
            state.showall = !state.showall
        },

    }
})

export const {showAll} = genereSlice.actions;
export default genereSlice.reducer