import { useState, useEffect } from 'react';

export default function Form() {
    const [show, setShow] = useState(false);
    return (
      <>
        <h3>Challenge #2</h3> 
        <button onClick={() => setShow(s => !s)}>{show ? 'Ocultar' : 'Mostrar'} contador</button>
        <br />
        <hr />
        {show && <MyCounter />}
      </>
    );
}

function MyCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {   
    function onTick() {
        setCount(count => count + 1);
        
    }
    let intervalId = setInterval(onTick, 1000);
    return () => {
        clearInterval(intervalId)
    }
  }, [count]);

  return <h1>{count}</h1>;
}