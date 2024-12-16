import React from 'react'

function TodoItem({ AllTodo, setAllTodo }) {

  function handleDelete(index) {
    const newTodos = AllTodo.filter((_, i) => i !== index);
    setAllTodo(newTodos);
  }

  return (
    <div>
      {
        AllTodo.map((item, index) => (
          <div key={index} className='flex items-center justify-between p-2 border-b'>
            <input type="checkbox" className='mr-2' />
            <p className='flex-1'>{item}</p>
            <select className="dropdown p-1 rounded border mr-2">
              <option value="" disabled select>
                Select a Color
              </option>
              <option value="red" style={{ color: 'red' }}>
                Red
              </option>
              <option value="green" style={{ color: 'green' }}>
                Green
              </option>
              <option value="blue" style={{ color: 'blue' }}>
                Blue
              </option>
             
              <option value="orange" style={{ color: 'orange' }}>
                Orange
              </option>
              <option value="purple" style={{ color: 'purple' }}>
                Purple
              </option>
   
            </select>
            <button 
              onClick={() => handleDelete(index)} 
              className='bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700'
            >
              X
            </button>
          </div>
        ))
      }
    </div>
  )
}

export default TodoItem