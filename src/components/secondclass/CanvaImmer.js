import { useState } from 'react';
import { useImmer } from 'use-immer';
import Background from './Background.js';
import Box from './Box.js';

const initialPosition = {
  x: 0,
  y: 0
};

export default function CanvaImmer() {
  const [shape, setShape] = useImmer({
    color: 'purple',
    position: initialPosition
  });

  function handleMove(dx, dy) {
    // shape.position.x += dx;
    // shape.position.y += dy;
    setShape(draft => {
        draft.position.x += dx
        draft.position.y += dy
    })
  }

  function handleColorChange(e) {
    // setShape({
    //   ...shape,
    //   color: e.target.value
    // });
    setShape(draft => {
        draft.color = e.target.value
    })
  }

  return (
    <div style={{paddingTop:'20%', paddingBottom: '20%'}}>
      <h3>Challenge #3</h3>
      <select
        value={shape.color}
        onChange={handleColorChange}
      >
        <option value="purple">purple</option>
        <option value="aqua">aqua</option>
        <option value="green">green</option>
      </select>      
      <Background
        position={initialPosition}
      />
      <Box
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      >
        ¡Arrástrame!
      </Box>
    </div>
  );
}