import React, { useState } from 'react';
import TodoItem from './components/TodoItem';
import Footer from './components/Footer';

function App() {
  const [todo, setTodo] = useState('');
  const [allTodo, setAllTodo] = useState([
    { id: 1, todo: 'Learn React', completed: false, color: "" },
    { id: 2, todo: 'Read a book', completed: false, color: "" },
    { id: 3, todo: 'Exercise', completed: false, color: "" },
  ]);
  const [filter, setFilter] = useState('All');

  function handleAddTodosubmit() {
    if (todo.trim() === '') return;
    const newTodo = { id: crypto.randomUUID(), todo, completed: false };
    const newAllTodo = [...allTodo, newTodo];
    setAllTodo(newAllTodo);
    setTodo('');
  }

  function handleAllMarks() {
    const updatedTodos = allTodo.map((task) => ({
      ...task,
      completed: true,
    }));
    setAllTodo(updatedTodos);
  }

  function remainingTasksCount() {
    return allTodo.filter((task) => !task.completed).length;
  }

  function handleDeleteAllClear() {
    const newTodos = allTodo.filter((task) => !task.completed);
    setAllTodo(newTodos);
  }

  function filterByColor() {
    
  }

  function FilterByStatusButton(str) {
    setFilter(str);
  } 
  const filteredTodo =
    filter === 'All'
      ? allTodo
      : filter === 'Active'
        ? allTodo.filter((item) => !item.completed)
        : allTodo.filter((item) => item.completed);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-4xl font-bold my-8 text-red-500">Todos</h1>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-2xl">
        <input
          placeholder="What needs to be done?"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          className="border p-2 w-full mb-4"
        />
        <button
          onClick={handleAddTodosubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
        <hr className="my-4" />

        <TodoItem allTodo={filteredTodo} setAllTodo={setAllTodo} />
        <hr className="my-4" />

     
        <Footer
          handleAllMarks={handleAllMarks}
          remainingTasksCount={remainingTasksCount()}
          handleDeleteAllClear={handleDeleteAllClear}
          filterByColor={filterByColor}
          FilterByStatusButton={FilterByStatusButton}
          allTodo={allTodo}
        />
      </div>
    </div>
  );
}

export default App;
