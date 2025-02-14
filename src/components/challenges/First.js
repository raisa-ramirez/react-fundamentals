const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    },
    url: "https://randomuser.me/api/portraits/men/22.jpg",
    imageId: '7vQD0fP',
    imageSize: 's',
}; 
 
 export default function First() {
    

    return (
      <div style={person.theme}>
        <h1>Tareas pendientes de {person.name}</h1>
        <img
          className="avatar"
          src={person.url}
        //   src={person.url+person.imageId+person.imageSize+"jpg"}
          alt="Gregorio Y. Zara"
        />
        <ul>
        <li>Mejorar el videoteléfono</li>
        <li>Preparar clases de aeronáutica</li>
        <li>Trabajar en el motor de alcohol</li>
        </ul>
      </div>
    );
  }