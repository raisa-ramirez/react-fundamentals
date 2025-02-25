import { useState } from "react";

export default function Picture() {
    // Haz que al hacer clic en la imagen elimine la clase CSS background--active del <div> externo, 
    // pero agregue la clase picture--active a la <img>.
    // Al hacer clic en el fondo nuevamente, debería restaurar las clases CSS 
    const [status, setStatus] = useState('img')
    let divClass = 'background'
    let imgClass = 'picture'

    if(status==='both'){
        divClass += ' background--active'
    } else if(status==='img'){
        imgClass += ' picture--active'
    }

    return (
        <>
            <h3>Challenge #1</h3>
            <div className={divClass} onClick={() => setStatus('both')}>
                <img
                className={imgClass}
                alt="Casas de arcoiris en Kampung Pelangi, Indonesia"
                src="https://randomuser.me/api/portraits/men/78.jpg"
                onClick={(e) => {
                    e.stopPropagation()
                    setStatus('img')
                }}
                />
            </div>
        </>
    );
}  