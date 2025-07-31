// src/components/ApiTasks.js
import { useEffect, useState } from "react";

export default function ApiTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div>
      <h2>🌐 Tâches depuis API</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} readOnly />
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
