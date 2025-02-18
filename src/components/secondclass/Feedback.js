import { useState } from 'react';

export default function Feedback() {
//   const [name, setName] = useState('');
  let name = ''

  function handleClick() {
    // setName(prompt('¿Cuál es tu nombre?'));
    name = (prompt('¿Cuál es tu nombre?'));
    alert(`Hola, ${name}!`);
  }

  return (
    <>
        <h3>Challenge #4</h3>
        <button onClick={handleClick}>
            Saludar
        </button>
    </>     
  );
}
