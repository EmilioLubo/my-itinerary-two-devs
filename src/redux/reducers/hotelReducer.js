import { createReducer } from "@reduxjs/toolkit";
import hotelsActions from "../actions/hotelsAction";

const initialState = {
    hotels:[],
    load: false,
    error: false
}

const hotelReducer = createReducer(initialState,(hotel)=>{
    hotel.addCase(hotelsActions.getHotels.pending,(state,action)=>{
        return {...state, load: true, error: false}
    })
    hotel.addCase(hotelsActions.getHotels.fulfilled,(state,action)=>{
        return {...state, load: false, error: false, ...action.payload}
    })
    hotel.addCase(hotelsActions.getHotels.rejected,(state,action)=>{
        return {...state, load: false, error: true}
    })
    hotel.addCase(hotelsActions.getHotelsByName.pending,(state,action)=>{
        return {...state, load: true, error: false}
    })
    hotel.addCase(hotelsActions.getHotelsByName.fulfilled,(state,action)=>{
        return {...state, load: false, error: false, ...action.payload}
    })
    hotel.addCase(hotelsActions.getHotelsByName.rejected,(state,action)=>{
        return {...state, load: false, error: true}
    })
    hotel.addCase(hotelsActions.getHotelByFilter.pending,(state,action)=>{
        return {...state, load: true, error: false}
    })
    hotel.addCase(hotelsActions.getHotelByFilter.fulfilled,(state,action)=>{
        return {...state, load: false, error: false, ...action.payload}
    })
    hotel.addCase(hotelsActions.getHotelByFilter.rejected,(state,action)=>{
        return {...state, load: false, error: true}
    })
})

export default hotelReducer