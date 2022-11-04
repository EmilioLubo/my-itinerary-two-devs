import React from 'react'
import {Link} from 'react-router-dom'
import { DropDown } from './DropDown'
import { LogInWrapper } from './LogInWrapper'

export const NavBar = () => {

  return (
    <nav className="w-100 flex j-between sticky-top">
        <div className="flex align-center">
            <Link className="m-1" to="/">LOGO</Link>
            <DropDown/>
        </div>
        <LogInWrapper/>
    </nav>
  )
}