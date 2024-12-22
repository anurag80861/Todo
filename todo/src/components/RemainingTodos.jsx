import React from 'react'

function RemainingTodos({remainingTasksCount}) {
  return (
    <div className='gap-4'>RemainingTodos
        <p>{remainingTasksCount} item left</p>
    </div>

  )
}

export default RemainingTodos   