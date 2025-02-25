import { useState } from 'react';

export default function SyncedInputs() {
    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }
    return (
        <>
        <h3>Challenge #1</h3> 
        <Input label="Primera entrada" text={text} onChange={handleChange}/>
        <Input label="Segunda entrada" text={text} onChange={handleChange}/>
        </>
    );
}

function Input({ label, text, onChange }) {
  

  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={onChange}
      />
    </label>
  );
}
