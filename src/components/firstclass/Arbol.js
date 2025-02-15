import FancyText from './three/FancyText';
import InspirationGeneratorS2 from './three/InspirationGeneratorS2';
import InspirationGeneratorS1 from './three/InspirationGeneratorS1';
import Copyright from './three/Copyright';

export default function Arbol() {
  return (
    <>
        <h1 className='title'>Part VI. UI como un árbol</h1> 
        <FancyText title text="Get Inspired App V1" />
        <InspirationGeneratorS1>
            <Copyright year={2025} />
        </InspirationGeneratorS1>
        
        <FancyText title text="Get Inspired App V2" />
        <InspirationGeneratorS2>
            <Copyright year={2004} />
        </InspirationGeneratorS2>        
    </>
  );
}

