import { useState } from 'react';

export default function ContactList() {
  const [reverse, setReverse] = useState(false);

  const displayedContacts = [...contacts];
  if (reverse) {
    displayedContacts.reverse();
  }

  return (
    <>
        <h3>Challenge #5</h3>
        <label>
            <input
            type="checkbox"
            value={reverse}
            onChange={e => {
                setReverse(e.target.checked)
            }}
            />{' '}
            Mostrar en orden inverso
        </label>
        <ul>
            {displayedContacts.map((contact, i) =>
            <li key={contact.id}>
                <Contact contact={contact} />
            </li>
            )}
        </ul>
    </>
  );
}

function Contact({ contact }) {
    const [expanded, setExpanded] = useState(false);
    return (
      <>
        <p><b>{contact.name}</b></p>
        {expanded &&
          <p><i>{contact.email}</i></p>
        }
        <button onClick={() => {
          setExpanded(!expanded);
        }}>
          {expanded ? 'Ocultar' : 'Mostrar'} correo electrónico
        </button>
      </>
    );
}  

const contacts = [
  { id: 0, name: 'Alice', email: 'alice@mail.com' },
  { id: 1, name: 'Bob', email: 'bob@mail.com' },
  { id: 2, name: 'Taylor', email: 'taylor@mail.com' }
];
