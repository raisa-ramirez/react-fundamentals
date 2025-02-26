import { useState } from 'react';

export default function Toggle() {
  const [isOnRef, setIsOnRef] = useState(false);

  return (
    <>
      <h3>Challenge #2</h3>
      <button onClick={() => {setIsOnRef(!isOnRef)}}>
        {isOnRef ? 'Encendido' : 'Apagado'}
      </button>
    </>    
  );
}