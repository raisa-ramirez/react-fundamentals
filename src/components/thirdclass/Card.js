import { LevelContext } from "./context/LevelContext"
import Heading from "./Heading"

export default function Card({level, children}){
    return <div style={
        {   
            border: '1px solid rgb(88 196 220)', 
            borderRadius: '20px', 
            padding: '20px',
            marginTop: '10px'
        }
    }>
        <LevelContext.Provider value={level}>
            {children}
        </LevelContext.Provider>
    </div>
}