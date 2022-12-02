<<<<<<< HEAD
import React,{useState} from 'react'
import Comments from './Comments'

export const Activity = ({name, photo, description, price, duration,id}) => {
  let [push,setPush]= useState(false)
=======
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
  
>>>>>>> e1c8894145f4546c4b46bdd5d8fd917b60415214
  return (
    <>
    <div className='act-card flex f-column g-1'>
        <img className='act-img' src={photo} alt={name} />
        <h3 className='text-center'>{name}</h3>
        <p>{description}</p>
        <p>{duration}</p>
        <p>Price: $ {price.toFixed(2)}</p>
<<<<<<< HEAD
        <button className='btn' onClick={()=>setPush(!push)}>Comments</button>
=======
        <div className='flex j-evenly gap-1'>
          {
            itineraryReactions ? 
            itineraryReactions.map(el => {
              return <Reaction key={el._id} reload={reload} name={el.name} userId={el.userId} itId={itId} icon={el.userId.includes(id) ? el.icon : el.iconBack}/>
            }) :
            <></>
          }
        </div>
>>>>>>> e1c8894145f4546c4b46bdd5d8fd917b60415214
    </div>
    <div className='flex j-center g-1 mt-2 pb-2 w-100'>
            {push?(<Comments show={id} />): ''}
        </div>
    </>
  )
}