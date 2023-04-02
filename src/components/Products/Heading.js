import React from 'react'

function Heading({id,heading,onClick}) {
    return (
      <button onClick={() => onClick(id)} style={{minWidth : '25%'}} className='p-3 rounded-xl flex justify-center items-center bg-white '>
        <h1 className='text-2xl'>{heading}</h1>
      </button>
    )
  }

export default Heading
