import React from 'react';
import './AppUI.css';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoContext } from '../contexts/TodoContext';
import { ModalContext } from '../contexts/ModalContext';

function AppUI() {
    const { loading, error, totalTodos, searchedTodos, deleteTodo } = React.useContext(TodoContext);
    const { openModal } = React.useContext(ModalContext); 

    return (
        <>
            <div className="banner">
                <h1>Tus Tareas</h1>
                <TodoCounter/>
                <TodoSearch/>
            </div>
            <div className="list-container">
                { loading && <TodosLoading/> }
                { error && <p className="message">Ocurrió un error inesperado.</p> }
                {!loading && (
                    (searchedTodos.length === 0 && totalTodos <= 0) ? (
                        <p className="message">¡Crea tu primer TODO!</p>) 
                    : 
                    ((searchedTodos.length === 0 && totalTodos > 0) && <p className="message">Ningún TODO coincide con la búsqueda.</p>)
                )}
                <TodoList>
                {searchedTodos.map(todo => (
                    <TodoItem 
                    key={todo.id} 
                    text={todo.text} 
                    completed={todo.completed} 
                    onDeleted={() => deleteTodo(todo.id) }
                    />
                ))}
                </TodoList>
            </div>
            <div className="btn-container">
                <CreateTodoButton/>
            </div>
            {openModal && (
            <Modal>
              <TodoForm/>
            </Modal>
          )}
        </>
    );
}

export { AppUI };