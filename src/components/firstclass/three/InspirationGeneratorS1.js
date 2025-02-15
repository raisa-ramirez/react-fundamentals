import { useState } from 'react'
import FancyText from './FancyText.js'
import Square from './Square.js'
import inspirations from './inspirations.js'

export default function InspirationGenerator({children}){
    let [position, setPosition] = useState(0)
    let inspiration = inspirations[position]
    const changeInspiration = () => {
        setPosition((position + 1) % inspirations.length)
    }
    return <>    
        Your inspirational {inspiration.type} is:   
        {(inspiration.type=='color')?
        <Square color={inspiration.value}/>:
        <FancyText text={inspiration.value}/>} 
        <button onClick={changeInspiration}>Inspire me again</button>
        {children}
    </>
}