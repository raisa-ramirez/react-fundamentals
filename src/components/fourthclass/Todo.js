import { useState, useEffect } from 'react';

export default function Todo() {
  const [showActive, setShowActive] = useState(false);
  const [todos, setTodos] = useState(initialTodos);
  let incompleted = todos.filter(t => !t.completed)
  const visibleTodos = showActive ? incompleted : todos;

  return (
    <>
        <h3>Challenge #1</h3>
        <label>
            <input
            type="checkbox"
            checked={showActive}
            onChange={e => setShowActive(e.target.checked)}
            />
            Mostrar solo tareas activas
        </label>
        <NewTodo onAdd={newTodo => setTodos([...todos, newTodo])} />
        <ul>
            {visibleTodos.map(todo => (
            <li key={todo.id}>
                {todo.completed ? <s>{todo.text}</s> : todo.text}
            </li>
            ))}
        </ul>
            { 
            <footer>{incompleted.length} tareas restantes</footer>
            }
        </>
  );
}

function NewTodo({ onAdd }) {
  const [text, setText] = useState('');

  function handleAddClick() {
    setText('');
    onAdd(createTodo(text));
  }

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAddClick}>
        Agregar
      </button>
    </>
  );
}


// todos,js
let nextId = 0;

function createTodo(text, completed = false) {
  return {
    id: nextId++,
    text,
    completed
  };
}

const initialTodos = [
  createTodo('Comprar manzanas', true),
  createTodo('Comprar naranjas', true),
  createTodo('Comprar zanahorias'),
];