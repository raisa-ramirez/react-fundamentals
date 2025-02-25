import Heading from "./Heading"

export default function Post({title, body}){
    return <div style={
        {
            border: '.9px dashed rgb(88 196 220)',
            padding: '15px',
            borderRadius: '20px',
            marginBottom: '20px',
            backgroundColor: 'rgb(88 196 220 / 0.2)'
        }}>
        <Heading><b>{title}</b></Heading>
        <Heading>{body}</Heading>        
    </div>
}