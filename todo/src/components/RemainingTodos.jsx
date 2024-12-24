import React from 'react'

function RemainingTodos({remainingTasksCount}) {
  return (
    <div className='gap-4'>
      <h1 className='font-bold mb-4'>RemainingTodos</h1>
        <p>{remainingTasksCount} item left</p>
    </div>

  )
}

export default RemainingTodos   