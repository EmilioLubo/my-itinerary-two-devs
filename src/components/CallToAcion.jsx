import React from 'react'
import { Link } from 'react-router-dom'

export const CallToAcion = ({legend}) => {
  return (
    <Link className="action-button">{legend}</Link>
  )
}
