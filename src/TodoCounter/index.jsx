import './TodoCounter.css';

function TodoCounter({ completed, total }) {
    return (
      <h2>Has completado <span>{completed}</span> de <span>{total}</span> tareas hoy.</h2>
    );
}

export { TodoCounter };