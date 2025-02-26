import { useRef, useState } from 'react';

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const time = useRef(null)

  function handleStart() {
    // Empieza a contar.
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(time.current);
    time.current = setInterval(() => {
      // Actualiza el tiempo actual cada 10 milisegundos.
      setNow(Date.now());
    }, 10);

  }

  function handleEnd() {
    clearInterval(time.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Tiempo transcurrido: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>
        Iniciar
      </button>
      <button onClick={handleEnd}>
        Detener
      </button>
    </>
  );
}