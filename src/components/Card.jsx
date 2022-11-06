import React from 'react'
import { Link } from 'react-router-dom'

export default function Card  ({name, photo, description,id}) {

    return (
        <div>
        <div className='card1 '>
            <img className='img ' src={photo} alt={name} height="250" />
            <article className='card-body'>
                <h4 className='text-center'>{name}</h4>
                <p className='text-center'>{description}</p>
                <Link to={`/cities/${id}`}>View details...</Link>
            </article>
        </div>
        </div>
      )
    }
