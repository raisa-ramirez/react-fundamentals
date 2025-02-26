import { useState, useRef } from 'react';
import { flushSync } from 'react-dom';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const video = useRef(null)

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying)
    nextIsPlaying?video.current.play():video.current.pause()
  }

  return (
    <>
        <h3>Challenge #1</h3> 
        <button onClick={handleClick}>
            {isPlaying ? 'Pausar' : 'Reproducir'}
        </button>
        <video 
        width="250" 
        ref={video}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}>
            <source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            type="video/mp4"            
            />
        </video>
        </>
  )
}
