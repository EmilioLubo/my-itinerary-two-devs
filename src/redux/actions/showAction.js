import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../url";

const getShow = createAsyncThunk('getShow',async(id)=>{
    try{
        let res = await axios.get(`${apiUrl}/shows?userID=${id}`)
        return {
            show: res.data.response
        }
    }catch (error) {
        return{
            error: 'Error'
        }
    }
})

const deleteShow = createAsyncThunk('deleteShow',async(id)=>{
    try{
        let res = await axios.delete(`${apiUrl}/shows/${id}`)
        return {
            _id: res.data.response._id
        }
    }catch (error) {
        return{
            error: 'Error'
        }
    }
})

const showsActions = {
    getShow,
    deleteShow
}

export default showsActions