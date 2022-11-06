import React, { useEffect, useState } from 'react'
import { Activity } from './Activity'

export const ShowsH = ({id}) => {

    let [activities, setActivities] = useState([])


    useEffect(() => {
        fetch('/data/eventshotels.json')
            .then(res => res.json())
            .then(data => setActivities(data.shows.filter(el => el.hotelid == parseInt(id))))
    })




  return (
    <div className='flex j-center wrap g-3 mt-2'>
        {
        activities.map(el => <Activity key={el.id} name={el.name} photo={el.photo} description={el.description} duration={el.date} price={el.price}/>)
    }
    </div>
  )
}