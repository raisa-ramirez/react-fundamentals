import { useEffect } from 'react'
import createConnection from './chatAPI'


export default function ChatApp() {
    useEffect(() => {
        const chatService = createConnection()
        chatService.connect()
        return () => chatService.disconnect()
    },[])

    return <>
        <h2>Welcome to my chat!</h2>    
    </>
}