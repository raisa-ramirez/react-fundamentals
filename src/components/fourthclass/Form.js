import { useRef, useState, useEffect } from 'react';

export default function Form() {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState('Taylor');
  const [lastName, setLastName] = useState('Swift');
  const [upper, setUpper] = useState(false);
  const name = firstName + ' ' + lastName;
  
  return (
    <>
      <button onClick={() => setShow(s => !s)}>{show ? 'Ocultar' : 'Mostrar'} formulario</button>
      <br />
      <hr />
      {show && (
        <>
          <label>
            Nombre:
            <MyInput
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              shouldFocus={true}
            />
          </label>
          <label>
            Apellido:
            <MyInput
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              shouldFocus={false}
            />
          </label>
          <p>Hola, <b>{upper ? name.toUpperCase() : name}</b></p>
        </>
      )}
    </>
  );
}

function MyInput({ shouldFocus, value, onChange }) {
    const ref = useRef(null);
  
    useEffect(() => {
        if(shouldFocus){
            ref.current.focus()
        }
    }, [shouldFocus]);
  
    return (
      <input
        ref={ref}
        value={value}
        onChange={onChange}
      />
    );
}