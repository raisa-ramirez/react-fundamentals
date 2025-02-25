import { use, useState } from "react";

export default function Counter(){
    const [boxState, setBoxState] = useState(true)
    const [isFancy, setIsFancy] = useState(false)
    const [isPaused, setIsPaused] = useState(true)
    const [isPlayerA, setIsPlayerA] = useState(true)

    return <>
        <h4>* Elimina el estado por cambio de posición en el árbol</h4>
        <Box/>
        {boxState && <Box hide='true'/>}
        <label>
            <input type="checkbox" onChange={() => setBoxState(!boxState)}/>
            Renderiza el segundo contador
        </label>
        <hr/>
        <h4>* Mantiene el estado por mantener la posición en el árbol</h4>
        { 
        isFancy?
            <FancyBox isFancy={isFancy}/>:
            <FancyBox isFancy={isFancy}/>
        }
        <label>
            <input type="checkbox" checked={isFancy} onChange={() => setIsFancy(!isFancy)}/>
            Cambiar estilo
        </label>
        <hr/>
        <h4>* Reinicio de estado por ser diferentes componentes en la misma posición</h4>
        {
            isPaused?
            <Box/>:
            <p>Hola Raisa</p>
        }
        <label>
            <input type="checkbox" onChange={() => setIsPaused(!isPaused)}/>
            Cambiar componente
        </label>
        <hr/>
        <h4>* Reiniciar el estado en la misma posición</h4>
        {
        isPlayerA?
            <Scoreboard person="Raisa" key="0"/>:
            <Scoreboard person="Juan" key="1"/>
        }
        
        <button onClick={() => setIsPlayerA(!isPlayerA)}>Siguiente jugador</button>
    </>
}

function Box(){
    const [counter, setCounter] = useState(0)
    const [boxHover, setBoxHover] = useState(true)
    let className = (boxHover)?'box':'box box-hover'

    return <div 
            className={className} 
            onPointerOver={() => setBoxHover(false)}
            onPointerLeave={() => setBoxHover(true)}
        >
            <p>{counter}</p>
            <button onClick={() => setCounter(counter+1)}>Aumentar</button>
        </div>
}

function FancyBox({isFancy}) {
    const [counter, setCounter] = useState(0)
    let className = (isFancy)?'box':'box box-hover'

    return <div 
            className={className} 
        >
            <p>{counter}</p>
            <button onClick={() => setCounter(counter+1)}>Aumentar</button>
        </div> 
}

function Scoreboard({person}){
    const [counter, setCounter] = useState(0)
    const [boxHover, setBoxHover] = useState(true)
    let className = (boxHover)?'box':'box box-hover'

    return <div 
        className={className} 
        onPointerOver={() => setBoxHover(false)}
        onPointerLeave={() => setBoxHover(true)}
    >
        <p>Puntos de {person}: {' '}           
            {counter}
        </p>
        <button onClick={() => setCounter(counter+1)}>Aumentar</button>
    </div>
}