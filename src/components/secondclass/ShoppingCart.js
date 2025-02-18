import { useState } from 'react';

const initialProducts = [
    {
        id: 0,
        name: 'Baklava',
        count: 1,
    }, {
        id: 1,
        name: 'Queso',
        count: 5,
    }, {
        id: 2,
        name: 'Espaguetis',
        count: 2,
    }
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    const newArray = products.map(prod => {
        if(prod.id == productId){
            prod.count += 1
        }
        return prod
    })
    setProducts(newArray)
  }

  function handleDecreaseClick(productId){
    const newArray = products.map(prod => {
        if(prod.id == productId){
            prod.count -= 1
        }
        return prod
    })
    setProducts(newArray)
  }

  return (
    <>
        <h3>Challenge #1 and #2</h3>
        <ul>
        {products.map(product => (
            <li key={product.id}>
            {product.name}
            {' '}
            (<b>{product.count}</b>)
            <button onClick={() => {
                handleIncreaseClick(product.id);
            }}>
                +
            </button>
            <button onClick={() => {
                handleDecreaseClick(product.id)
            }}>
                –
            </button>
            </li>
        ))}
        </ul>
    </>
  );
}