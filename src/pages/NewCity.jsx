import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const NewCity = () => {

    let [selectDefault, setSelectDefault] = useState('')
    let navigate = useNavigate()

    let submit = (e) =>{
        e.preventDefault()
        let photo = e.target.photo.value || '/img/no-image.png'
        let newCity = {
            name: e.target.name.value,
            continent: e.target.continent.value,
            photo: photo,
            population: e.target.population.value,
        }
        /* localStorage.setItem('new city', JSON.stringify(newCity)) */
        axios.post('http://localhost:8080/api/cities', newCity)
        navigate('/cities')
    }
    let handleSelect = (e) => {
        setSelectDefault(e.target.value)
    }

  return (
    <div className='w-100 h-75 flex f-column g-3 new-div'>
        <h1 className="text-center">New City</h1>
        <form className='new-form flex f-column g-1 p-5 fs-3' onSubmit={submit}>
            <input className="fs-2" type="text" name='name' placeholder='Enter city name...' required/>
            <select className="fs-2" name='continent' value={selectDefault} onChange={handleSelect} required>
                <option disabled value={''}>Select a continent</option>    
                <option value="Africa">Africa</option>
                <option value="Antartica">Antartica</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value="Oceania">Oceania</option>
            </select>
            <input className="fs-2" type="number" name="population" min={1} placeholder='Enter city population...' required/>
            <input className="fs-2" type='url' name="photo" placeholder='Enter city URL image'/>
            <div className='new-buttons flex j-between'>
                <input className='w-50 fs-2' type="reset" value="Clear Form" />
                <input className='w-50 fs-2' type="submit" value="Submit" />
            </div>
        </form>
    </div>
  )
}
