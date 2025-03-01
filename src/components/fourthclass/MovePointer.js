import { useState, useEffect } from 'react';

export default function MovePointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canMove, setCanMove] = useState(true);

  function handleMove(e) {
    if (canMove) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
  }

  useEffect(() => {
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }
//   ,[handleMove] // Otra opción
    );

  return (
    <>
        <h3>Challenge #3</h3>
        <label>
            <input type="checkbox"
            checked={canMove}
            onChange={e => setCanMove(e.target.checked)} 
            />
            El punto puede moverse
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