import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'

export const LogInWrapper = () => {

    let [showLogin, setShowLogin] = useState(false)
    let location = useLocation()

    useEffect(() => {
        if(showLogin){
            document.addEventListener('mousedown', e => {
                if(e.target.className !== 'nav-link' && e.target.className !== 'user-icon'){
                    setShowLogin(false)
                }
            })
        }
    }, [showLogin])
    useEffect(() => {
        setShowLogin(false)
    }, [location])
    let keyHandler = (ev) => {
        if(ev.key === 'Escape'){
            setShowLogin(false)
        }
    }
    let loginHandler = () => {
        setShowLogin(!showLogin)
    }

  return (
         <div className="m-1 me-3" onKeyUp={keyHandler}>
            <button onClick={loginHandler}>
                <img className='user-icon' src="/img/user_icon.png" alt="user icon" />
            </button>
            <ul className={`${showLogin ? '' : 'hidden'} drop-list flex f-column g-1 p-1 list-border`}>
                <li><Link className='nav-link' to="/login">Sign in</Link></li>
                <li><Link className='nav-link' to='/signup'>Sign up</Link></li>
            </ul>
        </div>
  )
}