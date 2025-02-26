import { useRef } from "react"

export default function Input(){
    const myInput = useRef(null)

    return <>
        <input ref={myInput}/>
        <button onClick={() => myInput.current.focus()}>Hacer focus</button>
    </>
}