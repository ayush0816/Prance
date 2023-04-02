import React from 'react'

function Description({description, buttons}) {
  return (
    <div className='rounded-3xl flex justify-center items-center w-2/3 bg-pink-100 flex-col p-4'>
      <div className='flex flex-col justify-center items-center p-4'>
        <h1 className='font-bold underline text-2xl mb-3'>Description</h1>
        <p className='text-lg'>{description}</p>
      </div>
      <div className='flex flex-row justify-evenly w-full'>
        {buttons.map((but,index) => {
            return (<button key={index} className='w-1/4 m-2 p-2 h-28 bg-red-500 rounded-lg text-xl text-white'>
                {but}
            </button>)
        })}
      </div>
    </div>
  )
}

export default Description
