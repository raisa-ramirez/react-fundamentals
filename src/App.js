import { useState } from "react"
import FirstClass from "./components/FirstClass"
import SecondClass from "./components/SecondClass"
import ThirdClass from "./components/ThirdClass"
import FourthClass from "./components/FourthClass"

export default function App(){ 
  let [classOne, setClassOne] = useState(false)  
  let [classTwo, setClassTwo] = useState(false)  
  let [classThree, setClassThree] = useState(false)  
  let [classFourth, setClassFourth] = useState(false)  
  
  return ( 
    <div className='main'>  
      <h1 className="main-title">React v19</h1>
      <h2 className="theme" onClick={() => setClassOne(!classOne)}>I. Fundamentals</h2>
      {(classOne)?<FirstClass/>:''} 
      <h2 className="theme" onClick={() => setClassTwo(!classTwo)}>II. Interactividad</h2>
      {(classTwo)?<SecondClass/>:''}
      <h2 className="theme" onClick={() => setClassThree(!classThree)}>II. Gestión del estado</h2>
      {(classThree)?<ThirdClass/>:''}
      <h2 className="theme" onClick={() => setClassFourth(!classFourth)}>III. Puertas de escape</h2>
      {(classFourth)?<FourthClass/>:''}
    </div>
  )
};