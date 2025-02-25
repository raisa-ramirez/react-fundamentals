import { useState } from "react";
import {contacts} from './ContactList.js'

export default function Chat() {
    const [contact, setContact] = useState(contacts[0])

    return <>
        <ContactList
        contacts={contacts}
        selectedContact={contact}        
        onSelect={(contact) => setContact(contact)}/>        

        <BoxMessage contact={contact} key={contact.id}/>
    </>
}


function BoxMessage({ contact }) {
    const [text, setText] = useState('');
    return (
      <section className="chat">
        <textarea
          value={text}
          placeholder={'Chatear con ' + contact.name}
          onChange={e => setText(e.target.value)}
        />
        <br />
        <button>Enviar a {contact.email}</button>
      </section>
    );
}

function ContactList({
    selectedContact,
    contacts,
    onSelect
  }) {    
    return (
      <section className="contact-list">
        <ul>
          {contacts.map(contact =>
            <li key={contact.id}>
              <button onClick={() => { onSelect(contact)}}>
                {contact.name}
              </button>
            </li>
          )}
        </ul>
      </section>
    );
}