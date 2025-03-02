import { useState, useEffect } from 'react';

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('✅ Creando el intervalo');
    const id = setInterval(() => {
      console.log('⏰ Tic del intervalo');
      setCount(c => c + 1);
    }, 1000);
    return () => {
      console.log('❌ Borrando el intervalo');
      clearInterval(id);
    };
  }, [setInterval]);

  return <>
        <h3>Challenge #1</h3>
        <h1>Contador: {count}</h1>
    </>
}