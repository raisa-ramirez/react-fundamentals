import { useState, useEffect, useMemo } from 'react';

export default function TodoListTask() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);
  const [text, setText] = useState('');
  // const [visibleTodos, setVisibleTodos] = useState([]);

  const visibleTodos = useMemo(
    () => getVisibleTodos(todos, showActive),
    [todos, showActive]
  );

  // useEffect(() => {
  //   setVisibleTodos(getVisibleTodos(todos, showActive));
  // }, [todos, showActive]);

  function handleAddClick() {
    setText('');
    setTodos([...todos, createTodo(text)]);
  }

  return (
    <>
      <h3>Challenge #2</h3> 
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={e => setShowActive(e.target.checked)}
        />
        Mostrar solo tareas activas
      </label>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAddClick}>
        Agregar
      </button>
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </>
  );
}

let nextId = 0;
let calls = 0;

function getVisibleTodos(todos, showActive) {
  console.log(`getVisibleTodos() se llamó ${++calls} veces`);
  const activeTodos = todos.filter(todo => !todo.completed);
  const visibleTodos = showActive ? activeTodos : todos;
  return visibleTodos;
}

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
