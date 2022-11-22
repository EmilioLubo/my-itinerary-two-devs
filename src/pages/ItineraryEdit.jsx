import axios from 'axios'
import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import apiUrl from '../url'
import swal from 'sweetalert'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const ItineraryEdit = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    let [itinerary, setItinerary] = useState({})
    let [name, setName] = useState('')
    let [photo, setPhoto] = useState([])
    let [description, setDescription] = useState('')
    let [price, setPrice] = useState('')
    let [duration, setDuration] = useState('')
    let formRef = useRef(null)

    let notify = (text)=>{
        toast.warn(text, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

    useEffect(()=> {
        axios.get(`${apiUrl}/itineraries/${id}`)
            .then(res => {
                console.log(res.data.response)
                setItinerary(res.data.response)
                setName(res.data.response.name)
                setPhoto(res.data.response.photo)
                setDescription(res.data.response.description)
                setPrice(res.data.response.price)
                setDuration(res.data.response.duration)
            }) 
            .catch(err => console.log(err.message))
    },[])

    let nameHandler = (e) =>{
        setName(e.target.value)
    }
    let photoHandler = (e) =>{
        let newPhoto = [...photo, e.target.value]
        setPhoto(newPhoto)
    }
    let descriptionHandler = (e) =>{
        setDescription(e.target.value)
    }
    let priceHandler = (e) =>{
        setPrice(e.target.value)
    }
    let durationHandler = (e) => {
        setDuration(e.target.value)
    }
    let submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current)
        const values = Object.fromEntries(formData)
        let updateItinerary = {
            name: values.name,
            description: values.description,
            photo: values.photo,
            price: values.price,
            duration: values.duration,
            userId: "636d210297606439046194bb",
        };
        axios.put(`${apiUrl}/itineraries/${itinerary._id}`, updateItinerary)
            .then(res => {
                if(res.data.success){
                    swal({
                        title:'success',
                        text: res.data.message,
                        icon:'success',
                    })
                    navigate('/myitineraries')
                }else{
                    let error = res.data.message[0].message
                    notify(error)
                }
            })
            .catch((err) => {
                swal({
                    title:'Error',
                    text: err.response.data.message,
                    icon:'error',
            })
        })
    }

  return (
    <div className='w-100 min-h-edit bg-city'>
            {
                itinerary.name ?
                (
                    <>
                        <h1 className='text-center pt-2 mb-3'>Edit {itinerary.name} itinerary</h1>
                        <form ref={formRef} className='flex f-column g-1 align-center' onSubmit={submitHandler}>
                            <label className='fw'>
                            <legend>Itinerary name:</legend>
                            <input onChange={nameHandler} className='w-100' type="text" name='name' min='3' value={name} required /></label>
                            <label className='fw'>
                            <legend>Itinerary Url photo:</legend>
                                <input onChange={photoHandler} className='w-100' type='url' name="photo" value={photo} required />
                            </label>
                            <label className='fw'>
                            <legend>Itinerary description:</legend>
                            <input onChange={descriptionHandler} className='w-100' type="text" name='description' min='20' value={description} required /></label>
                            <label className='fw'>
                            <legend>Itinerary price:</legend>
                            <input onChange={priceHandler} className='w-100' type="number" name="price" min='1' value={price} required /></label>
                            <label className='fw'>
                            <legend>Itinerary duration:</legend>
                            <input onChange={durationHandler} className='w-100' type="number" name="price" min='1' value={duration} required /></label>
                            <div className='new-buttons flex j-evenly w-100 pt-1'>
                                <input className='w-100 fs-2 btn p-1' type="submit" value="Edit" />
                                <Link to={'/mycities'} className='btn'>Go back</Link>
                            </div>
                        </form>
                    </>
                    
                ) :
                <h1>No cities</h1>
            }
            <ToastContainer/>
    </div>
  )
}
