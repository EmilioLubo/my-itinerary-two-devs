import React from 'react'

export const Activity = ({name, photo, description, price, duration}) => {
  return (
    <div className='act-card flex f-column g-1'>
        <img className='act-img' src={photo} alt={name} />
        <h3 className='text-center'>{name}</h3>
        <p>{description}</p>
        <p>Duration: {duration} hs.</p>
        <p>Price: $ {price.toFixed(2)}</p>
    </div>
  )
}