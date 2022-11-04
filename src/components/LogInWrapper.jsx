import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export const LogInWrapper = () => {

    let [showLogin, setShowLogin] = useState(false)

    let keyHandler = (ev) => {
        if(ev.key === 'Escape'){
            setShowLogin(false)
        }
    }
    let loginHandler = () => {
        setShowLogin(!showLogin)
    }

  return (
         <div className="m-1" onKeyUp={keyHandler}>
            <button onClick={loginHandler}>
                <img className='user-icon' src="/img/user_icon.png" alt="user icon" />
            </button>
            <ul className={`${showLogin ? '' : 'hidden'} drop-list`}>
                <li><Link to="/">Sign in</Link></li>
                <li><Link>Sign up</Link></li>
            </ul>
        </div>
  )
}
