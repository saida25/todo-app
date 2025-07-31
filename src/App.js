// src/App.js
import { useState } from "react";
import LocalTasks from "./LocalTasks";
import ApiTasks from "./ApiTasks";

function App() {
  const [page, setPage] = useState("local");

  return (
    <div style={{ padding: "20px" }}>
      <h1>🗂️ Gestionnaire de Tâches</h1>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setPage("local")}>Tâches locales</button>
        <button onClick={() => setPage("api")}>Tâches API</button>
      </div>

      {page === "local" ? <LocalTasks /> : <ApiTasks />}
    </div>
  );
}

export default App;
