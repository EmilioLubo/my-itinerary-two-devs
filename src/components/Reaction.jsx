import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import reactionsActions from '../redux/actions/reactionsActions'


export const Reaction = ({name, icon, userId, itId, reload}) => {

    let {token} = useSelector(state => state.userReducer)
    let dispatch = useDispatch()
    let {updateReactions} = reactionsActions
    
    let clickHandler = () => {
        dispatch(updateReactions({token, name, itId}))
        .then(res => reload())
    }

  return (

    <div>
        <img onClick={clickHandler} className='reactions' src={icon} alt={name} />
        <p className='text-center'>{userId.length}</p>
    </div>
  )
}
