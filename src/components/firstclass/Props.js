import Card from './props/Card'
import Photo from './props/Photo'
import Second from './challenges/Second'

export default function Props() {
    let url = "https://randomuser.me/api/portraits/women/82.jpg"
    let props = {
        img: url
    } 
    return <>
        <h1 className="title">Props</h1>
        <Card>
            {/* <Photo img={url}/> */}
            <Photo {...props}/>
            <Second/>
        </Card>
    </>
}