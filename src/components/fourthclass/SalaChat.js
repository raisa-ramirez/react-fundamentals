import { useEffect } from 'react';
import { createConnection } from './salaAPI.js';
import { useState } from 'react';

export default function SalaChat() {
  const [isDark, setIsDark] = useState(false);
  const [roomId, setRoomId] = useState('general');
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  const options = {
    serverUrl: serverUrl,
    roomId: roomId
  };

  return (
    <div className={isDark ? 'dark' : 'light'}>
        <h3>Challenge #3</h3>
        <button onClick={() => setIsDark(!isDark)}>
            Alternar tema
        </button>
        <label>
            Server URL:{' '}
            <input
            value={serverUrl}
            onChange={e => setServerUrl(e.target.value)}
            />
        </label>
        <label>
            Escoge la sala de chat:{' '}
            <select
            value={roomId}
            onChange={e => setRoomId(e.target.value)}
            >
            <option value="general">general</option>
            <option value="viaje">viaje</option>
            <option value="música">música</option>
            </select>
        </label>
        <hr />
        <ChatRoom options={options} />
    </div>
  );
}

function ChatRoom({ options }) {
    const {serverUrl, roomId} = options
    useEffect(() => {
        const connection = createConnection({serverUrl: serverUrl, roomId: roomId});
        connection.connect();
        return () => connection.disconnect();
    }, [serverUrl, roomId]);

    return <h1>¡Bienvenido a la sala {options.roomId}!</h1>;
}