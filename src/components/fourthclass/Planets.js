import { useState, useEffect } from 'react';
import { fetchData } from './apiplanets.js';

export default function Planets() {
  const [planetList, setPlanetList] = useState([])
  const [planetId, setPlanetId] = useState('');

  const [placeList, setPlaceList] = useState([]);
  const [placeId, setPlaceId] = useState('');

  useEffect(() => {
    let ignore = false;
    fetchData('/planets').then(result => {
      if (!ignore) {
        let planet = planetId===''?result[0].id:planetId
        setPlanetList(result);
        setPlanetId(planet);        
      }
    });  

    return () => ignore = true
  }, [planetId]);


  useEffect(() => {
    if(planetId === ''){
        return
    }
    let ignore = false
    if(!ignore) {
        fetchData('/planets/'+planetId+'/places').then(response => {
            setPlaceList(response)
            setPlaceId(response[0].id)
        })
    }  
        return () => ignore = true
},[planetId]);

  return (
    <>
        <h3>Challenge #5</h3>
        <label>
            Elige un planeta:{' '}
            <select value={planetId} onChange={e => {
            setPlanetId(e.target.value);
            }}>
            {planetList.map(planet =>
                <option key={planet.id} value={planet.id}>{planet.name}</option>
            )}
            </select>
        </label>
        <br/>
        <label>
            Elige un lugar:{' '}
            <select value={placeId} onChange={e => {
            setPlaceId(e.target.value);
            }}>
            {placeList.map(place =>
                <option key={place.id} value={place.id}>{place.name}</option>
            )}
            </select>
        </label>
        <hr />
        <p>Estás yendo a: {placeId || '???'} en {planetId || '???'} </p>
    </>
  );
}