import { useState } from "react";
import "./TodoApp.css";

function TodoApp() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (e) => {
    e.preventDefault();

    if (tarea.trim() === "") return;

    const nuevaTarea = {
      id: Date.now(),
      texto: tarea,
      completada: false,
    };

    setTareas([...tareas, nuevaTarea]);
    setTarea("");
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  const toggleCompletada = (id) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };

  const tareasPendientes = tareas.filter((t) => !t.completada).length;

  return (
    <div className="todo-container">
      <h2>To-Do App</h2>

      {/* FORMULARIO */}
      <form onSubmit={agregarTarea}>
        <input
          type="text"
          placeholder="Nueva tarea"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
        />

        <button type="submit">Agregar</button>
      </form>

      {/* CONTADOR */}
      <p>Tareas pendientes: {tareasPendientes}</p>

      {/* LISTA */}
      <div>
        {tareas.length === 0 ? (
          <p>No hay tareas</p>
        ) : (
          tareas.map((t) => (
            <div key={t.id} className="tarea">
              <span
                onClick={() => toggleCompletada(t.id)}
                className={t.completada ? "completada" : ""}
              >
                {t.texto}
              </span>

              <button onClick={() => eliminarTarea(t.id)}>Eliminar</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TodoApp;