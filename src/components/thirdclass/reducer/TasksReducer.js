export default function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'add':{
            return [
                ...tasks,
                {
                    id: action.id,
                    description: action.description,
                }
            ]
        }
        case 'delete': {
            return tasks.filter(task => task.id !== action.id)
        }
        case 'update': {
            return tasks.map(task => {                
                if(task.id === action.data.id){
                    return action.data                    
                } else {
                    return task 
                }
            })
        }
    }
}

export const tasksList = [
    {id: 0, description: 'Comer'},
    {id: 1, description: 'Dormir'},
    {id: 2, description: 'Nadar'}
]