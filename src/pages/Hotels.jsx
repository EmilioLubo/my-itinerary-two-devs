import React,{useState,useEffect} from 'react'
import CardHotel from '../components/CardHotel'
import axios from 'axios'
import apiUrl from '../url'

export default function Hotels() {
    let [data,setData]= useState([])
    let [selectDefault,setSelectDefault]=useState('')
    let [searched, setSearched] = useState('')




    useEffect(()=>{
        axios.get(`${apiUrl}/hotels`)
            .then(res => setData(res.data.response))
            .catch(err => console.log(err.message))
    },[])

    useEffect(()=>{

        // eslint-disable-next-line
        if(selectDefault == 0){
            axios.get(`${apiUrl}/hotels?name=${searched}`)
        .then(res => setData(res.data.response))
        .catch(err => console.log(err.message))
        }else{
            axios.get(`${apiUrl}/hotels?name=${searched}&order=${selectDefault}`)
        .then(res => setData(res.data.response))
        .catch(err => console.log(err.message))
        }
    },[searched,selectDefault])

    let hand = (e) => {
        setSelectDefault(e.target.value)
    }

    let inputs =(e)=>{
        setSearched(e.target.value.trim())
    }



  return (
    <div className='w-100 min-h flex j-evenly wrap g-3 p-5'>
        <div className='w-100'>
            <form className='w-100 flex j-evenly mb-3 '>
                <input className='search-input' placeholder='Buscar...' onChange={inputs} type='text'/>
                <select className='search-input' name='Select' value={selectDefault} onChange={hand} >
                    <option value='0'>Select</option>
                    <option value='1' >Ascend</option>
                    <option value='-1'>Descend</option>
                </select>
            </form>
        </div>
        {
            data.length > 0 ?
            data.map(item=> <CardHotel name={item.name} photo={item.photo} key={item._id} id={item._id} description={item.capacity}/>):
            <h2 className='min-h-50'>Hotels not found</h2>
        }
    </div>
  )
}