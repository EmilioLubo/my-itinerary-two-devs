import React from 'react'
import { NavBar } from '../components/NavBar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import Login from '../pages/SingIn'

export const Layout = ({children}) => {
  return (
    <div>
        <NavBar/>
        <Login/>
        {children}
        <ScrollToTop/>
        <Footer/>
    </div>
  )
}
