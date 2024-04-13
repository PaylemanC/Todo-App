import React from 'react';
import './TodoForm.css';

function TodoForm() {
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <label className="todo-form--title">Escribe tu nuevo TODO.</label>
            <textarea className="todo-form--content" placeholder="Tarea para hoy..." />
            <button className="todo-form--add-btn" type="submit">Añadir</button>   
        </form>
    );
}

export { TodoForm };