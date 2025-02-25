import Equipaje from "./conditionals/Equipaje"

export default function Conditionals(){
    let items = [
        { isPacked:false , item:"Camisa blanca" },
        { isPacked:false , item:"Tacones" },
        { isPacked:true , item:"Gorra Nike" }
    ]

    let list = items.map((item, i) => 
        <Equipaje isPacked={item.isPacked} item={item.item} key={i}/> 
    )
    return <>
        <h1 className="title">Renderizado Condicional</h1>
        <h3>Lista de equipaje de Sally Ride</h3>
        <ol>
            { list }            
            <Equipaje isPacked={false} item="Traje de vuelo"/>
            <Equipaje isPacked={false} item="Casco con dorado a la hoja"/>
            <Equipaje isPacked={true} item="Fotografía de Tam"/>
        </ol>
    </>
}