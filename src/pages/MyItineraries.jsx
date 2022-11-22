import React, {useEffect} from 'react'
import CardItineraryUser from '../components/CardItineraryUser'
import { useDispatch, useSelector } from 'react-redux'
import itinerariesActions from '../redux/actions/itinerariesActions'

export const MyItineraries = () => {

    const {userItineraries} = useSelector(state => state.itinerariesReducer)
    const dispatch = useDispatch()
    const {getUserItineraries} = itinerariesActions

    useEffect(() => {
        dispatch(getUserItineraries("636d210297606439046194bb"))
    }, [])

  return (
    <div className="w-100 min-h flex j-evenly wrap g-5 p-5 bg-hotel">
        <div className="w-100">
                <h1 className="text-center">My itineraries</h1>
            </div>
        {
            userItineraries.length > 0 ?
            userItineraries.map(el => {
                return (
                    <CardItineraryUser key={el._id} id={el._id} name={el.name} photo={el.photo} description={el.description} price={el.price.toFixed(2)} duration={el.duration} />
                )
            }) :
            <h2 className='text-center'>No Cities</h2>
        }
      
    </div>
  )

}