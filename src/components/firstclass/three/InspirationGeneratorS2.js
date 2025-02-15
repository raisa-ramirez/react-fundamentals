import { useState } from 'react'
import FancyText from './FancyText.js'
import Square from './Square.js'
import quotes from './quotes.js'
import colors from './colors.js'

export default function InspirationGenerator({children}){
    let [position, setPosition] = useState(0)
    let [type, setType] = useState('color')
    let quote = quotes[position]
    let color = colors[position]

    const change = () => {
        setPosition((position + 1) % ((type === 'color') ? colors.length : quotes.length))
        setType((type==='color')?'quote':'color')
    }    


    return <>    
        Your inspirational {type} is:    
        {(type==='color')?<Square color={color}/>:<FancyText text={quote}/>}
        <button onClick={change}>Inspire me again</button>
        {children}
    </>
}