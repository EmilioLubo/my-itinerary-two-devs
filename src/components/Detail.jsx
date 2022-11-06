import React from 'react'

export const Detail = ({name, photo, continent, population}) => {
  return (
    <div className='flex f-column gap-1 align-center'>
        <img className='detail-img' src={photo} alt={name} />
        <h2>{name}</h2>
        <p>{continent}</p>
        <p>Population: {population}</p>
    </div>
  )
}