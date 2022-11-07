import React,{useState} from 'react'

export default function NewHotel() {


    let submit = (e) =>{
        e.preventDefault()
        let photo = e.target.photo.value || '/img/no-image.png'
        let newhotel = {
            name: e.target.name.value,
            photo: photo,
            capacity: e.target.capacity.value,
        }
        localStorage.setItem('new city', JSON.stringify(newhotel))
    }

  return (
    <div className='w-100 h-75 flex f-column g-3'>
        <h1 className="text-center">New Hotel</h1>
        <form className='flex f-column g-1 p-5 fs-3' onSubmit={submit}>
            <input className="fs-2" type="text" name='name' placeholder='Enter Hotel name...' required/>
            <input className="fs-2" type="number" name="population" min={1} placeholder='Enter Hotel capacity...' required/>
            <input className="fs-2" type='url' name="photo" placeholder='Enter 3 Hotel URLs image'/>
            <div className='flex j-between'>
                <input className='w-50 fs-2' type="reset" value="Clear Form" />
                <input className='w-50 fs-2' type="submit" value="Submit" />
            </div>
        </form>
    </div>
  )
}