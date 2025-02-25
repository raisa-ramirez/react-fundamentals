import { useState } from 'react';
import { letters } from './data2.js';
import Letter from './Letter2.js';

export default function Mail() {
  const [allLetters, setAllLetters] = useState(letters)
  const selectedCount = allLetters.filter(letter => letter.isSelected).length

  function handleToggle(toggledId) {
    setAllLetters(allLetters.map(letter => {
      if(letter.id===toggledId){
        return {
          ...letter,
          isSelected: !letter.isSelected
        }        
      }
      return letter
    }))
  }

  return (
    <>
      <h3>Challenge #4</h3>
      <h2>Buzón de entrada</h2>
      <ul>
        {allLetters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={letter.isSelected}
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            Has seleccionado {selectedCount} cartas
          </b>
        </p>
      </ul>
    </>
  );
}
