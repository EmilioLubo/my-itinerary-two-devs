import React from 'react'
import Carousel from '../components/Carousel'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer'


export default function Home2() {
  return (
    <div className='h-100 w-100 flex j-between column'>
        <div>header</div>
        <div>
            <Carousel></Carousel>
            <ScrollToTop></ScrollToTop>
        </div>
        <Footer></Footer>
    </div>
  )
}
