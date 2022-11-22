import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from '../../url'

let getHotels = createAsyncThunk('getHotels',async()=>{
    try {
        let res = await axios.get(`${apiUrl}/hotels`)
        return{
            hotels:res.data.response
        }
    } catch (err) {
        return{
            error: 'Error'
        }
    }
})

let getHotelsByName = createAsyncThunk('getHotelsByName',async(nameh)=>{
    try {
        let res = await axios.get(`${apiUrl}/hotels?name=${nameh}`)
        return{
            hotels:res.data.response
        }
    } catch (err) {
        return {
            error: 'Error'
        }
    }
    
})

let getHotelByFilter = createAsyncThunk('getHotelByFilter',async(filter)=>{
    try{
        let res = await axios.get(`${apiUrl}/hotels?name=${filter.nameh}&order=${filter.order}`)
        return{
            hotels:res.data.response
        }
    } catch(err){
        return {
            error: 'Error'
        }
    }
})

const hotelsActions = {
    getHotels,
    getHotelsByName,
    getHotelByFilter
}

export default hotelsActions