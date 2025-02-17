import { useState } from "react"
import FirstClass from "./components/FirstClass"
import SecondClass from "./components/SecondClass"

export default function App(){ 
  let [classOne, setClassOne] = useState(false)  
  let [classTwo, setClassTwo] = useState(true)  
  return ( 
    <div className='main'>  
      <h2 className="theme" onClick={() => setClassOne(!classOne)}>I. Fundamentals</h2>
      {(classOne)?<FirstClass/>:''} 
      <h2 className="theme" onClick={() => setClassTwo(!classTwo)}>II. Interactividad</h2>
      {(classTwo)?<SecondClass/>:''}
    </div>
  )
};