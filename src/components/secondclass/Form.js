import { use, useState } from "react";

export default function Form() {
    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')
  
    function handleFirstNameChange(e) {
      setFirstName(e.target.value);
    }
  
    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }
  
    function handleReset() {
        setFirstName('')
        setLastName('')
    }
  
    return (
        <>
            <h3>Challenge #2</h3>
            <form onSubmit={e => e.preventDefault()}>
                <input
                placeholder="Nombre"
                value={firstName}
                onChange={handleFirstNameChange}
                />
                <input
                placeholder="Apellido"
                value={lastName}
                onChange={handleLastNameChange}
                />
                <h1>Hola, {firstName} {lastName}</h1>
                <button onClick={handleReset}>Reiniciar</button>
            </form>
        </>      
    );
}  