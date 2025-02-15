export default function Equipaje({isPacked, item}){ 
    let done = <del>{item} ✅</del>
    let toDo = item +"❌"
    return <>
        <li>{ (isPacked)?done:toDo }</li>
    </>
}