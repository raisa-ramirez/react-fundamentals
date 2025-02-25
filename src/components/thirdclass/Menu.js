import { useState } from 'react';

const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crujiente de algas', id: 1 },
  { title: 'barra de granola', id: 2 },
];

export default function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  const selectedItem = items.find(i => i.id===selectedId)

  return (
    <>
      <h2>¿Cuál es tu merienda de viaje?</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.title}
            {' '}
            <button onClick={() => {
              setSelectedId(item.id);
            }}>Seleccionar</button>
          </li>
        ))}
      </ul>
      <p>Seleccionaste {selectedItem.title}.</p>
      <p>Seleccionaste {items[selectedId].title}.</p>
    </>
  );
}