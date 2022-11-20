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
const getFilteredCities = createAsyncThunk('getFilteredCities', async(filter) => {
    try {
        let searchQuery = filter.name
        let checkQuery = filter.continent.join('&continent=')
        const res = await axios.get(`${apiUrl}/cities?name=${searchQuery}&continent=${checkQuery}`)
        return {
            cities: res.data.response
        }
    } catch (error) {
        return {
            error: 'Error'
        }
    }
})
const citiesActions = {
    getCities,
    getFilteredCities
}

export default citiesActions