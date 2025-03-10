import { useState, useEffect } from 'react';

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canMove, setCanMove] = useState(true);

  useEffect(() => {    
    function handleMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    if(canMove){
      window.addEventListener('pointermove', handleMove); 
      return () => window.removeEventListener('pointermove', handleMove);
    }

  }, [canMove]);

  return (
    <>
        <h3>Challenge #2</h3>
        <label>
            <input type="checkbox"
            checked={canMove}
            onChange={e => setCanMove(e.target.checked)} 
            />
            El punto puede moverses
        </label>
        <hr />
        <div style={{
            position: 'absolute',
            backgroundColor: 'pink',
            borderRadius: '50%',
            opacity: 0.8,
            transform: `translate(${position.x}px, ${position.y}px)`,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 40,
            height: 40,
        }} />
    </>
  );
}