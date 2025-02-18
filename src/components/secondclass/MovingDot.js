import { useState } from 'react';

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <div
      onPointerMove={e => {
        setPosition({
          x : e.nativeEvent.offsetX,
          y : e.nativeEvent.offsetY
        })
      }}
      style={{
        border: '1px solid blue',
        position: 'relative',
        width: '200px',
        height: '200px',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x-10}px, ${position.y-10}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
  );
}
