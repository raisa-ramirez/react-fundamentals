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
        <Gallery/>
        <Images/> 
        <Form/>
        <FeedbackForm/>
        <Feedback/>
    </>
}