import { useState } from "react"
import Event from "./secondclass/Events"
import Propagacion from './secondclass/Propagacion'
import LightSwitch from "./secondclass/LightSwitch"
import ColorSwitch from "./secondclass/ColorSwitch"
import Gallery from './secondclass/Gallery'
import Images from './secondclass/Images'
import Form from "./secondclass/Form"
import FeedbackForm from "./secondclass/FeedbackForm"
import Feedback from "./secondclass/Feedback"
import TrafficLight from "./secondclass/TrafficLight"
import Counter from "./secondclass/Counter"
import RequestTracker from "./secondclass/RequestTracker"
import TestCase from './secondclass/TestCase'
import MovingDot from "./secondclass/MovingDot"
import Forms from "./secondclass/Forms"
import OAnidado from "./secondclass/OAnidado"
import Immer from "./secondclass/Immer"
import Scoreboard from "./secondclass/Scoreboard"
import Canvas from "./secondclass/Canva"
import CanvaImmer from './secondclass/CanvaImmer'
import Arreglos from "./secondclass/Arreglos"
import ShoppingCart from "./secondclass/ShoppingCart"
import TaskApp from "./secondclass/TaskApp"

function changeColor(e){
    e.stopPropagation();    
    let divStyle = document.getElementById('mySquare').style
    if(divStyle.backgroundColor==='blue'){
        divStyle.backgroundColor = 'pink'
    } else {
        divStyle.backgroundColor = 'blue'
    }    
}

function MySquare(){
    return <div 
        style={{ backgroundColor: 'black', width: '100px', height:'100px', border: '2px solid yellow'}}
        id="mySquare">
    </div>
}

export default function SecondClass(){
    let [visit, setVisit] = useState(0);
    return <>
        <h1 className="title">Eventos</h1>
        <Event/>
        <Propagacion/>
        <MySquare/>
        <LightSwitch/>
        <div onClick={() => setVisit(visit + 1)}>
            <ColorSwitch onChangeColor={changeColor}/>
            <b> Clic para incrementar Visitas: </b> {visit}
        </div>
        <h1 className="title">useState</h1>
        <Gallery/>
        <Images/> 
        <Form/>
        <FeedbackForm/>
        <Feedback/>
        <h1 className="title">Cola de actualizaciones de estado</h1>
        <TrafficLight/>
        <Counter/>
        <RequestTracker/>
        <TestCase/>
        <h1 className="title">Actualizar objetos con useState</h1>
        <MovingDot/>
        <Forms/>
        <OAnidado/> 
        <Immer/> 
        <Scoreboard/>
        <Canvas/>
        <CanvaImmer/>     
        <h1 className="title">Actualizar arreglos con useState</h1>
        <Arreglos/>
        <ShoppingCart/>
        <TaskApp/>
    </>
}