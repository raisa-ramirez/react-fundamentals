import { useRef } from "react";

function DebouncedButton({ onClick, children }) {
    let timeoutID = useRef(null);
    return (
        <button onClick={() => {
        clearTimeout(timeoutID.current);
        timeoutID.current = setTimeout(() => {
            onClick();
        }, 1000);
        }}>
        {children}
        </button>
    );
}

export default function Dashboard() {
  return (
    <>
        <h3>Challenge #3</h3>  
        <DebouncedButton
            onClick={() => alert('¡Cohete lanzado!')}
        >
            Lanza el cohete
        </DebouncedButton>
        <DebouncedButton
            onClick={() => alert('¡Sopa hervida!')}
        >
            Hierve la sopa
        </DebouncedButton>
        <DebouncedButton
            onClick={() => alert('¡Canción de cuna cantada!')}
        >
            Canta una canción de cuna
        </DebouncedButton>
    </>
  )
}