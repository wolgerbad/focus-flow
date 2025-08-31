import TaskItem from './TaskItem';

function TasksList({ todos, onDelete, setTodos }) {
  return (
    <ul className="bg-white border-gray-200 border-1 rounded-md min-h-32 p-4">
      {!todos.length && (
        <p className="text-gray-400">Nothing to do indeed...</p>
      )}
      {todos.map((todo) => (
        <TaskItem
          onDelete={onDelete}
          key={todo.todo}
          todo={todo}
          setTodos={setTodos}
        />
      ))}
    </ul>
  );
}

export default TasksList;
