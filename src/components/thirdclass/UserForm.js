import { use, useState } from 'react';

export default function UserForm() {
  const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        fullName: ''
  });

  function handleFirstNameChange(e) {
    setUserData({
        ...userData,
        firstName: e.target.value,
        fullName: userData.firstName + ' ' + userData.lastName
    })
  }

  function handleLastNameChange(e) {
    setUserData({
        ...userData,
        lastName: e.target.value,
        fullName: userData.firstName + ' ' + userData.lastName
    })
  }

  return (
    <>
      <h2>Vamos a registrarte</h2>
      <label>
        Nombre:{' '}
        <input
          value={userData.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Apellido:{' '}
        <input
          value={userData.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
       Su boleto será emitido a: <b>{userData.fullName}</b>
      </p>
    </>
  );
}
