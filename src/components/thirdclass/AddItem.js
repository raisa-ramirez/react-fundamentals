import { useState } from 'react';

export default function AddItem({ onAddItem }) {
  const [title, setTitle] = useState('');
  return (
    <>
      <input
        placeholder="Agregar ítem"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={() => {
        setTitle('');
        onAddItem(title);
      }}>Agregar</button>
    </>
  )
}
