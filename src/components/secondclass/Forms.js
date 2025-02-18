import { useState } from 'react';

export default function Forms() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleFirstNameChange(e) {
    // Forma 1
    setPerson({
        ...person, // Hace una copia del objeto pasado para no perder las otras propiedades
        firstName: e.target.value        
    })
  }

  function handleLastNameChange(e) {
    // Forma 2
    setPerson({
        firstName: person.firstName,
        lastName: e.target.value,
        email: person.email,
    })
  }
  
  function handleChange(e) {
    // Forma 3
    // un solo controlador de evento usando nombre de propiedad dinámica
    // se agrega la propiedad name a cada input
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }  
  return (
    <>
        <h3>Objeto simple</h3>
        <label>
            Nombre:
            <input
                name="firstName"
                value={person.firstName}
                onChange={handleFirstNameChange}
            />
        </label>
        <label>
            Apellido:
            <input
                name="lastName"        
                value={person.lastName}
                onChange={handleChange}
            />
        </label>
        <label>
            Correo electrónico:
            <input
                name="email"
                value={person.email}
                onChange={handleChange}
            />
        </label>
        <p>
            {person.firstName}{' '}
            {person.lastName}{' '}
            ({person.email})
        </p>
    </>
  );
}
 