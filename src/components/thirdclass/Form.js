import { useState } from 'react';

export default function App() {
    const [showHint, setShowHint] = useState(false);
    return (
        <div>
            <h3>Challenge #1</h3>
            <p><i>Pista: ¿Tu ciudad favorita?</i></p>
            <Form />
            {
                showHint?                
                <button onClick={() => {
                    setShowHint(false);
                }}>Ocultar pista</button>
                :
                <button onClick={() => {
                    setShowHint(true);
                }}>Mostrar pista</button>
            }        
        </div>
    );
}

function Form() {
  const [text, setText] = useState('');
  return (
    <textarea
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}
