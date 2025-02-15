import Arrays from "./renderizado/Arrays"
import AObjetos from "./renderizado/AObjetos"
import Recipe from "./renderizado/Recipe"
import Haiku from "./renderizado/Haiku"

export default function Renderizado() {
    return <>
        <h1 className="title">Part IV. Renderizado de listas</h1>
        <h2>Array</h2>
        <ul><Arrays/></ul>
        <h2>Array of Objects</h2>
        <AObjetos/>
        <h2>Challenges</h2>
        <Recipe/>
        <Haiku/>
    </>
}