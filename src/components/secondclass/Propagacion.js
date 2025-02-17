function Button({children, message}){
    let onHandleClick = (e) => {
        e.stopPropagation(); // Detiene la propagación del evento
        alert(message)
    }

    return <button onClick={onHandleClick}>{children}</button>
}

export default function Toolbar() {
    return <div onClick={() => alert('Soy la barra de herramientas')} className="toolbar">
        <Button message={'Soy el botón 1'}>Botón 1</Button>
        <Button message={'Soy el botón 2'}>Botón 2</Button>
    </div>
}