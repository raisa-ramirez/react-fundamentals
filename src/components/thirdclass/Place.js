import { useState } from 'react'
import {initialTravelPlan} from './places'

export default function Place() {
    const [places, setPlaces] = useState(initialTravelPlan)
    let root = 0
    const childIds = places[root].childIds

    const deletePlace = (actual, parentId) => {
        let childIds = places[parentId].childIds

        setPlaces({
            ...places,
            [parentId]: {
                ...places[parentId],
                childIds: childIds.filter(item => item !== actual) 
            }
        })
    }

    return <>
        <h2>Lugares a visitar</h2>
        <ol>
            {
                childIds.map(index => 
                    <List 
                    key={index} 
                    actual={index} 
                    all={places}
                    parent={root}
                    onDelete={deletePlace}/>
                )
            }   
        </ol>     
    </>
}

const List = ({actual, all, parent, onDelete}) => {
    let place = all[actual]
    let childIds = place.childIds
    
    return <li>{place.title}{' '}
        <button onClick={() => onDelete(actual, parent)}>Visitado</button>
        <ul>
            {
                childIds.map(index => 
                <List 
                    key={index} 
                    actual={index} 
                    all={all}
                    parent={place.id}
                    onDelete={onDelete}
                />)
            }
        </ul>
    </li>
}