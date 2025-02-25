import { useContext, useState } from 'react';
import { myplaces } from './myplaces';
import { ImageContext } from './context/ImageContext';

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 100 : 60;

  return (
    <>
      <h3>Challenge #1</h3> 
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Usa imágenes grandes
      </label>
      <hr />
      <List imageSize={imageSize}/>
    </>
  )
}

function List({imageSize}) {
  const listItems = myplaces.map(place =>    
        <li key={place.id} className='li'>
        <Place
            place={place}
        />
        </li>
  );
  return <ul className='pic'>
    <ImageContext.Provider value={imageSize}>        
      {listItems}        
    </ImageContext.Provider>
    </ul>;
}

function Place({ place }) {
  return (
    <>
      <PlaceImage
        place={place}
      />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }) {
    let imageSize = useContext(ImageContext)
    return (
        <img
        src={getImageUrl()}
        alt={place.name}
        width={imageSize}
        height={imageSize}
        className='avatar'
        />
    );
}

function getImageUrl() {
    return (
      'https://randomuser.me/api/portraits/men/41.jpg'
    );
}