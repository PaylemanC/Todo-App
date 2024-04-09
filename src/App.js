import React from 'react';
// import { useLayoutEffect } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodosLoading } from './TodosLoading';
import { useLocalStorage } from './hooks/useLocalStorage';
import './App.css';

// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   { text: '+ Crea tareas a partir del botón "Añade una tarea".', completed: false },
//   { text: '✔ Completa tareas clickeando el botón a la izquierda de cada tarea.', completed: false },
//   { text: 'X Elimina tareas clickeando el botón a la derecha de cada tarea.', completed: false },
// ]
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function App() {
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

  // Eliminar to do.
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
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
          { loading && <TodosLoading/> }
          { error && <p className="message">Ocurrió un error inesperado.</p> }
          { (!loading && searchedTodos.length === 0) && <p className="message">¡Crea tu primer TODO!</p>}
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
