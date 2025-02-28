import { useState, useEffect } from 'react';

export default function SubmitForm() {
  const [showForm, setShowForm] = useState(true);
  const [message, setMessage] = useState('');

//   Error
//   useEffect(() => {
//     if (!showForm) {
//       sendMessage(message);
//     }
//   }, [showForm, message]);

  function handleSubmit(e) {
    e.preventDefault();
    setShowForm(false);   
    sendMessage(message)
  }

  if (!showForm) {
    return (
      <>
        <h3>Challenge #4</h3> 
        <h1>¡Gracias por usar nuestros servicios!</h1>
        <button onClick={() => {
          setMessage('');
          setShowForm(true);
        }}>
          Abrir chat
        </button>
      </>
    );
  }

  return (
    <>
        <h3>Challenge #4</h3> 
        <form onSubmit={handleSubmit}>
            <textarea
                placeholder="Mensaje"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <button type="submit" disabled={message === ''}>
                Enviar
            </button>
        </form>
    </>    
  );
}

function sendMessage(message) {
  console.log('Enviando mensaje: ' + message);
}