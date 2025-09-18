import React from 'react'

const Card = ({children,bg = 'bg-gray-100'}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div> //passing variables in template literals
  )
}

export default Card