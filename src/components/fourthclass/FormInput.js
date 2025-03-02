import { useState } from "react"

// Hook personalizado
function useFormInput(initialValue) {
    const [input, setInput] = useState(initialValue)

    const inputValues = {
        value: input,
        onChange: (e) => setInput(e.target.value)
     }
    
    return inputValues
}

export default function FormInput(){    
    const name = useFormInput('Raisa')
    const lastname = useFormInput('Ramírez')

    return <>
        Nombre: <input {...name} />
        Apellido: <input {...lastname} />
        
        <h4>Buenos días, {name.value} {lastname.value}.</h4>
    </>
}