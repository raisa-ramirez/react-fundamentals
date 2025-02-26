import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const catImg = useRef(null)

  const getMap = () => {
    if(!catImg.current){
        catImg.current = new Map()
    }
    return catImg.current
  }

  const handleClic = () => {
    let nextIndex;
    flushSync(() => {
        nextIndex = index < catList.length - 1 ? index + 1 : 0
        setIndex(nextIndex)
    }) 

    let imgs = getMap()
    let nextCat = imgs.get(nextIndex)
    
    nextCat.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
    })
  }

  return (
    <>
        <h3>Challenge #3</h3>
        <nav className='catNav'>
            <button onClick={handleClic}>
            Siguiente
            </button>
        </nav>
        <div className='divCat'>
            <ul className='ulCat'>
            {catList.map((cat, i) => (
                <li key={cat.id} className='liCat'>
                <img
                    className={
                    index === i ?
                        'active' :
                        ''
                    }
                    src={cat.imageUrl}
                    alt={'Cat #' + cat.id}
                    ref={(img) => {
                        const pics = getMap()
                        pics.set(i, img)
                        return () => {
                            pics.delete(img)
                        }
                    } }
                />
                </li>
            ))}
            </ul>
        </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://loremflickr.com/250/200?random=' + i
  });
}