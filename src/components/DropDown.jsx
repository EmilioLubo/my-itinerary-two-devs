import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export const DropDown = () => {

    let [isOpen, setIsOpen] = useState(false)

    let keyHandler = (ev) => {
        if(ev.key === 'Escape'){
            setIsOpen(false)
        }
    }
    let dropHandler = () => {
        setIsOpen(!isOpen)
    }

  return (
            <div onKeyUp={keyHandler}>
                <button onClick={dropHandler}>
                    <img className='drop-icon' src={isOpen ? '/img/dropdown_up_icon.png' : '/img/dropdown_icon.png'} alt='dropdown icon' />
                </button>
                <ul className={`${isOpen ? '' : 'hidden'} drop-list`}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to="/cities">Cities</Link></li>
                    <li><Link to='/Hotels'>Hotels</Link></li>
                </ul>
            </div>
  )
}
