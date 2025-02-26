import Counter from "./fourthclass/Counter"
import Stopwatch from "./fourthclass/Stopwatch"
import Chat from "./fourthclass/Chat"
import Toggle from "./fourthclass/Toggle"
import Dashboard from "./fourthclass/DebounceButton"
import Message from "./fourthclass/Message"
import Input from "./fourthclass/Input"
import CatGallery from "./fourthclass/CatGallery"
import Cats from "./fourthclass/Cats"
import TodoList from "./fourthclass/TodoList"
import VideoPlayer from "./fourthclass/VideoPlayer"
import Page from "./fourthclass/Page"
import CatFriends from "./fourthclass/CatFriends"
import Search from "./fourthclass/Search"

export default function FourthClass(){
    return <>
        <h3 className="title">useRef: Referenciar valores</h3>        
        <Counter/>
        <Stopwatch/>
        <Chat/>
        <Toggle/>
        <Dashboard/>
        <Message/> 
        <h3 className="title">useRef: Manipular el DOM</h3> 
        <Input/>
        <CatGallery/>
        <Cats/>
        <TodoList/>
        <VideoPlayer/>
        <Page/>
        <CatFriends/>
        <Search/>
    </>
}