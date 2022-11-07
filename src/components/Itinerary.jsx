import React, { useEffect, useState } from 'react'
import { Activity } from './Activity'

export const Itinerary = ({id}) => {

    let [activities, setActivities] = useState([])
    let [count, setCount] = useState(0)

    useEffect(() => {
        fetch('/data/activities.json')
            .then(res => res.json())
            .then(data => setActivities(data.activities.filter(el => el.cityId === parseInt(id))))
    })

    useEffect(() => {
        let interval = setInterval(() => {
                            count < 2 ? setCount(++count) : setCount(0)
                        }, 3000)
                        return () => {
                            clearInterval(interval)
                        }
    }, [count])

  return (
    <div className='flex j-center wrap g-3 mt-2'>
        {
        activities.map(el => <Activity key={el.id} name={el.name} photo={el.photo[count]} description={el.description} duration={'Duration: ' + el.duration + ' hs.'} price={el.price}/>)
    }
    </div>
  )
}