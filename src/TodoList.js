import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 shadow-lg rounded-lg bg-gray-800 text-white">
      <h1 className="text-4xl text-center mb-6 text-white">To-Do List</h1>
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        onKeyPress={handleKeyPress}
        className="border border-gray-500 p-3 rounded mb-4 w-full bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button 
        onClick={addTask} 
        className="bg-blue-600 text-white p-3 rounded w-full hover:bg-blue-700 transition"
      >
        Add Task
      </button>
      <ul className="mt-5 space-y-2">
        {tasks.map((task, index) => (
          <li 
            key={index} 
            className="bg-gray-700 border border-gray-600 p-3 rounded flex justify-between items-center"
          >
            {task} 
            <button 
              onClick={() => deleteTask(index)} 
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
