import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from '../../url'

let getHotels = createAsyncThunk('getHotels',async()=>{
    let res = await axios.get(`${apiUrl}/hotels`)
    return{
        hotels:res.data.response
    }
})

let getHotelsByName = createAsyncThunk('getHotelsByName',async(name)=>{
    let res = await axios.get(`${apiUrl}/hotels?name=${name}`)
    return{
        hotels:res.data.response
    }
    
})

let getHotelByFilter = createAsyncThunk('getHotelByFilter',async(filter)=>{
    let res = await axios.get(`${apiUrl}/hotels?name=${filter.name}&order=${filter.order}`)
    return{
        hotels:res.data.response
    }
})

const hotelsActions = {
    getHotels,
    getHotelsByName,
    getHotelByFilter
}

export default hotelsActions