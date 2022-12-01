import React, {useEffect, useState} from 'react'
import { Reaction } from './Reaction'
import { useDispatch, useSelector } from 'react-redux'
import reactionsActions from '../redux/actions/reactionsActions'

export const Activity = ({itId, name, photo, description, price, duration}) => {

  const [itineraryReactions, setItieneraryReactions] = useState()
  const {id} = useSelector(state => state.userReducer)
  const [updated, setUpdated] = useState(false)
  const dispatch = useDispatch()
  const {getItineraryReactions} = reactionsActions

  
  useEffect(() => {
    dispatch(getItineraryReactions(itId))
    .then(res => setItieneraryReactions(res.payload.reactions))
  },[updated])
  
  let reload = () =>{
    setUpdated(!updated)
  }
  
  return (
    <div className='act-card flex f-column g-1'>
        <img className='act-img' src={photo} alt={name} />
        <h3 className='text-center'>{name}</h3>
        <p>{description}</p>
        <p>{duration}</p>
        <p>Price: $ {price.toFixed(2)}</p>
        <div className='flex j-evenly gap-1'>
          {
            itineraryReactions ? 
            itineraryReactions.map(el => {
              return <Reaction key={el._id} reload={reload} name={el.name} userId={el.userId} itId={itId} icon={el.userId.includes(id) ? el.icon : el.iconBack}/>
            }) :
            <></>
          }
        </div>
    </div>
  )
}