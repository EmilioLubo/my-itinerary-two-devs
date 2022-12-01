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

const reactionsActions = {
    getItineraryReactions,
    updateReactions
}
export default reactionsActions