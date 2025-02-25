import { useState } from 'react';

export default function Fields() {
  const [reverse, setReverse] = useState(false);
  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={e => setReverse(e.target.checked)}
      />
      Invertir el orden
    </label>
  );
  if (reverse) {
    return (
      <>
        <h3>Challenge #2</h3>
        <Field label="Apellido" key={1}/> 
        <Field label="Nombre" key={0}/>
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <h3>Challenge #2</h3>
        <Field label="Nombre" key={0}/> 
        <Field label="Apellido" key={1}/>
        {checkbox}
      </>
    );    
  }
}

function Field({ label }) {
  const [text, setText] = useState('');
  return (
    <label>
      {label}:{' '}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={e => setText(e.target.value)}
      />
    </label>
  );
}