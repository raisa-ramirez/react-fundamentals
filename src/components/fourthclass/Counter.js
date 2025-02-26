import { useRef } from 'react'

export default function Counter() {
    let number = useRef(0)

    const increaseNum = () => {
        number.current = number.current + 1
        alert('Clic número '+number.current)
    }
    return <button onClick={() => increaseNum()}>Hazme clic!</button>
}