import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import apiUrl from '../../url'

const getItineraryReactions = createAsyncThunk('getItineraryReactions', async(itId) => {
    try {
        let res = await axios.get(`${apiUrl}/reactions?itineraryId=${itId}`)
        return {
            reactions: res.data.response
        }
    } catch (error) {
        return{
            error: 'Error'
        }
    }
})
const getMyReactions = createAsyncThunk('getMyReactions', async(id) => {
    try {
        let res = await axios.get(`${apiUrl}/reactions?userId=${id}`)
        return {
            reactions: res.data.response
        }
    } catch (error) {
        return{
            error: 'Error'
        }
    }
})
const updateReactions = createAsyncThunk('updateReactions', async({token, name, itId}) => {
    let headers = {headers: {'Authorization': `Bearer ${token}`}}
    try {
        let res = await axios.put(`${apiUrl}/reactions?name=${name}&itineraryId=${itId}`, null, headers)
        return {
            reaction: res.data.response
        }
    } catch (error) {
        return{
            error: 'Error'
        }
    }
})
const deleteReaction = createAsyncThunk('deleteReaction', async({token, itId}) => {
    let headers = {headers: {'Authorization': `Bearer ${token}`}}
    try {
        let res = await axios.put(`${apiUrl}/reactions/${itId}`, null, headers)
        return {
            reaction: res.data.response
        }
    } catch (error) {
        return{
            error: 'Error'
        }
    }
})

const reactionsActions = {
    getItineraryReactions,
    getMyReactions,
    updateReactions,
    deleteReaction
}
export default reactionsActions