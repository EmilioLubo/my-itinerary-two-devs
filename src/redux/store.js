import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "./reducers/hotelReducer";
import citiesReducer from "./reducers/citiesReducer";

export const store = configureStore({
    reducer:{
                hotelReducer,
                citiesReducer
            }
})