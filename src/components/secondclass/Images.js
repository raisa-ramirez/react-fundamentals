import { useState } from 'react';
import { sculptureList } from './list.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
    if(index==sculptureList.length-1){
      setIndex(0)
    }
  }

  function handlePrevClick() {
    setIndex(index-1)
    if(index==0){
      setIndex(sculptureList.length-1)
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <h3>Challenge #1</h3>
      <button onClick={handleNextClick}>
        Siguiente
      </button>
      <button onClick={handlePrevClick}>
        Anterior
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        por {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} de {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Ocultar' : 'Mostrar'} detalles
      </button>      
      {showMore && <p>{sculpture.description}</p>}
    </>
  );
}