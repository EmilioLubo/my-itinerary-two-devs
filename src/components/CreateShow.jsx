import React ,{useState,useEffect} from 'react'
import apiUrl from '../url'
import axios from 'axios'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux'




export default function CreateShow({id}) {
    let [selectDefault, setSelectDefault] = useState("");
    let [dato,setDato]= useState([])
    let navigate = useNavigate()
    let {token} = useSelector(state => state.userReducer)
    let notify = (text)=>{
        toast.warn(text, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    useEffect(()=>{
        axios.get(`${apiUrl}/hotels`)
        .then(res => setDato(res.data.response))
        .catch(err => console.log(err.message))
    },[])

    let handleSelect = (e) => {
        setSelectDefault(e.target.value);
    };

    let submit = (e) =>{
        e.preventDefault()
        let create = {
            hotelID:selectDefault,
            name: e.target.name.value,
            description: e.target.description.value,
            photo: e.target.photo.value,
            price: e.target.price.value,
            date: e.target.date.value,
            userID: id
        }
       

        let headers = {headers: {'Authorization': `Bearer ${token}`}}
        axios.post(`${apiUrl}/shows`, create, headers)
            .then(res => {
                if(res.data.success){
                    swal({
                        title:'success',
                        text:'The show was created',
                        icon:'success',
                    })
                    navigate('/myshows')
                }else{
                    let error = res.data.message
                    error.forEach(item=>notify(item.message))
                }
                
            })
            .catch((err) => {
                swal({
                    title:'Error',
                    text: err.response.data,
                    icon:'error',
                })
            })
    }


  return (
    <div className='w-100'>
        <form className='edit flex f-column align-center ' onSubmit={submit}>
            <label className='fw'>
            <legend>name of show</legend>
            <input className='w-100' type="text" name='name' min='3' placeholder=' name...' required/></label>
            <label className='fw'>
            <legend>description</legend>
            <input className='w-100' type="text" name="description" min='1' placeholder='description...' required/></label>
            <label className='fw'>
            <legend>Url photo</legend>
                <input className='w-100'  type='url' name="photo" placeholder='image...' required/>
            </label>
            <label className='fw'>
            <legend>Date of show</legend>
                <input className='w-100'  type='date' name="date" placeholder='date..' required/>
            </label>
            <label className='fw'>
            <legend>Price of show</legend>
                <input className='w-100'  type='num' name="price" placeholder='price..' required/>
            </label>
            <label className="inputs flex f-column">
                    <legend>Choose hotel</legend>
                    <select className="fs-2" name="hotel"  onChange={handleSelect}  required>
                        <option disabled value={""}>
                            Select a hotel
                        </option>
                        {
                            dato? dato.map(item=> <option value={item._id}>{item.name}</option>) :''
                        }
                    </select>
                </label>
            <div className='new-buttons flex j-evenly w-100 pt-1'>
                <input className='w-100 fs-2 btn p-1' type="submit" value="create" onClick={submit} />
            </div>
        </form>
        <ToastContainer/>
    </div>
  )
}
