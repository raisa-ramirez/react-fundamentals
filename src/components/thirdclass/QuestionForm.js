import { startTransition, use, useState } from "react"

export default function QuestiongForm() {
    const [answer, setAnswer] = useState('')
    const [status, setStatus] = useState('')

    const changeAnswer = (e) => {
        setAnswer(e.target.value)
    }
    
    const sendAnswer = (e) => {
        e.preventDefault();
        setStatus('submitting')
        setTimeout(()=>{
            if(answer==='Lima'){
                setStatus('ok')
            } else {
                setStatus('error')
            }
        },1500)       
    }   
    
    return <>
        <h4>Cuestionario sobre ciudades</h4>
        <form onSubmit={sendAnswer}> 
            <p>¿En qué ciudad hay un cartel publicitario que convierte el aire en agua potable?</p>
            <input onChange={changeAnswer} value={answer}></input>
            <button disabled={answer.length===0 || status==='submitting'}>Enviar</button>            
        </form>
        {status==='ok' && <p style={{color:'green'}}>Respuesta correcta.</p> }
        {status==='error' && <p style={{color:'red'}}>Respuesta incorrecta.</p> }
    </>
}