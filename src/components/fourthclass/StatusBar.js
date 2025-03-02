import { useEffect, useState } from "react"


const useOnlineStatus = () => {
    const [status, setStatus] = useState(true)

    useEffect(()=>{
        function setOnline() {
            setStatus(true)
        }
        function setOffline() {
            setStatus(false)
        }

        window.addEventListener('online', setOnline)
        window.addEventListener('offline', setOffline)

        return () => {
            window.removeEventListener('online', setOnline)
            window.removeEventListener('offline', setOffline)
        }
    })

    return status
}

export default function StatusBar(){
    const getStatus = useOnlineStatus()    

    return <>
       <h1>{getStatus?'Online ✅':'Offline ❌'}</h1> 
    </>
}