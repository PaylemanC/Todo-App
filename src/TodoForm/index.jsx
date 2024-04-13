import React from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { ModalContext } from '../contexts/ModalContext';
import './TodoForm.css';

function TodoForm() {
    const { addTodo } = React.useContext(TodoContext);
    const { setOpenModal } = React.useContext(ModalContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    
    return (
        <form onSubmit={onSubmit}>
            <label className="todo-form--title">Escribe tu nuevo TODO.</label>
            <textarea 
                className="todo-form--content" 
                placeholder="Tarea para hoy..." 
                value={newTodoValue}
                onChange={onChange}
                required/>
            <button className="todo-form--add-btn" type="submit">Añadir</button>   
        </form>
    );
}

export { TodoForm };