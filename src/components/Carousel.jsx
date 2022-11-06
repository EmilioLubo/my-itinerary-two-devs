import React,{useState,useEffect} from 'react'
import PhotoA from './PhotoA'
import Arrow from './Arrow'
import PhotoB from './PhotoB'

export default function Carousel() {

    let [num,setNum]= useState(0)
    let [data,setData] = useState([])
    let [id,setId] = useState([])
    let [clean,setClean] = useState(0)
    let [data1,setData1] = useState([])
    let [data2,setData2] = useState([])
    let [data3,setData3] = useState([])

    const dato = async(num)=>{ 
        let res = await fetch('/data/cities.json')
        res = await res.json()
        res = res.cities
        let dato = [...res.slice(0,6)]
        res = res.slice(0,7)
        res= res[num]
        setData(res)
        setId(dato)
    }
    const dato2 = async(num)=>{ 
        let res = await fetch('/data/cities.json')
        res = await res.json()
        res = res.cities
        res = res.slice(6,13)
        res= res[num]
        setData2(res)
    }
    const dato1 = async(num)=>{
        let res = await fetch('/data/hotels.json')
        res = await res.json()
        res = res.HotelAndCasino
        res = res.slice(0,6)
        res = res[num]
        setData1(res)
    }
    const dato3 = async(num)=>{
        let res = await fetch('/data/hotels.json')
        res = await res.json()
        res = res.HotelAndCasino
        res = res.slice(6,13)
        res = res[num]
        setData3(res)
    }
    useEffect(()=>{
        dato(num)
        dato1(num)
        dato2(num)
        dato3(num)
    },[num])
    useEffect(()=>{
        let idinterval = setInterval(()=>{
            next()
        },3000 )
        setClean(idinterval)
        return clearInterval(clean)
    },[id])
    function next(){
        if(num < id.length-1){
            setNum(num +1)
        }else{
            setNum(0)
        }
        clearInterval(clean)
    }
    function prev (){
        if(num>0){
            setNum(num -1)
        }else{
            setNum(id.length-1)
        }
        clearInterval(clean)
    }
   
    return (
    <div className='flex'>  
        <Arrow dir='<' onClick={prev} ></Arrow>
        <PhotoA  id={data.id} photo={data.photo} name={data.name}></PhotoA>
        <PhotoB id={data1.id} photo={data1.photo} name={data1.name} ></PhotoB>
        <PhotoA id={data2.id} photo={data2.photo} name={data2.name}></PhotoA>
        <PhotoB id={data3.id} photo={data3.photo} name={data3.name} ></PhotoB>
        <Arrow dir='>' onClick={next}></Arrow>
    </div>
    )
}
