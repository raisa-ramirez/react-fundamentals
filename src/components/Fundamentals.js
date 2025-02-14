import Gallery from "./Gallery";
import Profile from "./Profile";
import TodoList from "./TodoList";
import { Bio } from "./Bio.js"
import { Avatar } from "./Avatar.js"
import First from "./challenges/First.js"

export default function Fundamentals() {
    return <>
        <h1>JSX con llaves</h1>  
        <Avatar/> 
        <First/>
        <h1>Atributos JSX</h1>       
        <Bio/>
        <h1>Marcado JSX</h1>
        <TodoList/>
        <h1>Importar y exportar</h1>
        <Gallery/>
        <Profile/>
    </>
}