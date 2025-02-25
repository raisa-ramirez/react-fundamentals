import { useState } from 'react';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const hasNext = index < images.length - 1;

  function handleClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  let image = images[index];
  return (
    <>
        <h3>Challenge #4</h3>
        <button onClick={handleClick}>Siguiente</button>
        <h3>
            Imagen {index + 1} de {images.length}
        </h3>
        <img src={image.src} key={index + 1}/>
        <p>
            {image.place}
        </p>
    </>
  );
}

let images = [{
  place: 'Penang, Malasia',
  src: 'https://randomuser.me/api/portraits/men/84.jpg'
}, {
  place: 'Lisboa, Portugal',
  src: 'https://randomuser.me/api/portraits/men/85.jpg'
}, {
  place: 'Bilbao, España',
  src: 'https://randomuser.me/api/portraits/men/87.jpg'
}, {
  place: 'Valparaíso, Chile',
  src: 'https://randomuser.me/api/portraits/men/86.jpg'
}, {
  place: 'Schwyz, Suiza',
  src: 'https://randomuser.me/api/portraits/men/88.jpg'
}, {
  place: 'Praga, Chequia',
  src: 'https://randomuser.me/api/portraits/men/89.jpg'
}, {
  place: 'Liubliana, Eslovenia',
  src: 'https://randomuser.me/api/portraits/men/90.jpg'
}];