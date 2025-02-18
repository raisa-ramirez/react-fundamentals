import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h3>Cola de actualizaciones</h3>
      <h1>{number}</h1>
      <button onClick={() => {
        // setNumber(n => n + 1);
        // setNumber(n => n + 1);
        // setNumber(n => n + 1);
        // setNumber(n => n + 2);

        setNumber(number + 4)
        setNumber(n => n + 1)
        setNumber(3)
      }}>+5</button>
    </>
  )
}
