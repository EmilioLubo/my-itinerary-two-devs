import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

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
            let userRef = user.find(el => el.name === newUser.name && el.lastName === newUser.lastName)
            userRef ? navigate('/login') : localStorage.setItem('new user', JSON.stringify(newUser))
            navigate('/')
        }
    }

  return (
    <div className='w-100 h-100 flex f-column g-3'>
        <h1 className="text-center">Sign up</h1>
        <form className='flex f-column g-1 p-5 fs-3' onSubmit={submit}>
            <input className="fs-2" type="text" name='fName' placeholder='Enter your name...' required/>
            <input className="fs-2" type="text" name='lName' placeholder='Enter your last name...' required/>
            <input className="fs-2" type="number" name="age" placeholder='Enter your age...(18+)' min={18} max={100} required/>
            <input className="fs-2" type="email" name="email" placeholder='Enter your email...' required/>
            <input className="fs-2" type="password" name="password" placeholder='Enter your password' required/>
            <input className="fs-2" type="password" name="confirmPassword" placeholder='Confirm your password' required/>
            <div className='flex j-between'>
                <input className='w-50 fs-2' type="reset" value="Clear Form" />
                <input className='w-50 fs-2' type="submit" value="Submit" />
            </div>
            <a className='align-s-center' href="https://www.google.com/"><img className='google' src='/img/png-clipart-google-search-google-account-google-s-google-play-google-company-text.png' alt='google logo'/></a>
        </form>
    </div>
  )
}
