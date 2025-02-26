import { useRef, useState } from "react"
import { flushSync } from "react-dom"

let n = 1
let tasks = []
for (let index = 1; index < 11; index++) {
    tasks.push({
        id: n++ ,
        name: 'Tarea '+index
    })  
}

export default function TodoList() {
    const [lstTasks, setLstTasks] = useState(tasks)
    const [task, setTask] = useState('')
    const olRef = useRef(null)

    const handleAdd = () => {
        let newItem = {
            id: n++, 
            name: task
        }
        flushSync(() =>  {
            setTask('')
            setLstTasks([...lstTasks, newItem])
        })       
        olRef.current.lastChild.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        })
    }

    return <>
        <input value={task} onChange={(e) => setTask(e.target.value)}/>
        <button onClick={handleAdd}>Add task</button>
        <ol ref={olRef}>
        { lstTasks.map((task) => <li key={task.id}>{task.name} {task.id}</li>) }
        </ol>
    </>
}