import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error
    } = useLocalStorage('TODOS_V1', []);

    // Contador de tareas & tareas completadas.
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length; 

    //Buscador.
    const [searchValue, setSearchValue] = React.useState('');
    const searchedTodos = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(searchValue.toLowerCase());
    })

    // Agregar to do. 
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.unshift({
            text,
            completed: false
        })
        saveTodos(newTodos);
    } 

    // Eliminar to do.
    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo => todo.text === text);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            deleteTodo
        }}>
            { children } 
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }