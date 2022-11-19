import React,{useState,useEffect} from 'react'
import CardHotel from '../components/CardHotel'
import { useSelector, useDispatch } from 'react-redux'
import hotelsActions from '../redux/actions/hotelsAction'


export default function Hotels() {
    let [selectDefault,setSelectDefault]= useState('')
    let [searched, setSearched] = useState('')
    const hotels = useSelector(store=>store.hotelReducer.hotel)
    let dispatch = useDispatch()

    useEffect(()=>{
        dispatch(hotelsActions.getHotels())
    },[])

    useEffect(()=>{
        // eslint-disable-next-line
        if(selectDefault == 0){
            dispatch(hotelsActions.getHotelsByName(searched))
        }else{
            let filter = {
                name:searched,
                order:selectDefault
            }
        dispatch(hotelsActions.getHotelByFilter(filter))
        }
    },[searched,selectDefault])

    let hand = (e) => {
        setSelectDefault(e.target.value)
    }

    let inputs =(e)=>{
        setSearched(e.target.value.trim())
    }

    return (
    <div className='w-100 min-h flex j-evenly wrap g-5 p-5 bg-hotel'>
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
            hotels.length > 0 ?
            hotels.map(item=> <CardHotel name={item.name} photo={item.photo} key={item._id} id={item._id} description={item.capacity}/>):
            <h2 className='min-h-50'>Hotels not found</h2>
        }
    </div>
    )
}