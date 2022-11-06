import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Detail } from '../components/Detail'
import { ShowsH } from '../components/ShowsH'


export const Hotel = () => {

    let [hotel, setHotel] = useState([])
    let {id} = useParams()



    let dato = async()=>{
        let res = await fetch('/data/hotels.json')
        res = await res.json()
        res = res.hotels
        res = setHotel(res.find(el=> el.id == parseInt(id)))
    }

    useEffect(()=>{
        dato()
    },[])



  return (
    <div className='w-100'>
        <h1 className='text-center'>shows detail</h1>
        <div>
            <Detail name={hotel.name} photo={hotel.photo} continent={hotel.capacity} population={new Intl.NumberFormat().format(hotel.cityid)}/>
            <ShowsH id={hotel.id}/>
        </div>
        <div className='flex j-center mb-2'>
            <button className='btn'>Comments</button>
        </div>
    </div>
  )
}