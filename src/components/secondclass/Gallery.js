import { useState } from "react"

function Image({id}){
    let imageUrl = `https://randomuser.me/api/portraits/men/${id}.jpg`
    return <img src={imageUrl} style={{borderRadius:'20px', width: '150px', height: '150px', padding: '4px'}}></img> 
}

function Frame({children, state}) {
    return <div style={
        {
            borderRadius:'20px', 
            backgroundColor: '#D70654', 
            width: '160px', 
            height: '160px', 
            textAlign: 'center', 
            marginTop: '10px',
            marginBottom: '10%'
        }}>
        {children}
        {(state)?
        <p>Esta es una fotografía del personaje</p>:
        ''}
    </div>
}

export default function Galery() {
    // Error
    // let number = 1
    // const onHandleClick = () => {
    //     number = number + 1 
    // }
    let [number, setNumber] = useState(15)
    let [showDescription, setshowDescription] = useState(true)
    return <>        
        <Frame state={showDescription}>
            <Image id={number}/>
            <button onClick={() => setNumber(number + 1)}>Siguiente</button>
            <button onClick={() => setshowDescription(!showDescription)}>
                {(showDescription)?'Ocultar':'Mostrar'}
            </button>
            {/* <button onClick={onHandleClick}>Siguiente</button> */}
        </Frame>
    </>  
}