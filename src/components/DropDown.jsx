import React, {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'

export const DropDown = () => {

    let [isOpen, setIsOpen] = useState(false)
    let location = useLocation()

    useEffect(() => {
        if(isOpen){
            document.addEventListener('mousedown', e => {
                if(e.target.className !== 'nav-link' && e.target.className !== 'drop-icon'){
                    setIsOpen(false)
                }
            })
        }
    }, [isOpen])
    useEffect(() => {
        setIsOpen(false)
    }, [location])
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
                <ul className={`${isOpen ? '' : 'hidden'} drop-list flex f-column g-1 p-1 list-border`}>
                    <li><Link className='nav-link' to='/'>Home</Link></li>
                    <li><Link className='nav-link' to="/cities">Cities</Link></li>
                    <li><Link className='nav-link'to='/Hotels'>Hotels</Link></li>
                    <li><Link className='nav-link' to='/newcity'>Add new city</Link></li>
                    <li><Link className='nav-link' to='/newhotel'>Add new hotel</Link></li>
                </ul>
            </div>
  )
}