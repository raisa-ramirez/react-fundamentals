import { useState } from 'react';

export default function Panel({ children }) {
  const [open, setOpen] = useState(true);
  return (
    <section className="panel">
      <button onClick={() => setOpen(!open)}>
        {open ? 'Contraer' : 'Expandir'}
      </button>
      {open && children}
    </section>
  );
}
