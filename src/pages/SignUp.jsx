import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'

export const SignUp = () => {

    let [user, setUser] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        fetch('/data/users.json')
            .then(res => res.json())
            .then(data => setUser(data.users))
            .catch(err => console.log(err.message))
    })

    let submit = (e) => {
        e.preventDefault()
        if(e.target.password.value !== e.target.confirmPassword.value){
            e.target.confirmPassword.focus()
        } else{
            let newUser = {
                name: e.target.fName.value,
                lastName: e.target.lName.value,
                age: e.target.age.value,
                email: e.target.email.value,
                password: e.target.password.value,
            }
            let userRef = user.find(el => el.name.toUpperCase() === newUser.name.toUpperCase() && el.lastName.toUpperCase() === newUser.lastName.toUpperCase())
            userRef ? navigate('/login') : localStorage.setItem('new user', JSON.stringify(newUser))
            navigate('/')
        }
    }

  return (
        <form className='form-log flex f-column align-center j-evenly w-100 h-75' onSubmit={submit}>
            <h1 className="text-center">Sign up</h1>
            <div className='inputs j-center f-column'>
                <input className="fs-2" type="text" name='fName' placeholder='Enter your name...' required/>
                <input className="fs-2" type="text" name='lName' placeholder='Enter your last name...' required/>
                <input className="fs-2" type="number" name="age" placeholder='Enter your age...(18+)' min={18} max={100} required/>
                <input className="fs-2" type="email" name="email" placeholder='Enter your email...' required/>
                <input className="fs-2" type="password" name="password" placeholder='Enter your password' required/>
                <input className="fs-2" type="password" name="confirmPassword" placeholder='Confirm your password' required/>
            </div>
            <div className='flex separate j-center'>
                <input className='btn' type="submit" value="Submit" />
                <hr></hr>
                <p>Or</p>
                <hr/>
                <div className='btn flex j-evenly align-center'>Login With Google <img className='google ' src='/img/png-clipart-google-search-google-account-google-s-google-play-google-company-text.png' alt='google logo'/> </div>
            </div>
            <hr/>
            <Link to="/login" className='btn'>Login Here!</Link>
        </form>
  )
}