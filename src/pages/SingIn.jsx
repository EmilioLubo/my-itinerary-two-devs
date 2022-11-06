import React,{useState} from 'react'


export default function Login() {
    let [username,setUser] = useState([])
    let [password,setPass] = useState([])

    let submit = ()=>{

        localStorage.setItem('user',JSON.stringify(dato))
    }

    let dato = [{username},{password}]

    let user =(e)=>{
        // eslint-disable-next-line 
        let valor = e.target.value
        valor = setUser(valor)
    }
    let pass =(e)=>{
        // eslint-disable-next-line 
        let valor = e.target.value
        valor=setPass(valor)
    }
    
    return (
    <form onSubmit={submit} className='form-log flex f-column align-center j-evenly '>
    <div className='inputs j-center f-column '>
        <label>
        <legend>User or Email</legend>
        <input placeholder='username'  onChange={user} required/>
    </label>
    <label>
        <legend>Your password</legend>
        <input  placeholder='password'  type='password' onChange={pass} required/>
    </label>
    </div>
    <div className='flex separate j-center'>
        <button className='btn' onChange={submit} >LogIn</button>
        <hr></hr>
        <p>Or</p>
        <hr/>
    <div className='btn flex j-evenly align-center'>Login With Google <img className='google ' src='/img/png-clipart-google-search-google-account-google-s-google-play-google-company-text.png' alt='google logo'/> </div>
    </div>
    <hr/>
    <div className='btn'>Register Here!</div>
    </form>
    )
}