import React from 'react'

export const Card = ({name, photo, description}) => {

    return (
        <div>
        <div className='card1 '>
            <img className='img ' src={photo} alt={name} height="250" />
            <article className='card-body'>
                <h4 className='text-center'>{name}</h4>
                <p className='text-center'>{description}</p>
            </article>
        </div>
        </div>
      )
    }
