import { useState, useEffect } from 'react';
import {
  createEncryptedConnection,
  createUnencryptedConnection,
} from './chatAPI.js';

export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [isEncrypted, setIsEncrypted] = useState(false);

  return (
    <>
        <h3>Challenge #4</h3>
        <label>
            Selecciona una sala de chat:{' '}
            <select
            value={roomId}
            onChange={e => setRoomId(e.target.value)}
            >
            <option value="general">general</option>
            <option value="viaje">viaje</option>
            <option value="música">música</option>
            </select>
        </label>
        <label>
            <input
            type="checkbox"
            checked={isEncrypted}
            onChange={e => setIsEncrypted(e.target.checked)}
            />
            Activar encriptación
        </label>
        <hr />
        <ChatRoom
            roomId={roomId}
            isEncrypted={isEncrypted}        
        />
    </>
  );
}

function ChatRoom({ roomId, isEncrypted }) {
  useEffect(() => {
    const createConnection = isEncrypted ? createEncryptedConnection:createUnencryptedConnection
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId, isEncrypted]);

  return <h1>¡Bienvenido a la sala {roomId}!</h1>;
}