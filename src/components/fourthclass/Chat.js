import { useRef, useState } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  let timeoutID = useRef(null);

  function handleSend() {
    setIsSending(true);
    timeoutID.current = setTimeout(() => {
      alert('¡Enviado!');
      setIsSending(false);
    }, 3000);
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(timeoutID.current);
  }

  return (
    <>
        <h3>Challenge #1</h3> 
        <input
            disabled={isSending}
            value={text}
            onChange={e => setText(e.target.value)}
        />
        <button
            disabled={isSending}
            onClick={handleSend}>
            {isSending ? 'Enviando...' : 'Enviar'}
        </button>
        {isSending &&
            <button onClick={handleUndo}>
            Detener el envio
            </button>
        }
    </>
  );
}
