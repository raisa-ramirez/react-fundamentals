export default function Kaiku() {
    const poem = {
        lines: [
          'Escribo, borro y reescribo',
          'Borro de nuevo, y luego',
          'Florece una amapola.'
        ]
    };

    return <>
    {
        poem.lines.map(
            (line, i) => <>
                <p key={i}>{line}</p>
                {(i<poem.lines.length-1)?<hr/>:''}                
            </>
        )
    }
    </>
}