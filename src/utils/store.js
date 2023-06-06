import {configureStore} from "@reduxjs/toolkit" 
import genereSlice from "./genereSlice"

const store = configureStore({
    reducer:{
        generes:genereSlice
    }
})

export default store