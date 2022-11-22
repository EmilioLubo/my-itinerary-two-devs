import React,{useState} from 'react'
import Edit from './Edit'


export default function Carduser  ({name, photo, description,id, erase}) {
    
let [push,setPush]= useState(false)
    return (
        <div>
        <div className='card1'>
            <img className='img ' src={photo} alt={name} height="250" />
            <article className='card-body flex f-column g-1 align-center'>
                <h4 className='text-center'>{name}</h4>
                <p className='text-center'>capacity: {description}</p>
                <div className='flex j-evenly w-100'>
                    <button className='card-button' value={id}  onClick={()=>setPush(!push)}>Edit</button>
                <button className='card-button' value={id} onClick={erase} >Delete</button>
                </div>
                
            </article>
        </div>
        {push?(<Edit id={id} />): ''}
        </div>
    )
}