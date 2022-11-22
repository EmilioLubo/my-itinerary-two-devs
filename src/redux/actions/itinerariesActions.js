import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import apiUrl from '../../url'

const getUserItineraries = createAsyncThunk('getUserItineraries', async(userId) => {
    try {
        let res = axios.get(`${apiUrl}/itineraries?userId=${userId}`)
        return{
            userItineraries: (await res).data.response
        }
    } catch (error) {
        return{
            error: 'Error'
        }
    }
})
const deleteItinerary = createAsyncThunk('deleteItinerary', async(itineraryId) => {
    try {
        const res = await axios.delete(`${apiUrl}/itineraries/${itineraryId}`)
        return{
            _id: res.data.response._id
        }
    } catch (error) {
        return {
            error: 'Error'
        }
    }
})
const itinerariesActions = {
    getUserItineraries,
    deleteItinerary
}
export default itinerariesActions