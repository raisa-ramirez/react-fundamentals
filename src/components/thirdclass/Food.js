import { act, use, useContext, useReducer, useState } from "react"
import { ListContext, DispatchListContext } from "./context/FoodContext"

let index = 4

export default function Food(){
    const [list, dispatch] = useReducer(foodReducer, foodList)    

    return <>    
        <h4>FOOD</h4>    
        <DispatchListContext.Provider value={dispatch}>
            <ListContext.Provider value={list}>
                <FoodList 
                foods={list}/>
            </ListContext.Provider>
        </DispatchListContext.Provider>         
    </>
}

function foodReducer(list, action){
    switch (action.type) {
        case 'delete_food': {
            return list.filter(food => food.id !== action.foodId)            
        }
        case 'edit_food': {
            return list.map(food => {
                if(food.id === action.id){
                    return {
                        ...food,
                        name: action.name
                    }
                } 
                return food
            })
        }
        case 'add_food': {
            return [
                ...list, 
                {'id': action.id, 'name': action.name}
            ]
        }
    }
}

function FoodList(){
    const foods = useContext(ListContext)
    const dispatch = useContext(DispatchListContext)
    const [task, setTask] = useState('')    
    
    function add_food(){
        setTask('')
        dispatch({
            type: 'add_food',
            id: index ++,
            name: task
        })
    }  

    return <table>
        <tbody>
            <tr>
                <td><input value={task} onChange={(e) => setTask(e.target.value)}/></td>
                <td colSpan={2}><button onClick={() => add_food()}>Agregar</button>  </td>
            </tr>         
            {
                foods.map(food => 
                    <FoodForm 
                    key={food.id} 
                    food={food}
                    />
                )
            }    
        </tbody>    
    </table>
}

function FoodForm({food}){ 
    const [isEditing, setIsEditing] = useState(false)  
    const dispatch  = useContext(DispatchListContext)       

    function edit_food(e, foodId){
        dispatch({
            type: 'edit_food',
            id: foodId,
            name: e.target.value
        })
    }

    function delete_food(foodId){
        dispatch({
            type:'delete_food',
            foodId: foodId
        })
    }
    
    return <tr>               
        {
            isEditing?
            <>
                <td>
                    <input 
                    value={food.name} 
                    key={food.id} 
                    onChange={(e) => edit_food(e, food.id)}/>
                </td>
                <td>
                    <button onClick={() => setIsEditing(false)}>Guardar</button>
                </td>
            </>
            :
            <> 
                <td>
                    {food.name}
                </td>
                <td>
                    <button onClick={() => setIsEditing(true)}>Editar</button>
                </td>
                <td>
                    <button onClick={() => delete_food(food.id)}>Borrar</button>          
                </td>
            </>
        }        
    </tr>
}

const foodList = [
    {id: 1, name: 'Comida china'},
    {id: 2, name: 'Hamburguesas'},
    {id: 3, name: 'Pizza'}
]