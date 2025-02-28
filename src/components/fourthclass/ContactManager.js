import { useState, useEffect } from 'react';

export default function ContactManager() {
    const [
      contacts,
      setContacts
    ] = useState(initialContacts);
    const [
      selectedId,
      setSelectedId
    ] = useState(0);
    const selectedContact = contacts.find(c =>
      c.id === selectedId
    );

    function handleSave(updatedData) {
      const nextContacts = contacts.map(c => {
        if (c.id === updatedData.id) {
          return updatedData;
        } else {
          return c;
        }
      });
      setContacts(nextContacts);
    }
  
    return (
      <div>
        <h3>Challenge #3</h3> 
        <ContactList
          contacts={contacts}
          selectedId={selectedId}
          onSelect={id => setSelectedId(id)}
        />
        <hr />
        <EditContact
          key={selectedId}
          savedContact={selectedContact}
          onSave={handleSave}
        />
      </div>
    )
  }
  
const initialContacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' }
];

// EditContact
function EditContact({ savedContact, onSave}) {
  const [name, setName] = useState(savedContact.name);
  const [email, setEmail] = useState(savedContact.email);

  return (
    <section>
      <label>
        Nombre:{' '}
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Correo electrónico:{' '}
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <button onClick={() => {
        const updatedData = {
          id: savedContact.id,
          name: name,
          email: email
        };
        onSave(updatedData);
      }}>
        Guardar
      </button>
      <button onClick={() => {
        setName(savedContact.name);
        setEmail(savedContact.email);
      }}>
        Reiniciar
      </button>
    </section>
  );
}

function ContactList({
    contacts,
    selectedId,
    onSelect
  }) {
    return (
      <section>
        <ul>
          {contacts.map(contact =>
            <li key={contact.id}>
              <button onClick={() => {
                onSelect(contact.id);
              }}>
                {contact.id === selectedId ?
                  <b>{contact.name}</b> :
                  contact.name
                }
              </button>
            </li>
          )}
        </ul>
      </section>
    );
}