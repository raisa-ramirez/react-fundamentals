import Gallery from "./fundamentals/Gallery.js";
import Profile from "./fundamentals/Profile.js";
import TodoList from "./fundamentals/TodoList.js";
import { Bio } from "./fundamentals/Bio.js"
import { Avatar } from "./fundamentals/Avatar.js"
import First from "./challenges/First.js"

export default function Fundamentals() {
    return <>
        <h1 className="title">Fundamentals</h1>
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