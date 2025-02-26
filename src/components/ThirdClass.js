import QuestiongForm from "./thirdclass/QuestionForm"
import Picture from "./thirdclass/Picture"
import UserForm from "./thirdclass/UserForm"
import Menu from "./thirdclass/Menu"
import Place from "./thirdclass/Place"
import Clock from "./thirdclass/Clock"
import TravelPlan from "./thirdclass/TravelPlan"
import MailClient from "./thirdclass/MailClient"
import Mail from "./thirdclass/Mail"
import Accordion from "./thirdclass/Accordion"
import SyncedInputs from "./thirdclass/SyncedInputs"
import FilterableList from "./thirdclass/FilterableList"
import Counter from "./thirdclass/Counter"
import Chat from "./thirdclass/Chat"
import Form from './thirdclass/Form'
import Fields from "./thirdclass/Fields"
import ContactManager from "./thirdclass/ContactManager"
import Gallery from "./thirdclass/Gallery"
import Contact from './thirdclass/Contact'
import TaskApp from "./thirdclass/TaskApp"
import Messenger from "./thirdclass/Messenger"
import MessengerBorrador from "./thirdclass/MessengerBorrador"
import Heading from "./thirdclass/Heading"
import Section from "./thirdclass/Section"
import Card from "./thirdclass/Card"
import Post from "./thirdclass/Post"
import Image from './thirdclass/Image'
import Food from "./thirdclass/Food"

export default function ThirdClass() {
    const props = { color: 'green', time: '1:00 am' }
    const posts = [
        {title: '¡Hola viajero!', body: 'Lee sobre mis aventuras.'},
        {title: 'Viaje a España', body: 'Diciembre 2025.'},
        {title: 'Viaje a Europa', body: 'Enero 2026.'}
    ]
    return <>
       <h3 className="title">Entrada de datos</h3> 
       <QuestiongForm/>
       <Picture/>
       <UserForm/>
       <Menu/>
       <h3 className="title">Objeto plano para evitar el estado anidado</h3>
       <Place/> 
       <Clock {...props}/>
       <TravelPlan/>
       <MailClient/>
       <Mail/>
       <h3 className="title">Compartir estado entre componentes</h3>
       <Accordion/> 
       <SyncedInputs/>
       <FilterableList/>
       <h3 className="title">Preservar y reiniciar el estado</h3>
       <Counter/> 
       <Chat/>
       <Form/>
       <Fields/>
       <ContactManager/>
       <Gallery/> 
       <Contact/>
       <h3 className="title">Extraer lógica de estado en useReducer</h3>
       <TaskApp/> 
       <Messenger/>
       <MessengerBorrador/>
       <h3 className="title">Contexto: una alternativa a pasar props</h3>
       <Section level={1}>
            <Heading>Title</Heading> 
            <Heading>Subtitle</Heading> 
            <Section level={6}>
                <Heading>Text...</Heading> 
                <Heading>"Paragraph"</Heading> 
            </Section>
       </Section> 
       <Card level={2}>
            <Heading>Mi perfil</Heading>
            <Card level={2}> 
                <Heading>Publicaciones</Heading>                
                <Card level={7}>
                    { posts.map((post, i) => <Post key={i} title={post.title} body={post.body}/>) }
                </Card>
            </Card>
        </Card>
        <Image/>
       <h3 className="title">Escalar con reducer y context</h3>
        <Food/>
    </>
}