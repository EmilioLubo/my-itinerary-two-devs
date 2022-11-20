import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "./reducers/hotelReducer";
import citiesReducer from "./reducers/citiesReducer";
import filterCitiesReducer from "./reducers/filterCitiesReducer";

export const store = configureStore({
    reducer:{
                hotelReducer,
                citiesReducer,
                filterCitiesReducer
            }
})