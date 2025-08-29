import { useEffect, useState } from 'react';
import AddTask from './components/AddTask';
import DailyStats from './components/DailyStats';
import Notes from './components/Notes';
import PomodoroTimer from './components/PomodoroTimer';
import TaskList from './components/TaskList';
import './index.css';

function App() {
  const [todos, setTodos] = useState(() => {
    const localTodo = JSON.parse(localStorage.getItem('todo'));
    if (!localTodo) return [];
    return localTodo;
  });
  // console.log(todos.length);

  function handleSubmit(formData) {
    const todoValue = formData.get('todo');
    setTodos((prev) => [...prev, todoValue]);
    // localStorage.setItem('todo', JSON.stringify([...todos, todoValue]));
  }

  function handleDelete(id) {
    setTodos((tds) => tds.filter((t) => t != id));
  }

  useEffect(
    function () {
      localStorage.setItem('todo', JSON.stringify(todos));
    },
    [todos]
  );

  return (
    <div className="w-[40rem] bg-gray-100 m-auto px-12 py-4">
      <h1 className="text-3xl mb-2">FocusFlow</h1>
      <AddTask onSubmit={handleSubmit} />
      <div className="grid grid-cols-2 gap-4 w-full mx-auto mt-4">
        <TaskList todos={todos} onDelete={handleDelete} />
        <Notes />
        <PomodoroTimer />
        <DailyStats />
      </div>
    </div>
  );
}

export default App;
