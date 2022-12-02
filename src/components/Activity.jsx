import React,{useState} from 'react'
import Comments from './Comments'

export const Activity = ({name, photo, description, price, duration,id}) => {
  let [push,setPush]= useState(false)
  return (
    <>
    <div className='act-card flex f-column g-1'>
        <img className='act-img' src={photo} alt={name} />
        <h3 className='text-center'>{name}</h3>
        <p>{description}</p>
        <p>{duration}</p>
        <p>Price: $ {price.toFixed(2)}</p>
        <button className='btn' onClick={()=>setPush(!push)}>Comments</button>
    </div>
    <div className='flex j-center g-1 mt-2 pb-2 w-100'>
            {push?(<Comments show={id} />): ''}
        </div>
    </>
  )
}