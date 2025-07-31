import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

// 🏠 Page d'accueil
function Home({ tasks, deleteTask , clearTasks }) {
  return (
    <div>
      <h1>📋 Mes Tâches</h1>
      <Link to="/add">➕ Ajouter une tâche</Link>

          <button onClick={clearTasks}>🧹 Tout effacer</button>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            {t}
            <button onClick={() => deleteTask(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 📝 Page d'ajout
function AddTask({ addTask }) {
  const [task, setTask] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      addTask(task);
      navigate("/"); // Retour à la page d'accueil
    }
  };

  return (
    <div>
      <h1>➕ Nouvelle tâche</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom de la tâche"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

// 🚀 App principale
function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <Routes>
         <Route
            path="/"
            element={<Home tasks={tasks} deleteTask={deleteTask} clearTasks={() => setTasks([])} />}
          />

          <Route path="/add" element={<AddTask addTask={addTask} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
