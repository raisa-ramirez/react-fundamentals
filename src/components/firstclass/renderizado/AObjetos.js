import { getImageUrl } from '../challenges/utils'
const people = [{
    id: 0, // Usado en JSX como key
    name: 'Creola Katherine Johnson',
    profession: 'matemática',
    accomplishment: 'los cálculos de vuelos espaciales',
  }, {
    id: 1, // Usado en JSX como key
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'químico',
    accomplishment: 'el descubrimiento del agujero de ozono en el Ártico',
    imageId: 'mynHUSa'
  }, {
    id: 2, // Usado en JSX como key
    name: 'Mohammad Abdus Salam',
    profession: 'físico',
    accomplishment: 'la teoría del electromagnetismo',
  }, {
    id: 3, // Usado en JSX como key
    name: 'Percy Lavon Julian',
    profession: 'químico',
    accomplishment: 'ser pionero en el uso de cortisona, esteroides y píldoras anticonceptivas',
  }, {
    id: 4, // Usado en JSX como key
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'químico',
    accomplishment: 'los cálculos de masa de estrellas enanas blancas',
  }
];

let chemists = people.filter(person => person.profession=='químico') 
let others = people.filter(person => person.profession !=='químico')

function Item({person}) {
    return <li className='myLi'>
            <img
                src={getImageUrl(person.id)}
                alt={person.name}
                className='myImg'
            />
            <p>
                <b>{person.name}</b>
                {' ' + person.profession + ' '}
                conocido/a por {person.accomplishment}
            </p>
        </li>
    // </ul>
}

export default function AObjetos(){    
    let myChemists = chemists.map(person => <Item person={person} key={person.id}/>)
    let all = others.map(person => <Item person={person} key={person.id}/>)
    
    return <>
        <h3>Químicos</h3>
        <ul className="myUl">{myChemists}</ul>
        <h3>Others</h3>
        <ul className="myUl">{all}</ul>
    </>
}