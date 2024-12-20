import React from 'react'

function TodoItem({ AllTodo, setAllTodo }) {
  console.log(AllTodo)

  function handleDelete(id) {
    const newTodos = AllTodo.filter(todo=>todo.id !==id);
    setAllTodo(newTodos);
  }

  return (
    <div>
      {
        AllTodo.map((item) => (
          <div key={item.id} className='flex items-center justify-between p-2 border-b'>
            <input type="checkbox" className='mr-2' />
            <p className='flex-1'>{item.todo}</p>
            <select className="dropdown p-1 rounded border mr-2">
              <option value="" disabled selected hidden>
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
              onClick={() => handleDelete(item.id)} 
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