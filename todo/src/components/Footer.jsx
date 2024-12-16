import React from 'react'
import RemainingTodos from './RemainingTodos'
import FilterByColor from './FilterByColor'
import FilterByStatus from './FilterByStatus'

function Footer() {
    return (
        <div>

            <RemainingTodos />
            <FilterByStatus />
            <FilterByColor />
        
        </div>
    )
}

export default Footer