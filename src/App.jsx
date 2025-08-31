import { useEffect, useState } from 'react';
import AddTask from './components/AddTask';
import DailyStats from './components/DailyStats';
import Notes from './components/Notes';
import PomodoroTimer from './components/PomodoroTimer';
import TaskList from './components/TaskList';
import './index.css';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todo');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const [pomodoroCount, setPomodoroCount] = useState(() => {
    const savedCount = localStorage.getItem('pomodoroCount');
    if (savedCount) {
      return JSON.parse(savedCount);
    } else {
      return 0;
    }
  });

  function handleSubmit(formData) {
    const todoValue = formData.get('todo');
    if (!todoValue) return null;
    setTodos((prev) => [...prev, { todo: todoValue, isCompleted: false }]);
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

  useEffect(
    function () {
      localStorage.setItem('pomodoroCount', JSON.stringify(pomodoroCount));
    },
    [pomodoroCount]
  );

  return (
    <div className="w-[40rem] bg-gray-100 m-auto px-12 py-4">
      <h1 className="text-3xl mb-2">FocusFlow</h1>
      <AddTask onSubmit={handleSubmit} />
      <div className="grid grid-cols-2 gap-4 w-full mx-auto mt-4">
        <TaskList todos={todos} setTodos={setTodos} onDelete={handleDelete} />
        <Notes />
        <PomodoroTimer setPomodoroCount={setPomodoroCount} />
        <DailyStats todos={todos} pomodoroCount={pomodoroCount} />
      </div>
    </div>
  );
}

export default App;
