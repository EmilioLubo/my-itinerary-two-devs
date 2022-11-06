import React from 'react'
import { CallToAcion } from '../components/CallToAcion'

export const Home1 = () => {
  return (
    <>
    <main className='w-100 h-100 flex f-column align-center j-center g-3 bg-main'>
        <div className="w-25">
            <h2>Just dream it...</h2>
            <div className="flex j-center">
                <img src="/img/no-image.png" alt="main logo" />
            </div>
            <h1 className="text-end">...we make it happens</h1>
        </div>
        <div className="w-100 flex j-evenly mt-5">
            <CallToAcion path={'/cities'} legend='view Cities...'/>
            <CallToAcion path={'/Hotels'} legend='view Hotels...'/>
        </div>
    </main>
    </>
  )
}
