import React from 'react'

export const AutoToTop = () => {

   React.useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 500)
    })

  return (
    <></>
  )
}