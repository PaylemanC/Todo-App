import React from 'react';
import { useLayoutEffect } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

// const defaultTodos = [
//   { text: '+ Crea tareas a partir del botón "Añade una tarea".', completed: false },
//   { text: '✔ Completa tareas clickeando el botón a la izquierda de cada tarea.', completed: false },
//   { text: 'X Elimina tareas clickeando el botón a la derecha de cada tarea.', completed: false },
// ]
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');


function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1'); 
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  // Lista de TODOs.
  const [todos, setTodos] = React.useState(parsedTodos); 

  // Guardar TODOs en localStorage.
  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  // Contador de tareas & tareas completadas.
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length; 

  //Buscador.
  const [searchValue, setSearchValue] = React.useState('');
  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  })

  // Eliminar to do.
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
    saveTodos(newTodos);
  }

  return (
    <>
      <div className="banner">
        <h1>Tus Tareas</h1>
        <TodoCounter completed={completedTodos} total={totalTodos}/>
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="list-container">
        <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed} 
              onDeleted={() => deleteTodo(todo.text) }
            />
          ))}
        </TodoList>
      </div>
      <div className="btn-container">
        <CreateTodoButton/>
      </div>
    </>
  );
}

export default App;
