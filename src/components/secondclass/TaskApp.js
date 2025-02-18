import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Comprar leche', done: true },
  { id: 1, title: 'Comer tacos', done: false },
  { id: 2, title: 'Preparar té', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title) {
    let newTask = {
      'id': nextId++,
      'title': title,
      'done': false,
    }
    setTodos([
      ...todos,
      newTask
    ])
    // Error
    // todos.push({
    //   id: nextId++,
    //   title: title,
    //   done: false
    // });
  }

  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map(el => {
        if(el.id == nextTodo.id){
          return nextTodo       
        }
        return el
      })
    )
    // Error
    // const todo = todos.find(t =>
    //   t.id === nextTodo.id
    // );
    // todo.title = nextTodo.title;
    // todo.done = nextTodo.done;
  }

  function handleDeleteTodo(todoId) {
    const tasks = todos.filter(t => t.id != todoId)
    setTodos(tasks)

    // Error
    // const index = todos.findIndex(t =>
    //   t.id === todoId
    // );
    // todos.splice(index, 1);
  }

  return (
    <>
      <h3>Challenge #3</h3>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
