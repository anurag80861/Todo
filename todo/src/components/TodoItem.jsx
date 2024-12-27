import React from 'react'

function TodoItem({ allTodo, setAllTodo,filter , choices}) {

  function handleDelete(id) {
    const newTodos = allTodo.filter(todo => todo.id !== id);
    setAllTodo(newTodos);
  }

  const handleCheckboxChange = (id) => {
    const updatedTodos = allTodo.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setAllTodo(updatedTodos);
  };//To hnadle CheckBox Button


  const handleSelectColorChange = (id, color) => {
    const updatedTodos = allTodo.map((todo) =>
      todo.id === id ? { ...todo, color } : todo
    );
   
    setAllTodo(updatedTodos, "updated");
  console.log(updatedTodos)
  };


  
  return (
    <div>
      {
        allTodo.map((item) => {
          const matchesColor = choices.includes(item.color) || item.color === "" || choices.length === 0;
          const matchesStatus = 
            filter === "All" || 
            (filter === "Active" && !item.completed) || 
            (filter === "completed" && item.completed);
        
          if (matchesColor && matchesStatus) {
            return (
              <div key={item.id} className='flex items-center justify-between p-2 border-b'>
                <input
                  type="checkbox"
                  className='mr-2'
                  onChange={() => handleCheckboxChange(item.id)}
                  checked={item.completed}
                />
                <p className='flex-1'>{item.todo}</p>
                <select
                  onChange={(e) => handleSelectColorChange(item.id, e.target.value)}
                  className="dropdown p-1 rounded border mr-2"
                  value={item.color || ''}
                >
                  <option value="" selected hidden>
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
            );
          }
          return null;
        })
        
     }
   </div>
 )
          }
        


export default TodoItem