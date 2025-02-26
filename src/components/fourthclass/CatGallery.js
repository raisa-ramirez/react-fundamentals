import { useRef } from "react"

export default function CatGallery(){
    const louie = useRef(null)
    const neo = useRef(null)
    const millie = useRef(null)

    const handleScrollToFirstCat = () => {
        louie.current.scrollIntoView({
            behavior: "smooth", block: "nearest", inline: "center"
        })
    }

    const handleScrollToSecondCat = () => {
        neo.current.scrollIntoView({
            behavior: "smooth", block: "nearest", inline: "center"
        })
    }

    const handleScrollToThirdCat = () => {
        millie.current.scrollIntoView({
            behavior: "smooth", block: "nearest", inline: "center"
        })
    }
    
    return <>
        <nav className="catNav">
            <button onClick={handleScrollToFirstCat}>
            Louie
            </button>
            <button onClick={handleScrollToSecondCat}>
            Neo
            </button>
            <button onClick={handleScrollToThirdCat}>
            Millie
            </button>
        </nav>
        <div className="divCat">
            <ul className="ulCat">
                <li className='liCat'>
                    <img src='https://placecats.com/louie/310/200' ref={louie}/>
                </li>
                <li className='liCat'>
                    <img src='https://placecats.com/neo/310/200' ref={neo}/>
                </li>
                <li className='liCat'>
                    <img src='https://placecats.com/millie/310/200' ref={millie}/>
                </li>
            </ul>
        </div>
    </>
}