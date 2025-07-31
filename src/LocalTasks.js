// src/components/LocalTasks.js
import { useEffect, useState } from "react";

export default function LocalTasks() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div>
      <h2>📝 Tâches locales</h2>
      <button onClick={() => addTask(prompt("Nouvelle tâche:"))}>
        Ajouter une tâche
      </button>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => {
                const updated = tasks.map((task) =>
                  task.id === t.id ? { ...task, completed: !task.completed } : task
                );
                setTasks(updated);
                localStorage.setItem("tasks", JSON.stringify(updated));
              }}
            />
            {t.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
