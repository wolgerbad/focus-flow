import trash from '../../public/trash.svg';

function TaskItem({ todo, onDelete }) {
  return (
    <li className="list-none flex items-center gap-1 justify-between">
      <div className="flex items-center gap-2">
        <input type="checkbox" />
        <span>{todo}</span>
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
