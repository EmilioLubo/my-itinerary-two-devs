import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Detail } from '../components/Detail'
import { ShowsH } from '../components/ShowsH'
import axios from 'axios'
import apiUrl from '../url'

export const Hotel = () => {

    let [hotel, setHotel] = useState([])
    let {id} = useParams()

    useEffect(() => {
        axios.get(`${apiUrl}/hotels/${id}`)
            .then(res => setHotel(res.data.response))
            .catch(err => err.message)
    },[])

  return (
    <div className='w-100 bg-hotel'>
        <h1 className='text-center'>Hotel detail</h1>
        <div>
            <Detail  name={hotel.name} photo={hotel.photo} continent={'Capacity: ' + new Intl.NumberFormat().format(hotel.capacity)}   />
            <ShowsH />
        </div>
        <div className='flex j-center mt-2 mb-2'>
            <button className='btn'>Comments</button>
        </div>
    </div>
  )
}