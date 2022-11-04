import React from 'react'

export default function Rows(props) {
    let {dir} = props
    let {onClick} = props
  return (
    <div className='row flex al-center j-center' onClick={onClick} >{dir}</div>
  )
}
