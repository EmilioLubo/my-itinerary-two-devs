import React, {useRef, useState} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const NewItinerary = () => {

    let formRef = useRef()
    let selectRef = useRef()
    let [selectDefault, setSelectDefault] = useState('')
    let {cities} = useSelector(state => state.citiesReducer)

    let handleSelect = (e) =>{
        setSelectDefault(selectRef.current.value)
    }
    let submitHandler = () => {
    }

  return (
    <>
                        <h1 className='text-center pt-2 mb-3'>New Itinerary</h1>
                        <form ref={formRef} className='flex f-column g-1 align-center' onSubmit={submitHandler}>
                            <select className="fs-2" name="city" value={selectDefault} onChange={handleSelect} ref={selectRef} required>
                                <option disabled value={""}>
                                    Select a city
                                </option>
                                {cities.map(el => <option key={el._id} value={el._id}>{el.name}</option>)}
                            </select>
                            <label className='fw'>
                            <legend>Itinerary name:</legend>
                            <input className='w-100' type="text" name='name' min='3' required /></label>
                            <label className='fw'>
                            <legend>Itinerary Url photo 1:</legend>
                                <input className='w-100' type='url' name="photo1" required />
                            </label>
                            <label className='fw'>
                            <legend>Itinerary Url photo 2:</legend>
                                <input className='w-100' type='url' name="photo2" required />
                            </label>
                            <label className='fw'>
                            <legend>Itinerary Url photo 3:</legend>
                                <input className='w-100' type='url' name="photo3" required />
                            </label>
                            <label className='fw'>
                            <legend>Itinerary description:</legend>
                            <input className='w-100' type="text" name='description' min='20' required /></label>
                            <label className='fw'>
                            <legend>Itinerary price:</legend>
                            <input className='w-100' type="number" name="price" min='1' required /></label>
                            <label className='fw'>
                            <legend>Itinerary duration:</legend>
                            <input className='w-100' type="number" name="duration" min='1' required /></label>
                            <div className='new-buttons flex j-evenly w-100 pt-1'>
                                <input className='w-100 fs-2 btn p-1' type="submit" value="Submit" />
                                <Link to={'/myitineraries'} className='btn'>Go back</Link>
                            </div>
                        </form>
                    </>
  )
}
