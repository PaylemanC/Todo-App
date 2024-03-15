import { useLayoutEffect } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import logo from './platzi.webp';
import './App.css';

const defaultTodos = [
  { text: 'Hacer 45min de programación diaria', completed: true },
  { text: 'Terminar curso de React.js', completed: false },
]

function App() {
  return (
    <>
      <TodoCounter completed="1" total="2"/>

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton/>
    </>
  );
}

export default App;
