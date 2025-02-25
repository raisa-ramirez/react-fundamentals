import { act, useReducer, useState } from "react"
import tasksReducer, {tasksList} from './reducer/TasksReducer'
import TaskItem from "./reducer/TaskItem"

let index = 3

export default function TaskApp() {
    const [tasks, dispatch] = useReducer(tasksReducer, tasksList)   
    const [task, setTask] = useState('')  

    const addTask = (description) => {
        setTask('')
        dispatch({
            type: 'add',
            id: index++,
            description: description
        })
    }

    const deleteTask = (taskId) => {
        dispatch({
            type: 'delete',
            id: taskId
        })
    }

    const updateTask = (task) => {
        dispatch({
            type: 'update',
            data: task
        })
    }

    return <>
        <input value={task} onChange={(e) => setTask(e.target.value)}></input>
        <button onClick={() => addTask(task)}>Add</button> 
        <ol>
            {
                tasks.map(task => {
                return (
                    <TaskItem 
                    key={task.id}
                    task={task} 
                    deleteTask={deleteTask} 
                    updateTask={updateTask}/>
                )})
            }
        </ol>         
    </>
}