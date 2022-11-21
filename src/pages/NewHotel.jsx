import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

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
                if(res.data.success){
                    swal("creado")
                    navigate('/hotels')
                }else{
                    swal({
                        title:"faltan",
                        text:"llena los campos",
                        icon:"warnig"
                    })
                }
                
            })
    }

  return (
    <div className='w-100 h-75 flex f-column g-3 new-div form-log'>
        <h1 className="text-center">New Hotel</h1>
        <form className='new-form flex f-column g-1  fs-3 fw' onSubmit={submit}>
            <label className='inputs flex f-column '>
            <legend>Hotel name</legend>
            <input className="fs-2 " type="text" name='name' min='3' placeholder='Enter Hotel name...' required/></label>
            <label className='inputs flex f-column'>
            <legend>Hotel capacity</legend>
            <input className="fs-2 " type="number" name="population" min='1' placeholder='Enter Hotel capacity...' required/></label>
            <label className='inputs flex f-column'>
            <legend>Urls photos</legend>
                <input className="fs-2 " type='url' name="photo" placeholder='Enter 3 Hotel URLs image'/>
            </label>
           
            <div className='new-buttons flex j-evenly'>
                <input className='w-50 fs-2 btn' type="reset" value="Clear Form" />
                <input className='w-50 fs-2 btn' type="submit" value="Submit" />
            </div>
        </form>
    </div>
  )
}