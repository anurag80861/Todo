import React from 'react'

function FilterByColor({filterByColor}) {
  return (
    <div className=''>
      <h2 className=' font-bold mb-4'>{filterByColor}Filter By Color</h2>  
      <div className='space-x-2 flex items-center'>
        <input type="checkbox" className='mr-2' />
        <button className='bg-green-800 px-4 py-2 rounded hover:bg-green-700'> </button>
        <span >Green</span>
      </div>
      <div className='space-x-2 flex items-center'>
        <input type="checkbox" className='mr-2' />
        <button className='bg-blue-800 px-4 py-2 rounded hover:bg-blue-700'> </button>
        <span >Blue</span>
      </div>
      <div className='space-x-2 flex items-center'>
        <input type="checkbox" className='mr-2' />
        <button className='bg-orange-500 px-4 py-2 rounded hover:bg-orange-700'> </button>
        <span >Orange</span>
      </div>
      <div className='space-x-2 flex items-center'>
        <input type="checkbox" className='mr-2' />
        <button className='bg-purple-800 px-4 py-2 rounded hover:bg-purple-700'> </button>
        <span >Purple</span>
      </div>
      <div className='space-x-2 flex items-center'>
        <input type="checkbox" className='mr-2' />
        <button className='bg-red-800 px-4 py-2 rounded hover:bg-red-700'> </button>
        <span >Red</span>
      </div>
    </div>
  )
}

export default FilterByColor