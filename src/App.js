import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from './contexts/TodoContext';
import { ModalProvider } from './contexts/ModalContext';
import './App.css';

// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   { text: '+ Crea tareas a partir del botón "Añade una tarea".', completed: false },
//   { text: '✔ Completa tareas clickeando el botón a la izquierda de cada tarea.', completed: false },
//   { text: 'X Elimina tareas clickeando el botón a la derecha de cada tarea.', completed: false },
// ]
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function App() {
  return (
    <TodoProvider>
      <ModalProvider>
        <AppUI/>
      </ModalProvider>
    </TodoProvider>
  );
}

export default App;
