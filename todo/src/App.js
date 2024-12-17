import React, { useState } from 'react'
import TodoItem from './components/TodoItem'
import Footer from './components/Footer'



function App() {
  const [todo, SetTodo] = useState('');
  const [AllTodo, setAllTodo] = useState([]);
  console.log(todo);

  function handlesubmit() {
    if (todo.trim() === "") return;
    setAllTodo([...AllTodo, {id:crypto.randomUUID() ,todo}]);
    SetTodo('');
  }
  // console.log(AllTodo);
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center'>
      <h1 className='text-4xl font-bold my-8 text-red-500'>Todos</h1>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-2xl">
        <input
          placeholder='What needs to be done?'
          onChange={(e) => SetTodo(e.target.value)}
          value={todo}
          className='border p-2 w-full mb-4'
        />
        <button
          onClick={() => handlesubmit()}
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'
        >
          Submit
        </button>
        <hr className='my-4' />
        <TodoItem AllTodo={AllTodo} setAllTodo={setAllTodo} />
        <hr className='my-4' />


        <Footer />
      </div>
    </div>
  )
}

export default App