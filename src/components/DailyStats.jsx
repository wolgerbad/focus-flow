function DailyStats({ todos, pomodoroCount }) {
  const finishedTasks = todos.filter((t) => t.isCompleted).length;

  return (
    <div className="bg-white border-gray-200 border-1 rounded-md p-4 min-h-32">
      <h2>Daily Tasks</h2>
      <p>Tasks completed today: {finishedTasks}</p>
      <p>Pomodoro sessions completed today: {pomodoroCount}</p>
    </div>
  );
}

export default DailyStats;
