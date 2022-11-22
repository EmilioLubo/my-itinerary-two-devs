import {createReducer} from '@reduxjs/toolkit'
import itinerariesActions from '../actions/itinerariesActions'

const {getUserItineraries, deleteItinerary} = itinerariesActions
const initialState = {
    userItineraries: [],
    load: false,
    error: false
}

const itinerariesReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(getUserItineraries.pending, (state, action) => {
        return {
            ...state,
            load: true,
            error: false, 
        }
    })
    .addCase(getUserItineraries.fulfilled, (state, action) => {
        return {
            ...state,
            load: false,
            error: false,
            ...action.payload
        }
    })
    .addCase(getUserItineraries.rejected, (state, action) => {
        return {
            ...state,
            load: false,
            error: true, 
        }
    })
    .addCase(deleteItinerary.pending, (state, action) => {
        return {
            ...state,
            load: true,
            error: false, 
        }
    })
    .addCase(deleteItinerary.fulfilled, (state, action) => {
        return {
            ...state,
            load: false,
            error: false,
            userItineraries: state.userItineraries.filter(el => el._id !== action.payload._id)
        }
    })
    .addCase(deleteItinerary.rejected, (state, action) => {
        return {
            ...state,
            load: false,
            error: true, 
        }
    })
})
export default itinerariesReducer