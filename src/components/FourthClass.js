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
import Video from "./fourthclass/Video"
import ChatApp from "./fourthclass/ChatApp"
import MyInput from "./fourthclass/MyInput"
import Form from "./fourthclass/Form"
import MyCounter from "./fourthclass/MyCounter"
import Bio from './fourthclass/Bio'
import Todo from "./fourthclass/Todo"
import TodoListTask from './fourthclass/TodoListTask'
import ContactManager from "./fourthclass/ContactManager"
import SubmitForm from "./fourthclass/SubmitForm"
import ChatRoom from "./fourthclass/ChatRoom"
import MessageRoom from "./fourthclass/MessageRoom"
import Pointer from './fourthclass/Pointer'
import MovePointer from "./fourthclass/MovePointer"
import SecureChat from "./fourthclass/SecureChat"
import Planets from "./fourthclass/Planets"
import Timer from "./fourthclass/Timer"
import Banner from "./fourthclass/Banner"
import SalaChat from "./fourthclass/SalaChat"
import StatusBar from "./fourthclass/StatusBar"
import FormInput from "./fourthclass/FormInput"
import CounterNew from "./fourthclass/CounterNew"
import Canvas from "./fourthclass/Canvas"

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
        <h3 className="title">useEffect: Sincronizar con efectos</h3> 
        <Video/> 
        <ChatApp/>
        <MyInput/>
        <Form/> 
        <MyCounter/>
        <Bio/> 
        <h3 className="title">useEffect: Omitir efectos innecesarios</h3> 
        <Todo/>
        <TodoListTask/>
        <ContactManager/>
        <SubmitForm/>
        <h3 className="title">useEffect: Ciclo de vida de los efectos reactivos</h3> 
        <ChatRoom/>
        <MessageRoom/>
        <Pointer/> 
        <MovePointer/> 
        <SecureChat/>
        <Planets/> 
        <h3 className="title">useEffect: Eliminar dependencias de los Efectos</h3> 
        <Timer/> 
        <Banner/>
        <SalaChat/>
        <h3 className="title">Hooks personalizados</h3> 
        <StatusBar/> 
        <FormInput/>
        <CounterNew/>
        {/* <Canvas/> */}
    </>
}