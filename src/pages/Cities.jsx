import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import apiUrl from '../url'

export const Cities = () => {

    let [checkCities, setCheckCities] = useState([])
    let [cities, setCities] = useState([])
    let [checked, setChecked] = useState([])
    let [searched, setSearched] = useState('')

    useEffect(() => {
        axios.get(`${apiUrl}/cities`)
            .then(res => setCheckCities(res.data.response))
            .catch(err => console.log(err.message))
    }, [])
    useEffect(() => {
        let checkQuery = checked.slice()
        if(checked.length > 0){
            checkQuery = checked.join('&continent=')
        }
        axios.get(`${apiUrl}/cities?name=${searched}&continent=${checkQuery}`)
            .then(res => setCities(res.data.response))
            .catch(err => console.log(err.message))
    }, [searched, checked])

    let checkHandler = (e) => {
        let auxArray = [...checked]
        if(e.target.checked){
            auxArray.push(e.target.value)
        }else{
            auxArray = auxArray.filter(el => el !== e.target.value)
        }
        setChecked(auxArray)
    }
    let inputHandler = (e) => {
        setSearched(e.target.value.trim())
        
    }
    console.log(searched)
    return (
        <div className='bg-city'>
            <div>
                <div className='flex j-evenly  pt-2'>
                    {
                        Array.from(new Set(checkCities.map(city => city.continent))).map(el => {
                            return (
                                        <label className='check-label' key={el}>
                                            <input onClick={checkHandler} type='checkbox' value={el} /> {el}
                                        </label>
                                    )
                        })
                    }
                </div>
                <div className='flex j-center mt-2'>
                    <input className='search-input' onChange={inputHandler} type="text" placeholder='Search by city name'/>
                </div>
            </div>
            <div className='w-100 min-h flex j-evenly wrap g-5 p-5'>
                {
                    cities.length > 0 ?
                    cities.map(item=> <Card name={item.name} id={item._id} photo={item.photo} key={item._id} description={item.continent}/>) :
                    <h2>No matches in your search</h2>
                }
            </div>
        </div>
      )
}