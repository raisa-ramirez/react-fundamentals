import { useEffect, useState } from 'react';
import { usePointerPosition } from './usePointerPosition.js';

function useDelayedValue(value, delay) {
    const [newPosition, setNewPosition] = useState(value);

    useEffect(() => {
        setTimeout(() => {
            setNewPosition(value);
        }, delay);
    }, [value, delay]);

    return newPosition;
}

export default function Canvas() {
  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue(pos1, 400);
  const pos3 = useDelayedValue(pos2, 300);
  const pos4 = useDelayedValue(pos3, 200);
  const pos5 = useDelayedValue(pos3, 100);
  return (
    <>
      <h3>Challenge #4</h3>
      <Dot position={pos1} opacity={1} />
      <Dot position={pos2} opacity={0.8} />
      <Dot position={pos3} opacity={0.6} />
      <Dot position={pos4} opacity={0.4} />
      <Dot position={pos5} opacity={0.2} />
    </>
  );
}

function Dot({ position, opacity }) {
  return (
    <div style={{
      position: 'absolute',
      backgroundColor: 'purple',
      borderRadius: '50%',
      opacity,
      transform: `translate(${position.x}px, ${position.y}px)`,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
    }} />
  );
}