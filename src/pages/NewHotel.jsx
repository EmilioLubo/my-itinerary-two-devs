import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function NewHotel() {
    let navigate = useNavigate()

    let submit = (e) =>{
        e.preventDefault()
        let photo = e.target.photo.value || '/img/no-image.png'

        let newhotel = {
            name: e.target.name.value,
            photo: photo,
            capacity: e.target.population.value,
            cityID:"636d3af27ccd7c6ea97b82e2",
            userID:"636d210297606439046194ba"
        }
        axios.post('http://localhost:8080/api/hotels', newhotel)
            .then(res => {
                console.log(res.data)
                navigate('/hotels')
            })
    }

  return (
    <div className='w-100 h-75 flex f-column g-3 new-div'>
        <h1 className="text-center">New Hotel</h1>
        <form className='new-form flex f-column g-1 p-5 fs-3' onSubmit={submit}>
            <input className="fs-2" type="text" name='name' placeholder='Enter Hotel name...' required/>
            <input className="fs-2" type="number" name="population" min={1} placeholder='Enter Hotel capacity...' required/>
            <input className="fs-2" type='url' name="photo" placeholder='Enter 3 Hotel URLs image'/>
            <div className='new-buttons flex j-between'>
                <input className='w-50 fs-2' type="reset" value="Clear Form" />
                <input className='w-50 fs-2' type="submit" value="Submit" />
            </div>
        </form>
    </div>
  )
}