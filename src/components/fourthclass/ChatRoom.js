import { useEffect, useState } from "react";
import {createConnection} from './room'

function Room({sala}){
    let service = createConnection('http://localhost:8000/api/', sala)
    useEffect(() => {
        service.connect()
        return () => service.disconnect()
    })
    return <h1>¡Bienvenido a la sala {sala}!</h1>
}

export default function ChatRoom() {
    const [sala, setSala] = useState('General')
    const [show, setShow] = useState(false);

    return <>
        Selecciona la sala de chat: {' '}
        <select value={sala} onChange={e => setSala(e.target.value)}>
            <option value="General">General</option>
            <option value="Viaje">Viaje</option>
            <option value="Música">Música</option>
        </select>
       
        <button onClick={() => setShow(!show)}>{!show?'Abrir chat':'Cerrar chat'}</button>
        {show?<Room sala={sala}/>:''}
    </>
}