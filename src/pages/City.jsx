import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Detail } from '../components/Detail'
import { Itinerary } from '../components/Itinerary'

export const City = () => {

    let [city, setCity] = useState([])
    let {id} = useParams()

    useEffect(() => {
        fetch('/data/cities.json')
            .then(res => res.json())
            .then(data => setCity(data.cities.find(el => el.id === parseInt(id))))
    },[])

console.log(city)

  return (
    <div className='w-100'>
        <h1 className='text-center'>City detail</h1>
        <div>
            <Detail name={city.name} photo={city.photo} continent={city.continent} population={new Intl.NumberFormat().format(city.population)}/>
            <Itinerary id={city.id}/>
        </div>
        <div className='flex j-center mb-2'>
            <button className='btn'>Comments</button>
        </div>
    </div>
  )
}