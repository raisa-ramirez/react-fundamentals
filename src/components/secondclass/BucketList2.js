import { useState } from 'react';
import { useImmer } from 'use-immer';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Grandes barrigas', seen: false },
  { id: 1, title: 'Paisaje lunar', seen: false },
  { id: 2, title: 'Guerreros de terracota', seen: true },
];

export default function BucketList2() {
  const [myList, setMyList] = useImmer(initialList);
  const [yourList, setYourList] = useImmer(initialList);

  function handleToggleMyList(artworkId, nextSeen) {
    setMyList(draft => {
        const item = draft.find(el => el.id == artworkId)
        if(item) {
            item.seen = nextSeen
        }
    })
  }

  function handleToggleYourList(artworkId, nextSeen) {
    setYourList(draft => {
        const item = draft.find(el => el.id === artworkId)
        if(item){
            item.seen = nextSeen
        }
    })
  }

  return (
    <>
      <h1>Lista de deseos de arte con immer</h1>
      <h2>Mi lista de obras de arte para ver:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Tu lista de obras de arte para ver:</h2>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
