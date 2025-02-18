import { useState } from "react"
import BucketList from "./BucketList";
import BucketList2 from "./BucketList2";

export default function Arreglos(){
    let [name, setName] = useState('')
    let [artists, setArtists] = useState([])
    const [counters, setCounters] = useState([0,0,0]);

    const changeName = (e) => {
        setName(e.target.value)
    }

    const handleAdd = () => {
        let data = { 'id': artists.length + 1, 'name': name }
        // Opción 1
        // setArtists(artists.concat([data]))

        // Opción 2
        setArtists([
            ...artists, 
            data
        ])
    }

    const handleDelete = (id) => {
        setArtists(artists.filter(art => art.id != id))
    }

    const handleReplacement = (el, i) => {
        let newVal = counters.map((val, index) => {
            if(index==i){
                return val +1
            }
            return val
        })
        setCounters(newVal)
    }

    const handleInsertAt = () => {
        let index = 1
        let newArtist = {'id': artists.length+1, 'name': name}
        setArtists([
            ...artists.slice(0, index),
            newArtist,
            ...artists.slice(index)
        ])
    }

    const handleReverse = () => {
        let normalArray = [...artists]
        normalArray = normalArray.reverse()
        // console.log(normalArray)
        setArtists(normalArray)
    }

    const handleSort = () => {
        let normalArray = [...artists]
        normalArray = normalArray.sort((a, b) => {
            if(a.name < b.name) {
                return -1;
            } else {
                return 1;
            }
        })
        setArtists(normalArray)
    }

    return <>
        <h3>Añadir elementos a un array de estado</h3>
        <p>Lista de escultores</p>
        <input onChange={changeName}></input>
        <button onClick={handleAdd}>Añadir</button>
        <h3>Eliminar elementos a un array de estado</h3>        
        <ul>
            {
                artists.map(el => (
                    <li key={el.id}>{el.name}{' '}
                        <button onClick={()=> handleDelete(el.id)}>Eliminar</button>
                    </li>
                ))
            }       
        </ul>  
        <h3>Reemplazar elementos en un array de estado</h3>
        <ul>
            {
                counters.map((el, i) => (
                    <li key={i}>{el}{' '}
                        <button onClick={() => handleReplacement(el, i)}>+1</button>
                    </li>
                ))
            }
        </ul>
        <h3>Insertar en una posición en un array de estado</h3>
        <input onChange={changeName}></input>
        <button onClick={handleInsertAt}>Insertar en posición 1</button>
        <ul>
            {
                artists.map(el => <li key={el.id}>{el.name}</li>)
            }
        </ul>
       <h3>Invertir/Ordenar array</h3>
       <button onClick={handleReverse}>Invertir</button>
       <button onClick={handleSort}>Ordenar</button>
       <ul>
            {
                artists.map(el => <li key={el.id}>{el.name}</li>)
            }
        </ul> 
        <h3>Actualizar objetos dentro de arrays</h3>
        <BucketList/>
        <BucketList2/>
    </>
}