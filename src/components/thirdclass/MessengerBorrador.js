import { useReducer } from 'react';

export default function MessengerBorrador() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);  
  const contact = contacts.find((c) => c.id === state.selectedId);
  const message = state.messages[contact.id];
  return (
    <div>
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


// Messenger Reducer
export const initialState = {
  selectedId: 0,
  messages: [ 'Hola Taylor','Hola Alice', 'Hola Bob'],
};

export function messengerReducer(state, action) {
  switch (action.type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId,
        message: state.messages[action.contactId],
      };
    }
    case 'edited_message': {
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.contactId]: action.message
        },
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
                });
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
            contactId: contact.id,
            message: e.target.value,
          });
        }}
      />
      <br />
      <button
        onClick={() => {
          alert(`Enviando "${message}" a ${contact.email}`);
          dispatch({
            type: 'sent_message',
          });
        }}>
        Enviar a {contact.email}
      </button>
    </section>
  );
}