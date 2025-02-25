import { useReducer } from 'react';

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.message;
  const contact = contacts.find((c) => c.id === state.selectedId);

  return (
    <div>
        <h3>Challenge #1 and #2</h3>
        <ContactList
            contacts={contacts}
            selectedId={state.selectedId}
            dispatch={dispatch}
        />
        <Chat
            key={contact.id}
            message={message}
            contact={contact}
            dispatch={dispatch}
        />
    </div>
  );
}

const contacts = [
  {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
  {id: 1, name: 'Alice', email: 'alice@mail.com'},
  {id: 2, name: 'Bob', email: 'bob@mail.com'},
];

// Reducer
const initialState = {
    selectedId: 0,
    message: 'Hola',
};
  
function messengerReducer(state, action) {
    switch (action.type) {
      case 'changed_selection': {
        return {
          ...state,
          selectedId: action.contactId,
          message: '',
        };
      }
      case 'edited_message': {
        return {
          ...state,
          message: action.message,
        };
      }
      case 'sent_message': {
        return {
          ...state,
          message: '',
        };
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
}

// Contact List
function ContactList({contacts, selectedId, dispatch}) {
    return (
      <section className="contact-list">
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <button
                onClick={() => {
                    dispatch({
                        type: 'changed_selection',
                        contactId: contact.id,
                    })
                }}>
                {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
}  

// Chat
function Chat({contact, message, dispatch}) {
    return (
      <section className="chat">
        <textarea
          value={message}
          placeholder={'Chatear con ' + contact.name}
          onChange={(e) => {
            dispatch({
                type: 'edited_message',
                message: e.target.value
            })
          }}
        />
        <br />
        <button onClick={() => {
            alert('To: '+contact.name+' ('+contact.email+') \nMessage: '+message)
            dispatch({
                type: 'sent_message',
            })
        }}>Enviar a {contact.email}</button>
      </section>
    );
}  