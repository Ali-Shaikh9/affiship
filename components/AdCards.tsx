import React from 'react'

interface data {
  title:string,
  description:string
}

const AdCards = (props:data) => {
  return (
    <div className='card bg-white flex flex-col w-1/3 p-2 rounded-md justify-center items-center'>
        <h1 className='text-xl font-semibold rounded-md'>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default AdCards