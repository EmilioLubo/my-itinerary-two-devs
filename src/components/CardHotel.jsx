import React,{useEffect,useState} from 'react'

export default function CardHotel({name, photo, description}) {
    let [num,setNum]= useState(0)
    let [clean,setClean] = useState(0)

    function next(){
        if(num < photo.length-1){
            setNum(num +1)
        }else{
            setNum(0)
        }
        clearInterval(clean)
    }

useEffect(()=>{
    let idinterval = setInterval(()=>{
        next()
    },3000 )
    setClean(idinterval)
    return clearInterval(clean)
},[num])

  return (
    <div>
        <div className='card1 '>
            <img className='img ' src={photo[num]} alt={name} height="250" />
            <article className='card-body'>
                <h4 className='text-center'>{name}</h4>
                <p className='text-center'>{description}</p>
            </article>
        </div>
    </div>
  )
}
