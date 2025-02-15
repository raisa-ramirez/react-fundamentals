import { getImageUrl } from '../challenges/utils';
import Panel from './Panel';

// let currentPerson;
export default function Profile({ person }) {
//   currentPerson = person;
  return (
    <Panel>
      <Header name={person.name}/>
      <Avatar person={person}/>
    </Panel>
  )
}

function Header({name}) {
  return <h4>{name}</h4>;
}

function Avatar({person}) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person.imageId)}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}