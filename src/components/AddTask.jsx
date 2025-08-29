import Button from './Button';

function AddTask({ onSubmit }) {
  return (
    <div>
      <h1 className="text-xl mb-0.5">Task Manager</h1>
      <form action={onSubmit} className="flex gap-2">
        <input
          className="bg-white p-1 flex-1 outline-gray-200 outline-1"
          type="text"
          name="todo"
          placeholder="Add new task..."
        />
        <Button type="primary">Add</Button>
      </form>
    </div>
  );
}

export default AddTask;
