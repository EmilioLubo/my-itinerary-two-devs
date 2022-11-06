import React,{useState,useEffect} from 'react'
import CardHotel from '../components/CardHotel'

export default function Hotels() {
    let [data,setData]= useState([])


    const dato = async()=>{
        let res = await fetch('/data/hotels.json')
        res = await res.json()
        res = res.HotelAndCasino 
        setData(res)
    }

    useEffect(()=>{
        dato()
    },[])

    let inputs =(e)=>{
        // eslint-disable-next-line 
        let valor = e.target.value
        console.log(valor)
    }
    let selected =(e)=>{
        // eslint-disable-next-line 
        let valor = e.target.value
        console.log(valor)
    }



  return (
    <div className='w-100 min-h flex j-evenly wrap gap-3 p-5'>
    <div className='w-100'>
        <form className='w-100 flex j-evenly mb-3 '>
            <input placeholder='Buscar...' onChange={inputs}/>
            <select onChange={selected}>
                <option>Select</option>
                <option value='top' >Ascend</option>
                <option value='down'>Descend</option>
            </select>
        </form>
    </div>
        {
            data.map(item=> <CardHotel name={item.name} photo={item.photo} key={item.id} description={item.capacity}/>)
        }
    </div>
  )
}
