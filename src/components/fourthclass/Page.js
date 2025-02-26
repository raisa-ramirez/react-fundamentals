import { useRef } from "react";

export default function Page() {
    const input = useRef(null)
    return (
      <>
        <h3>Challenge #2</h3> 
        <nav>
          <button onClick={() => input.current.focus()}>Buscar</button>
        </nav>
        <input
          placeholder="¿Buscando algo?"
          ref={input}
        />
      </>
    );
}  