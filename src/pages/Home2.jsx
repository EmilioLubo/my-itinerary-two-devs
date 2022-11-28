import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Carousel from '../components/Carousel'
import citiesActions from '../redux/actions/citiesActions'
import hotelsActions from '../redux/actions/hotelsAction'

export default function Home2() {

  return (
    <div className='min-h w-100 flex align-center j-center carousel-container'>
            <Carousel />
    </div>
  )
}