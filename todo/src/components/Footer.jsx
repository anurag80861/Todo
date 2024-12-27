import React from 'react'
import RemainingTodos from './RemainingTodos'
import FilterByColor from './FilterByColor'
import FilterByStatus from './FilterByStatus'
import Actions from './Actions'


function Footer({ handleAllMarks, remainingTasksCount, handleDeleteAllClear,filterByColor,FilterByStatusButton,allTodo,handleSetChoices}) {
    return (
        <div className='flex justify-around'>

            <Actions handleAllMarks={handleAllMarks} handleDeleteAllClear={handleDeleteAllClear} />
            <RemainingTodos remainingTasksCount={remainingTasksCount} />
            <FilterByStatus FilterByStatusButton={FilterByStatusButton} />
            <FilterByColor handleSetChoices={handleSetChoices}  />


        </div>
    )
}

export default Footer