import React, { useState } from 'react'

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // function to add a new todo
  const addTodo = () => {
    if (inputValue.trim() === '') {
      return;
    }

    setTodos([ ...todos, { text: inputValue, id: Date.now()}]);
    setInputValue('');
  }

  // function to delete a todo
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center-my-3">Todo List</h1>
      <div className="flex mb-4">
        <input 
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo..." 
        className="outline-none w-full py-1 px-3" 
        />
        <button
        onClick={addTodo} 
        className="outline-none bg-blue-700 text-white px-3 py-0 5 ml-2">add</button>
      </div>
      <ul className="list-none text-white">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li
            key={todo.id}
            className='flex justify-between items-center py-2 border-b border-orange-500'
            >
              {todo.text}
              <button
              onClick={() => deleteTodo(todo.id)}
              className="outline-none bg-red-700 text-white px-3 py-0.5">
                delete
              </button>
            </li>
          ))
        ) : (
          <p className="text-center py-4">no todos found. add one!</p>
        )}
      </ul>
    </div>
  )
}

export default Todo
