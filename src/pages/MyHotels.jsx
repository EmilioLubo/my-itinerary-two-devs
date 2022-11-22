import React,{useState,useEffect} from 'react'
import axios from 'axios'
import apiUrl from '../url'


export default function MyHotels() {

 let [hotel, setHotel] = useState([])

    useEffect(() => {
        console.log(hotel);
        axios.get(`${apiUrl}/hotels?name=`)
            .then(res => setHotel(res.data.response))
            .catch(err => err.message)
    },[])
     console.log(hotel)
  return (
    <div>

    </div>
  )
}
