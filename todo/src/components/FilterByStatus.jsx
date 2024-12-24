import React from 'react'

function FilterByStatus(  {FilterByStatusButton}) {


  return (
    <div className='flex flex-col gap-3 '>
      <h1 className='font-bold '>FilterByStatus</h1>
      <button className='border-r-2px bg-blue-500 h-12 w-28 rounded-2xl text-white ' onClick={() => FilterByStatusButton("All")}> All</button>
      <button className='border-r-2px bg-blue-500 h-12 w-28 rounded-2xl text-white ' onClick={() => FilterByStatusButton("Active")}>Active</button>
      <button className='border-r-2px bg-blue-500 h-12 w-28 rounded-2xl text-white' onClick={() => FilterByStatusButton("completed")}>Completed</button>

    </div>
  )
}

export default FilterByStatus