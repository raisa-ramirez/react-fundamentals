import { useState } from 'react';
import {useCounter} from './useCounter'
import useInterval from './useInterval';

export default function CounterNew() {
    const [delay, setDelay] = useState(1000);
    const count = useCounter(delay)

    return <>
        <h3>Challenge #1, #2, #3</h3>
        <label>
        Duración del tic: {delay} ms
        <br />
        <input
          type="range"
          value={delay}
          min="10"
          max="2000"
          onChange={e => setDelay(Number(e.target.value))}
        />
        </label>
        <hr />
        <h1>Segundos transcurridos: {count}</h1>
    </>;
}