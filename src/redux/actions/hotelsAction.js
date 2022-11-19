import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from '../../url'

let getHotels = createAsyncThunk('getHotels',async()=>{
    let data = await axios.get(`${apiUrl}/hotels`)
    return{
        hotels:data.data.response
    }
})

let getHotelsByName = createAsyncThunk('getHotelsByName',async(name)=>{
    let data = await axios.get(`${apiUrl}/hotels?name=${name}`)
    return{
        hotels:data.data.response
    }
    
})

let getHotelByFilter = createAsyncThunk('getHotelByFilter',async(filter)=>{
    let data = await axios.get(`${apiUrl}/hotels?name=${filter.name}&order=${filter.order}`)
    return{
        hotels:data.data.response
    }
})

const hotelsActions = {
    getHotels,
    getHotelsByName,
    getHotelByFilter
}

export default hotelsActions