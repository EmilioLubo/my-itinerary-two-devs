import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import apiUrl from '../../url'

const getCities = createAsyncThunk('getCities', async() => {
    try {
        const res = await axios.get(`${apiUrl}/cities`)
        return {
            cities: res.data.response
        }
    } catch (err) {
        return {
            error: 'Error'
        }
    }
})
const citiesActions = {
    getCities
}

export default citiesActions