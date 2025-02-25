import { useState } from "react"

export default function TaskItem({task, deleteTask, updateTask}) {
    const [editId, setEditId] = useState()

    return (
        <li key={task.id}>
            {
                editId===task.id?
                <>
                    <input 
                    value={task.description} 
                    onChange={(e)=> {
                    updateTask({
                        ...task, 
                        description: e.target.value
                    })}}/>
                    <button onClick={() => setEditId(task)}>Guardar</button>
                </>:
                <>
                    {task.description}
                    <button onClick={() => setEditId(task.id)}>Editar</button>
                </>
            } 
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
        </li>
    )
}