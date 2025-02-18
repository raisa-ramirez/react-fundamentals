import { useState } from 'react';

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    
    setWalk(!walk);
    alert(((walk)?'Parar':'Caminar')+' es lo siguiente')
  }

  return (
    <>
        <h3>Challenge #5</h3>
      <button onClick={handleClick}>
        Cambia a {walk ? 'Parar' : 'Caminar'}
      </button>
      <h1 style={{
        color: walk ? 'darkgreen' : 'darkred'
      }}>
        {walk ? 'Caminar' : 'Parar'}
      </h1>
    </>
  );
}
