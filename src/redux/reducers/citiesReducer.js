import {createReducer} from '@reduxjs/toolkit'
import citiesActions from '../actions/citiesActions'

const {getCities, getFilteredCities} = citiesActions
const initialState = {
    cities: [],
    load: false,
    error: false
}

const citiesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getCities.pending, (state, action) => {
            return {
                ...state,
                load: true,
                error: false, 
            }
        })
        .addCase(getCities.fulfilled, (state, action) => {
            return {
                ...state,
                load: false,
                error: false,
                ...action.payload
            }
        })
        .addCase(getCities.rejected, (state, action) => {
            return {
                ...state,
                load: false,
                error: true, 
            }
        })
        .addCase(getFilteredCities.pending, (state, action) => {
            return {
                ...state,
                load: true,
                error: false, 
            }
        })
        .addCase(getFilteredCities.fulfilled, (state, action) => {
            return {
                ...state,
                load: false,
                error: false,
                ...action.payload
            }
        })
        .addCase(getFilteredCities.rejected, (state, action) => {
            return {
                ...state,
                load: false,
                error: true, 
            }
        })
})
export default citiesReducer