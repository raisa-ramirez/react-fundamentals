import { useEffect, useRef, useState } from "react"
import { flushSync } from "react-dom"

function Player({isPlaying, src}){
    const video = useRef(null)   

    useEffect(() => {
        if(isPlaying){
            video.current.play()
        } else {
            video.current.pause()
        }
    },[isPlaying])

    return <video
        ref={video}
        muted
        width='400'
        src={src}
        className="video">            
    </video>
}


export default function Video(){ 
    const [isPlaying, setIsPlaying] = useState(false)
    const [text, setText] = useState('');

   
    return <>
        <input value={text} onChange={e => setText(e.target.value)} />
        <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying?'Pause ⏸️':'Play ▶️'}</button>
        <br/>
        <Player 
        isPlaying={isPlaying}
        src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'/>
    </>
}