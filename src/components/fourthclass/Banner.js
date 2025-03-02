import { useState, useEffect, useRef } from 'react';
import { experimental_useEffectEvent as useEffectEvent } from 'react';
import { FadeInAnimation } from './animation.js';

function Welcome({ duration }) {
  const ref = useRef(null);

  const animateStart = (animation) => {
    animation.start(duration)
  }

  useEffect(() => {
    const animation = new FadeInAnimation(ref.current);
    animateStart(animation)
    return () => {
      animation.stop();
    };
  }, []);

  return (
    <h1
      ref={ref}
      style={{
        opacity: 0,
        color: 'white',
        padding: 50,
        textAlign: 'center',
        fontSize: 50,
        backgroundImage: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'
      }}
    >
      Bienvenido
    </h1>
  );
}

export default function Banner() {
  const [duration, setDuration] = useState(1000);
  const [show, setShow] = useState(false);

  return (
    <>
        <h3>Challenge #2</h3> 
        <label>
            <input
            type="range"
            min="100"
            max="3000"
            value={duration}
            onChange={e => setDuration(Number(e.target.value))}
            />
            <br />
            Duración de la atenuación: {duration} ms
        </label>
        <button onClick={() => setShow(!show)}>
            {show ? 'Remover' : 'Mostrar'}
        </button>
        <hr />
        {show && <Welcome duration={duration} />}
        </>
  );
}