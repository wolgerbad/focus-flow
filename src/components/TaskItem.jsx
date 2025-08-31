import { useState } from 'react';
import trash from '../../public/trash.svg';

function TaskItem({ todo, setTodos, onDelete }) {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  // console.log(todo);
  console.log(isCompleted);

  function handleChange(e) {
    setIsCompleted(e.target.checked);
    setTodos((todos) =>
      todos.map((t) =>
        t.todo === todo?.todo
          ? { todo: todo.todo, isCompleted: e.target.checked }
          : t
      )
    );
  }

  return (
    <li className="list-none flex items-center gap-1 justify-between">
      <div className="flex items-center gap-2">
        <input type="checkbox" checked={isCompleted} onChange={handleChange} />
        <span>{todo.todo}</span>
      </div>
      <button
        className="justify-self-end cursor-pointer"
        onClick={() => onDelete(todo)}
      >
        <img src={trash} className="w-5" alt="garbage icon" />
      </button>
    </li>
  );
}

export default TaskItem;
