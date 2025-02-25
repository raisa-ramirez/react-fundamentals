import Clock from "./cpuros/Clock"
import Profile from "./cpuros/Profile"
import StoryTray from "./cpuros/StoryTray"

export default function CPuros(){
    let stories = [
        {
            id: 1,
            label: 'Historia de Ankit'
        },
        {
            id: 2,
            label: 'Historia de Taylor'
        }
    ]
    
    return <>
        <h1 className="title">Componentes Puros</h1>
        <h3>Clock</h3>
        <Clock time={new Date("Feb 13, 08 04:20")}/>
        <h3>Profile</h3>
        <Profile person={{
            imageId: '10',
            name: 'Subrahmanyan Chandrasekhar',
        }} />
        <Profile person={{
            imageId: '2',
            name: 'Creola Katherine Johnson',
        }} />
        <h3>Stories</h3>
        <StoryTray stories={stories}/>
    </>
}