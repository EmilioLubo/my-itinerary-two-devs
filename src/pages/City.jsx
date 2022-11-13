import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Detail } from '../components/Detail'
import { Itinerary } from '../components/Itinerary'
import axios from 'axios'
import apiUrl from '../url'

export const City = () => {

    let [city, setCity] = useState([])
    let {id} = useParams()

    useEffect(() => {
        axios.get(`${apiUrl}/cities/${id}`)
            .then(res => setCity(res.data.response))
            .catch(err => err.message)
    },[])

  return (
    <div className='w-100 bg-city'>
        <h1 className='text-center'>City detail</h1>
        <div>
            <Detail name={city.name} photo={city.photo} continent={city.continent} population={'Population: ' + new Intl.NumberFormat().format(city.population)}/>
            <Itinerary/>
        </div>
        <div className='flex j-center mt-2 mb-2'>
            <button className='btn'>Comments</button>
        </div>
    </div>
  )
}