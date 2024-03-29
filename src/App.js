import React from 'react';
import { useLayoutEffect } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import logo from './platzi.webp';
import './App.css';

const defaultTodos = [
  { text: '+ Crea tareas a partir del botón "Añade una tarea".', completed: false },
  { text: '✔ Completa tareas clickeando el botón a la izquierda de cada tarea.', completed: false },
  { text: 'X Elimina tareas clickeando el botón a la derecha de cada tarea.', completed: false },
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos); 

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length; 

  return (
    <>
      <div class="banner">
        <h1>Tus Tareas</h1>
        <TodoCounter completed={completedTodos} total={totalTodos}/>
        <TodoSearch/>
      </div>
      <div class="list-container">
        <TodoList>
          {defaultTodos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
          ))}
        </TodoList>
      </div>
      <div class="btn-container">
        <CreateTodoButton/>
      </div>
    </>
  );
}

export default App;
