import { useState } from 'react';
import { foods, filterItems } from './datos.js';

export default function FilterableList() {
    const [query, setQuery] = useState('');
    let items = filterItems(foods, query)

    function handleChange(e) {
        setQuery(e.target.value);
    }

    return (
        <>
        <h3>Challenge #2</h3> 
        <SearchBar query={query} handleChange={handleChange}/>
        <hr />
        <List items={items} />
        </>
    );
}

function SearchBar({query, handleChange}) { 
  return (
    <label>
      Buscar:{' '}
      <input
        value={query}
        onChange={handleChange}
      />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}