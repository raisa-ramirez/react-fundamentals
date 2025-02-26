import { useState, useRef } from 'react';

export default function Message() {
    const [texto, setTexto] = useState('');
    const text = useRef(texto)

    function handleSend() {
        setTimeout(() => {
            alert('Enviando: ' + text.current);
        }, 3000);
    }

    function handleChange(e){
        setTexto(e.target.value)
        text.current = e.target.value
    }

    return (
        <>
        <h3>Challenge #4</h3>
        <input
            value={texto}
            onChange={e => handleChange(e)}
        />
        <button
            onClick={handleSend}>
            Enviar
        </button>
        </>
    );
}