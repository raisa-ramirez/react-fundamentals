import { useState } from 'react';

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  function handlePlusClick() {
    // player.score++;
    setPlayer({
        ...player,
        score: player.score + 1
    })
  }

  function handleFirstNameChange(e) {
    setPlayer({
        ...player,
        firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
        ...player,
        lastName: e.target.value
    });
  }

  return (
    <>
        <h3>Challenge #1</h3>
        <label>
            Score: <b>{player.score}</b>{' '}
            <button onClick={handlePlusClick}>
            +1
            </button>
        </label>
        <br/>
        <label>
            Nombre: {' '}
            <input
            value={player.firstName}
            onChange={handleFirstNameChange}
            />
        </label>
        <br/>
        <label>
            Apellido: {' '}
            <input
            value={player.lastName}
            onChange={handleLastNameChange}
            />
        </label>
    </>
  );
}