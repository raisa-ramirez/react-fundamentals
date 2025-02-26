import { useRef, useState } from "react"

export default function Cats(){
    const[lstCats, setLstCats] = useState(cats)
    const catImg = useRef(null)   

    const handleScroll = (cat) => {
        let map = getMap()
        let img = map.get(cat)

        img.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest'
        })
    }

    const getMap = () => {
        if (!catImg.current) {
            catImg.current = new Map();
        }
        return catImg.current;
    }
    
    return <>
        <nav className="catNav">
            <button onClick={() => handleScroll(lstCats[0])}>
            Neo
            </button>
            <button onClick={() => handleScroll(lstCats[1])}>
            Neo and Banana
            </button>
            <button onClick={() => handleScroll(lstCats[2])}>
            Louie
            </button>
            <button onClick={() => handleScroll(lstCats[3])}>
            Millie
            </button>
        </nav>
        <div className="divCat">
            <ul className="ulCat">
                {
                    lstCats.map((cat,i) => <li 
                    key={i}
                    className='liCat'>
                        <img src={cat} ref={(img)=>{
                            const map = getMap()
                            map.set(cat, img) // Guarda la referencia del elemento en el Map
                            return () => {
                                map.delete(cat) // Borra la referencia cuando el elemento desaparece
                            }
                        }}/>
                    </li>)
                }                
            </ul>
        </div>
    </>
}

const cats = [
    'https://placecats.com/neo_2/310/200',
    'https://placecats.com/neo_banana/310/200',
    'https://placecats.com/louie/310/200',
    'https://placecats.com/millie/310/200'
]