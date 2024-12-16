import React from 'react'

function Actions() {
  return (
    <div>
      <h1>Actions</h1>
      <div className='flex flex-col gap-4'>
        <button className='border-r-2px bg-blue-500 text-white rounded-2xl h-12  '>Mark all Completed</button>
        <button className='border-r-2px bg-blue-500 text-white rounded-2xl h-12 ' >clear <span>completed</span></button>
        
      </div>

    </div>
  )
} 

export default Actions