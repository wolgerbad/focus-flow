import { useEffect, useState } from 'react';
import Button from './Button';

const START_TIME = 25 * 60;

function PomodoroTimer({ setPomodoroCount }) {
  const [time, setTime] = useState(START_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const min = Math.floor(time / 60);
  const sec = time % 60;

  function handleStart() {
    setIsTimeRunning(true);
  }

  function handleReset() {
    setTime(START_TIME);
    setIsTimeRunning(false);
  }

  useEffect(
    function () {
      const pomodoroTimer = setTimeout(function () {
        if (isTimeRunning) setTime((t) => t - 1);
        if (time === 0) {
          setPomodoroCount((count) => count + 1);
          handleReset();
        }
      }, 1000);

      return () => clearTimeout(pomodoroTimer);
    },
    [time, isTimeRunning]
  );

  return (
    <div className="flex flex-col justify-between bg-white border-gray-200 border-1 rounded-md p-4 min-h-32 max-h-max">
      <h2>Pomodoro Timer</h2>
      <p>
        {min < 10 ? '0' : ''}
        {min}:{sec < 10 ? '0' : ''}
        {sec}
      </p>
      <div>
        <Button type="primary" onClick={handleStart} disabled={isTimeRunning}>
          Start
        </Button>
        <Button type="secondary" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </div>
  );
}

export default PomodoroTimer;
