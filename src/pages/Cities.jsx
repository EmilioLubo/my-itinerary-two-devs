import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'

export const Cities = () => {

    let [cities, setCities] = useState([])
    let [checked, setChecked] = useState([])
    // eslint-disable-next-line
    let [searched, setSearched] = useState()

    useEffect(() => {
        fetch('/data/cities.json')
            .then(res => res.json())
            .then(data => setCities(data.cities))
            .catch(err => console.log(err.message))
    })

    let checkHandler = (e) => {
        let auxArray = [...checked]
        if(e.target.checked){
            auxArray.push(e.target.value)
        }else{
            auxArray = auxArray.filter(el => el !== e.target.value)
        }
        setChecked(auxArray)
        console.log(auxArray);
    }
    let inputHandler = (e) => {
        setSearched(e.target.value)
        console.log(e.target.value)
    }

    return (
        <>
            <div>
                <div className='flex j-evenly mt-2'>
                    {
                        Array.from(new Set(cities.map(city => city.continent))).map(el => {
                            return (
                                        <label key={el}>
                                            <input onClick={checkHandler} type='checkbox' value={el} />{el}
                                        </label>
                                    )
                        })
                    }
                </div>
                <div className='flex j-center mt-2'>
                    <input onChange={inputHandler} type="text" placeholder='Search by city name...'/>
                </div>
            </div>
            <div className='w-100 min-h flex j-evenly wrap gap-3 p-5'>
                {
                    cities.map(item=> <Card id={item.id} name={item.name} photo={item.photo} key={item.id} description={item.continent}/>)
                }
            </div>
        </>
      )
}
