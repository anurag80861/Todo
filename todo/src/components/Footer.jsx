import React from 'react'
import RemainingTodos from './RemainingTodos'
import FilterByColor from './FilterByColor'
import FilterByStatus from './FilterByStatus'
import Actions from './Actions'

function Footer() {
    return (
        <div className='flex justify-around'>

            <Actions/>
            <RemainingTodos/>
            <FilterByStatus />
            <FilterByColor />
          

        </div>
    )
}

export default Footer