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

    //Generador de id de todo. 
    const generateRandomKey = () => {
        return Math.floor(Math.random() * 1000000); 
    };   

    // Agregar to do. 
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.unshift({
            id: generateRandomKey(),
            text,
            completed: false
        })
        saveTodos(newTodos);
    } 

    // Eliminar to do.
    const deleteTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo => todo.id === id);
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