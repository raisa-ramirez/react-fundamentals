export default function Profile({person}){
    let name =  person.name
    let imageUrl = person.imageUrl
    let width = person.width
    let height = person.height
    let profession = person.profession
    let awards = person.awards
    let discoveries = person.discoveries

    return <>
        <section className="profile">
            <h2>{name}</h2>
            <img
                className="avatar"
                src={imageUrl}
                alt={name}
                width={width}
                height={height}
            />
            <ul>
                <li>
                <b>Profesión: </b> 
                {profession}
                </li>
                <li>
                <b>Premios: {awards.length} </b> 
                ({awards.join(', ')})
                </li>
                <li>
                <b>Descubrió: </b>
                {discoveries}
                </li>
            </ul>
        </section>
    </>
}