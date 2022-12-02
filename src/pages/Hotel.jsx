import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Detail } from '../components/Detail'
import { ShowsH } from '../components/ShowsH'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../url'
import Comments from '../components/Comments'

export const Hotel = () => {
    let [push,setPush]= useState(false)
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
        {hotel.name ?
            <div>
                <Detail  name={hotel.name} photo={hotel.photo} continent={'Capacity: ' + new Intl.NumberFormat().format(hotel.capacity)}   />
                <ShowsH />
            </div> :
            <div className='min-h flex j-center align-center'>
                <h2 className='text-center'>There`s no Hotels</h2>
            </div> 
        }
        <div className='flex j-center g-1 mt-2 pb-2'>
            <button className='btn' onClick={()=>setPush(!push)}>Comments</button>
            <Link to={'/hotels'} className='btn'>Go back</Link>
        </div>
        <div className='flex j-center g-1 mt-2 pb-2'>
            {push?(<Comments id={id} />): ''}
        </div>
    </div>
  )
}