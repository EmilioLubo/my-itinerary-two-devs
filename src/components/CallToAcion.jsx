import React from 'react'
import { Link } from 'react-router-dom'

export const CallToAcion = ({name}) => {
  return (
    <Link className="action-button">View {name}...</Link>
  )
}
