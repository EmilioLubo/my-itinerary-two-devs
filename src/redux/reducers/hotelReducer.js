import { createReducer } from "@reduxjs/toolkit";
import hotelsActions from "../actions/hotelsAction";

const initialState = {
    hotel:[]
}

const hotelReducer = createReducer(initialState,(hotel)=>{
    hotel.addCase(hotelsActions.getHotels.fulfilled,(state,action)=>{
        console.log(action.payload)
        return {...state,hotel:action.payload.hotels}
    })
    hotel.addCase(hotelsActions.getHotelsByName.fulfilled,(state,action)=>{
        return {...state,hotel:action.payload.hotels}
    })
    hotel.addCase(hotelsActions.getHotelByFilter.fulfilled,(state,action)=>{
        return {...state,hotel:action.payload.hotels}
    })
})

export default hotelReducer