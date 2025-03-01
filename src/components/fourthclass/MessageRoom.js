import { useState, useEffect } from 'react';
import createConnection from './chatAPI.js';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  },[roomId]);

  return (
    <>
        <h3>Challenge #1</h3>
        <h1>¡Bienvenido a la sala {roomId}!</h1>
        <input
            value={message}
            onChange={e => setMessage(e.target.value)}
        />
    </>
  );
}

export default function App() {
  const [roomId, setRoomId] = useState('general');
  return (
    <>
      <label>
        Escoge una sala:{' '}
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
      <ChatRoom roomId={roomId} />
    </>
  );
}
