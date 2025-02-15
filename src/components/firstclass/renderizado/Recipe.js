function Card({recipe}){
    let ingredients = recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)
    return <>
        <h2>{recipe.name}</h2>
        <ul>{ingredients}</ul>
    </>
}


export default function Recipe(){
    let recipes = [
        { 
            id: 1,
            name: 'Café',
            ingredients: ['Agua','Azúcar','Café']
        },
        { 
            id: 2,
            name: 'Sopa',
            ingredients: ['Agua','Papas','Zanahoria','Pollo']
        },
        { 
            id: 3,
            name: 'Arroz',
            ingredients: ['Agua','Arroz','Consome', 'Zanahoria','Papas']
        }
    ]

    let cards = recipes.map(recipe => <Card key={recipe.id} recipe={recipe}/>)

    return <>
        {cards}
    </>
}