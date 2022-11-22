import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "./reducers/hotelReducer";
import citiesReducer from "./reducers/citiesReducer";
import filterCitiesReducer from "./reducers/filterCitiesReducer";
import filterHotelsReducer from "./reducers/filterHotelsReducer";
import itinerariesReducer from "./reducers/itinerariesReducer";

export const store = configureStore({
    reducer:{
                hotelReducer,
                citiesReducer,
                filterCitiesReducer,
                filterHotelsReducer,
                itinerariesReducer
            }
})